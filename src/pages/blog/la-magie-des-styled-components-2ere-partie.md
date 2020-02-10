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
- V5 perfs
- props ⇒ props
- ressources
- css\`` function from styled-components
- extend avec styled(Component)
- nested, parent:hover &
- theme
- extraire les fonctions
- organisation des fichiers
- override &&

Cet article est le 2e d'une série consacrée à l'utilisation des styled-components avec React, pour lire la première partie c'est ici: [La magie des styled-components - 2ère partie](https://www.commit42.com/blog/la-magie-des-styled-components-1ere-partie/).

## Nouvelle version de la librairie!

Avant de rentrer dans le vif du sujet un bonne nouvelle, depuis la publication du premier article la v5 est sortie. Au programme des performances accrues et un bundle plus léger.

> 50% faster server-side rendering, 22% faster client-side rendering, 31% smaller bundle size, RTL support and no breaking changes!
> -- <cite>Evan Jacobs, [Announcing styled-components v5: Beast Mode](https://medium.com/styled-components/announcing-styled-components-v5-beast-mode-389747abd987)</cite>

Avec de tels arguments il n'y a pas à hésiter, nous avons testé cette nouvelle version sur un de nos projets et nous n'avons rencontré aucun problème.

## Adapter le style en fonction des props

Il est très facile (et très utile) de définir un style en fonction d'une prop.
Il suffit d'insérer une fonction entre les\`\` de la fonction `styled`.

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

Aucune prop `color` n'est définie sur le dernier composant `<Text>` donc le texte de celui-ci est noir (couleur par défaut).

Mais nous pouvons aussi utiliser JavaScript pour définir une valeur par défaut. Ci-dessous la valeur `"green"` est utilisée si aucune prop `color` n'est définie. Afin de rendre le code plus court et plus lisible il est préférable d'utiliser la déstructuration des props.

```JSX
import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: ${({color}) => color || "green"};
`;

const App = () => (
  <div>
    <Text color="red">I should be red</Text>
    <Text color="blue">I should be blue</Text>
    <Text>I should be green</Text>
  </div>
);

export default App;
```

Le but n'étant pas de redéfinir chaque propriété CSS grâce aux props du composants, il devient plus intéressant d'utiliser une propriété "fonctionnelle" que l'on peut utiliser pour définir plusieurs règles CSS.
Par exemple on pourrait créer un composant `<Message>` qui est en charge des notifications et qui aurait 3 états: default, success, error. 

```JSX
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 38em;
  margin: 0 auto;
`;

const Message = styled.p`
  padding: 1rem;
  font-weight: bold;
  text-align: center;
  color: ${({ success, error }) =>
    success || error ? (success ? "green" : "red") : "#333"};
  background: ${({ success, error }) =>
    success || error ? (success ? "#c8e6c9" : "#ffcdd2") : "#fef9e7"};
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

On limite ainsi le nombre de props utilisées sur le composant `<Message>` (le code JSX est donc plus lisible). Autre point essentiel, la prop utilisée nous informe de la fonction ou de l'état du composant. Ici "success" ou "error".

## Le helper css\``

/!\ https://github.com/styled-components/styled-components/issues/1178

Parfois notre code peut devenir répétitif et difficile à lire. Par exemple si il y a trop de logique au milieu du style (comme les opérateurs ternaires imbriqués utilisés ci-dessus) lorsque de nombreuses règles CSS sont définies selon les props. Afin de palier à ces problèmes (et à d'autres) la librairie styled-components fournit un helper `css` très pratique. On peut ainsi définir un bloc de règles CSS dans une variable afin de la réutiliser ou d'alléger la logique présente dans le CSS du composant.

```JSX
import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  max-width: 38em;
  margin: 0 auto;
`;

const MessageColors = css`
  color: ${({ success, error }) =>
    success || error ? (success ? "green" : "red") : "#333"};
  background: ${({ success, error }) =>
    success || error ? (success ? "#c8e6c9" : "#ffcdd2") : "#fef9e7"};
`;

const Message = styled.p`
  padding: 1rem;
  font-weight: bold;
  text-align: center;
  ${MessageColors};
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

On pourrait aussi utiliser le helper `css` dans la fonction `styled`.

// exemple ? fullWidth



