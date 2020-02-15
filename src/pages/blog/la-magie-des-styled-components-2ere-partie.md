---
title: La magie des styled-components - 2ère partie
date: 2020-02-09T21:43:16.685Z
author: Mathieu
thumbnail: /assets/johannes-plenio-1vzlw-ihjam-unsplash-1-.jpg
tags:
  - styled-components
  - react
  - css
---
- ~~V5 perfs~~
- ~~props ⇒ props~~
- ~~css\`` function from styled-components~~
- ~~extend avec styled(Component)~~
- ~~nested, parent:hover &, override &&~~
- theme
- extraire les fonctions
- organisation des fichiers
- ressources

Cet article est le 2e d'une série consacrée à l'utilisation des styled-components avec React, pour lire la première partie c'est ici: [La magie des styled-components - 1ère partie](https://www.commit42.com/blog/la-magie-des-styled-components-1ere-partie/).

## Nouvelle version de la librairie!

Avant de rentrer dans le vif du sujet un bonne nouvelle, depuis la publication du premier article la v5 est sortie. Au programme des performances accrues et un bundle plus léger.

> 50% faster server-side rendering, 22% faster client-side rendering, 31% smaller bundle size, RTL support and no breaking changes!
> -- <cite>Evan Jacobs, [Announcing styled-components v5: Beast Mode](https://medium.com/styled-components/announcing-styled-components-v5-beast-mode-389747abd987)</cite>

Avec de tels arguments il n'y a pas à hésiter, nous avons testé cette nouvelle version sur un de nos projets et nous n'avons rencontré aucun problème.

## Adapter le style en fonction des props

Il est très simple de définir un style en fonction d'une prop, et c'est très utile. Il suffit d'insérer une fonction entre les backticks  de la fonction `styled` pour récupérer les props du composant.

Commençons par un `console.log()` des props pour mieux comprendre ce qu'il se passe.

```JSX
import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: ${props => { console.log(props) }};
`;

const App = () => (
  <div>
    <Text color="red">Red text</Text>
  </div>
);

export default App;

/* Console
Object {color: "red", children: "Red text", theme: {}}
*/
```

On peut voir notre prop `color` dont la valeur est `"red", la prop `children` contenant "Red text" et un objet vide `theme` que nous verrons en détail un peu plus tard.
On peut donc définir maintenant la couleur de notre texte en fonction de notre prop `color`.

```JSX
import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: ${props => props.color};
`;

const App = () => (
  <div>
    <Text color="red">Red text</Text>
    <Text color="blue">Blue text</Text>
    <Text>Black text</Text>
  </div>
);

export default App;
```

Aucune prop `color` n'est définie sur le dernier composant `<Text>` donc le texte de celui-ci est noir par défaut.

Nous pouvons aussi utiliser JavaScript pour définir cette valeur par défaut. Ci-dessous la valeur `"green"` est utilisée si aucune prop `color` n'est définie. Afin de rendre le code plus court et plus lisible il est préférable d'utiliser la déstructuration des props.

```JSX
import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: ${({color}) => color || "green"};
`;

const App = () => (
  <div>
    <Text color="red">I'm red</Text>
    <Text color="blue">I'm blue</Text>
    <Text>I'm green</Text>
  </div>
);

export default App;
```

Afin d'éviter de redéfinir chaque propriété CSS grâce aux props il est plus intéressant d'utiliser une propriété définissant un état ou une fonction. Par exemple on pourrait créer un composant `<Message>` qui est en charge des notifications et qui aurait 3 états: défaut, succès, erreur. 

```JSX
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 38em;
  margin: 0 auto;
`;

const Message = styled.p`
  color: ${({ success, error }) =>
    (success && "green") || (error && "red") || "#333"};
  background: ${({ success, error }) =>
    (success && "#c8e6c9") || (error && "#ffcdd2") || "#efefef"};
  padding: 1rem;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const App = () => (
  <Container>
    <Message>Vous avez 126 mails non lus dans votre boîte de réception</Message>
    <Message success>Votre message a bien été envoyé.</Message>
    <Message error>
      Une erreur est survenue, votre message n'a pas été envoyé.
    </Message>
  </Container>
);

export default App;
```

[![Edit styled-components - notif](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/styled-components-notif-5ir3b?fontsize=14&hidenavigation=1&theme=dark)

On limite ainsi le nombre de props utilisées sur le composant `<Message>`, le code du composant `<App />` est plus lisible.

## Le helper css\``

Parfois on se retrouve dans une situation où la même prop va définir plusieurs règles. Inutile de répéter la même fonction, il suffit d'insérer une seule fonction qui retourne plusieurs règles CSS dans une chaîne de caractères.

```JSX
import React from "react";
import styled from "styled-components";

const Box = styled.div`
  ${({ centerXY }) =>
    centerXY &&
    `
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  height: 200px;
  background: #efefef;
`;
```

Mais il est recommandé d'utiliser le helper css\`` fournit par la librairie. Avec une extension adaptée (comme vscode-styled-components pour Visual Studio Code) on bénéficie  de la coloration syntaxique et la librairie gère mieux certaines optimisations.

```JSX
import React from "react";
import styled, { css } from "styled-components;

const Box = styled.div`
  ${({ centerXY }) =>
    centerXY &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  height: 200px;
  background: #efefef;
`;
```

## Étendre un composant

Il est toujours préférable d'éviter la répétition de code, il y a même une philosophie pour ça: DRY, pour **D**on't **R**epeat **Y**ourself.

Pour nos composants cela présente plusieurs avantages:
- réécrire le même code plusieurs fois serait une perte de temps
- apporter une modification à des composants similaires se fait simplement et rapidement
- le déboggage et les tests sont facilités

La syntaxe est très proche, on remplace juste la notation pointée `styled.elementHtml`\`\` par `styled(Composant)`\`\`.

Par exemple on peut créer un composant `<Button/>` puis étendre ce composant en surchargeant juste quelques règles CSS.

```JSX
const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  font-size: 1rem;
  color: #333;
  background: #dedede;
  border-radius: 0.25rem;
  border: 1px solid #dedede;
  transition: color 0.2s, background 0.2s;
  cursor: pointer;

  &:hover {
    background: #fff;
  }
`;

const LargeButton = styled(Button)`
  padding: 1rem 2rem;
`;

const SendButton = styled(Button)`
  color: white;
  background: #229dff;
  border: 1px solid #229dff;

  &:hover {
    color: #229dff;
  }
`;

const StopButton = styled(Button)`
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background: red;
  border: 1px solid red;

  &:hover {
    color: red;
  }
`;
```

[![Edit styled-components - extend](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/styled-components-extend-zudvd?fontsize=14&hidenavigation=1&theme=dark)

## Faire référence à un composant

Un composant peut faire référence à lui-même grâce ay symbole `&`. Il est particulièrement utilise pour définir des pseudo-éléments et pseudo-sélecteurs:

```JSX
const Link = styled.a`
  /* ... */
  
  &:hover {/*...*/}

  &::before {/*...*/}

  &::after {/*...*/}
`;
```

Le `&` peut aussi être utilisé pour augmenter la spécificité:

```JSX
const Link = styled.div`
  && {
    color: red;
  }
`;

// règle CSS générée
.ecUByo.ecUByo {
  color: red;
}
```

Si un composant a été créé grâce à la fonction `styled` il possède alors une classe auto-générée et peut être utilisé dans un sélecteur CSS particulier appelé _sélecteur de composant_ 

Voici la syntaxe:

```JSX
const Box1 = styled.div`
  /* ... */
`;

const Box2 = styled.div`
  /* ... */

  ${Box1} & {
    background-color: #FF5E5B;
  }
`;
```

[![Edit styled-components - selector](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/styled-components-selector-ke65f?fontsize=14&hidenavigation=1&theme=dark)

Pour utiliser de la même façon un composant qui n'a pas été créé grâce à la fonction `styled` il suffit de l'étendre:

```JSX
const Box = () => <div />;

const Box1 = styled(Box)``;

const Box2 = styled.div`
  /* ... */

  ${Box1} & {
    background-color: #FF5E5B;
  }
`;
```

## Utiliser un thème


