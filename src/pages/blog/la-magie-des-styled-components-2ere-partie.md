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

Cet article est le 2e d'une série consacrée à l'utilisation des styled-components avec React, pour lire la première partie c'est ici: [La magie des styled-components - 1ère partie](https://www.commit42.com/blog/la-magie-des-styled-components-1ere-partie/).

Avant de rentrer dans le vif du sujet une bonne nouvelle, depuis la publication du premier article la v5 est sortie. Au programme des performances accrues et un bundle plus léger.

> 50% faster server-side rendering, 22% faster client-side rendering, 31% smaller bundle size, RTL support and no breaking changes! -- <cite>Evan Jacobs, [Announcing styled-components v5: Beast Mode](https://medium.com/styled-components/announcing-styled-components-v5-beast-mode-389747abd987)</cite>

Avec de tels arguments il n'y a pas à hésiter, nous avons testé cette nouvelle version sur un de nos projets et nous n'avons rencontré aucun problème.

Après cette bonne nouvelle nous pouvons maintenant continuer notre découverte de la librairie et des avantages qu'elle nous procure.

## Adapter le style en fonction des props

Il est très simple de définir un style en fonction d'une prop, et c'est très utile. Il suffit d'insérer une fonction entre les guillemets obliques (backticks) de la fonction `styled` pour récupérer les props du composant.

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

On peut voir notre prop `color` dont la valeur est `"red"`, la prop `children` contenant `"Red text"` et un objet vide `theme` que nous verrons en détail un peu plus tard.
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

<iframe
     src="https://codesandbox.io/embed/styled-components-notif-5ir3b?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="styled-components - notif"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

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

Mais il est recommandé d'utiliser le helper css\`` fournit par la librairie. Avec une extension adaptée (comme _vscode-styled-components_ pour Visual Studio Code) on bénéficie de la coloration syntaxique et la librairie gère mieux certaines optimisations.

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

Il est toujours préférable d'éviter la répétition de code, il y a même un principe pour ça en programmation: DRY, pour **D**on't **R**epeat **Y**ourself.

Pour nos composants cela présente plusieurs avantages:

- réécrire le même code plusieurs fois serait une perte de temps
- apporter une modification à des composants similaires se fait simplement et rapidement, la maintenance et l'évolution de l'application sont ainsi facilitées
- le déboggage et les tests sont eux aussi plus simples à effectuer

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

<iframe
     src="https://codesandbox.io/embed/styled-components-extend-zudvd?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="styled-components - extend"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

## Faire référence à un composant

Un composant peut faire référence à lui-même grâce au symbole `&`. Il est particulièrement utile pour définir des pseudo-éléments et pseudo-classes:

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
  background-color: blue;
`;

const Box2 = styled.div`
  /* ... */
  background-color: red;

  ${Box1} & {
    background-color: yellow;
  }
`;
```

<iframe
     src="https://codesandbox.io/embed/styled-components-selector-ke65f?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="styled-components - selector"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

Pour utiliser de la même façon un composant qui n'a pas été créé grâce à la fonction `styled` il suffit de l'étendre avec la même fonction:

```JSX
const Box = ({children}) => <div>{children}</div>;

const Box1 = styled(Box)``;

const Box2 = styled.div`
  /* ... */

  ${Box1} & {
    background-color: #FF5E5B;
  }
`;
```

## Utiliser un thème grâce au \<ThemeProvider />

styled-components fournit un composant `<ThemeProvider />`. Il permet à tous les composants enfants d'accéder aux valeurs d'un thème. Le thème est un objet JS passé au `<ThemeProvider />` grâce à la prop `theme`, et il est souvent défini dans un fichier `theme.js`.
Chaque composant enfant peut ainsi accéder à une prop `theme` contenant les valeurs.

Une application utilisant un thème est définie ainsi:

```JSX
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  red: "#D63230",
  lightBlue: "#40BCD8",
  blue: "#1C77C3"
}

const App = () => (
  <ThemeProvider theme={theme}>
    <ChildComponent>
  </ThemeProvider>
);

export default App;
```

Les composants enfants accèdent aux valeurs du thème comme ils accèdent aux autres props:

```JSX
import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: ${props => { props.theme.red }};
`;

const ChildComponent = () => <Text>Red text</Text>;

export default ChildComponent;
```

## Mini-projet

J'ai préparé un mini-projet qui utilise les styled-components avec un thème.
A partir du jeu de données [Rolling Stone Magazine's Top 500 Albums](https://data.world/notgibs/rolling-stones-top-500-albums) l'application affiche (seulement) le Top 50.

De belles sessions d'écoute ou de ré-écoute à prévoir! A noter, le classement date de 2012.

Je vous conseille d'ouvrir ce projet dans Codesandbox, contrairement aux exemples précedents celui-là mérite une surface d'écran un peu plus grande.

<iframe
     src="https://codesandbox.io/embed/styled-components-theme-f5lie?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="styled-components - theme"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

Voici la définition du thème dans le fichier `theme.js`. On va pouvoir définir toutes les valeurs et règles CSS réutilisables dans le projet: couleurs, typographie, espaces, ombres, etc. Travailler avec un thème présente plusieurs avantages, cela apporte de la cohérence au design et cela permet également un gain de productivité. Au lieu de passer des heures à ajuster par petites touches de 0.05rem (ça vous rappelle des souvenirs...?) le choix va se faire à travers une échelle prédéfinie, par exemple en utilisant les tailles popularisées par bootstrap: xs, sm, md, xl, lg. Un choix limité implique une prise de décision plus rapide. ;)

```JSX
// theme.js

export default {
  colors: {
    red: "#F24738",
    green: "#55C6B3",
    yellow: "#F9D274",
    brown: "#A56F5D",
    white: "#fff",
    whiteTranslucid: "rgba(255,255,255,.9)",
    black: "#222"
  },
  fonts: {
    families: {
      font1: "Vidaloka, sans-serif",
      font2: "Lobster, sans-serif"
    },
    sizes: {
      body: "1rem",
      mainTitle: "calc(2rem + 3vw)",
      size1: "1.953rem",
      size2: "1.563rem",
      size3: "1.25rem"
    }
  },
  spaces: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "4rem"
  },
  borders: {
    radius: "0.3rem"
  },
  shadows: {
    text: "3px 3px 0 rgba(0, 0, 0)",
    box: "2px 2px 8px rgba(0, 0, 0, 0.6)",
    inset: "inset 2px 2px 4px rgba(0, 0, 0, 0.6)"
  }
};
```

Lorsque l'on découpe son projet en composants, nous pouvons alors créer pour chaque composant un fichier séparé contenant nos styled-components. On voit souvent des fichiers nommées `styles.js` ou `styled.js`. Je préfère la 2e solution, difficile de faire plus clair.

Dans ce mini-projet, très basique, il n'y a qu'un fichier `styled.js`.

```JSX
//styled.js

import styled, { css } from "styled-components";

const centerXY = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const titleStyle = css`
  margin: ${({ theme }) => `${theme.spaces.md} 0`};
  font-family: ${({ theme }) => theme.fonts.families.font2};
  text-align: center;
  text-shadow: ${({ theme }) => theme.shadows.text};
`;

const Chip = styled.div`
  padding: ${({ theme }) => `${theme.spaces.xs} ${theme.spaces.sm}`};
  border-radius: ${({ theme }) => theme.borders.radius};
`;

export const Container = styled.div`
  padding: ${({ theme }) => theme.spaces.sm};
  /* background-image overlay */
  background: rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  ${titleStyle};
  font-size: ${({ theme }) => theme.fonts.sizes.mainTitle};
  color: ${({ theme }) => theme.colors.red};
`;

export const SubTitle = styled.p`
  ${titleStyle};
  font-size: ${({ theme }) => theme.fonts.sizes.size1};
  color: ${({ theme }) => theme.colors.white};
`;

export const List = styled.ul`
  width: 600px;
  max-width: 100%;
  padding: 0;
  margin: 0 auto;
  list-style: none;
`;

export const Album = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => `${theme.spaces.md} ${theme.spaces.lg}`};
  margin-bottom: ${({ theme }) => theme.spaces.md};
  background: ${({ theme }) => theme.colors.whiteTranslucid};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.borders.radius};

  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

export const Number = styled.div`
  ${centerXY};
  flex-shrink: 0;
  width: 4rem;
  height: 4rem;
  margin-bottom: ${({ theme }) => theme.spaces.md};
  font-family: ${({ theme }) => theme.fonts.families.font2};
  font-size: ${({ theme }) => theme.fonts.sizes.size1};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.red};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.inset};

  @media (min-width: 500px) {
    margin-bottom: 0;
    margin-right: ${({ theme }) => theme.spaces.lg};
  }
`;

export const AlbumData = styled.div`
  width: 100%;
`;

export const Artist = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces.sm};
  font-size: ${({ theme }) => theme.fonts.sizes.size3};
  text-align: center;

  @media (min-width: 500px) {
    font-size: ${({ theme }) => theme.fonts.sizes.size2};
    text-align: left;
  }
`;

export const AlbumTitle = styled.h2`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spaces.md};
  font-size: ${({ theme }) => theme.fonts.sizes.size2};
  text-align: left;
  color: ${({ theme }) => theme.colors.red};

  @media (min-width: 500px) {
    font-size: ${({ theme }) => theme.fonts.sizes.size1};
    text-align: left;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
`;

export const Year = styled(Chip)`
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.yellow};
`;

export const Genre = styled(Chip)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.green};
`;
```

On retrouve ici l'usage du helper `css` qui permet de créer des ensembles de règles réutilisables, équivalent des placeholders en SASS. Le composant `<Chip/>` sert de base commune aux composants `<Year />` et `<Genre />`, si nous souhaitons modifier le padding ou l'arrondi de la bordure il suffit de le faire une fois au niveau du composant `<Chip/>`. Et on voit surtout l'usage intense de la fonction permettant de récupérer les valeurs du thème.

A ce stade je serais de mauvaise fois si je disais qu'en l'état l'utilisation du thème est parfaite. Lorsqu'on y fait souvent référence l'utilisation de la fonction permettant de récupérer les valeurs vient perturber la lisibilité du code. Heureusement nous sommes dans un fichier JavaScript, il suffit donc de se créer un ou plusieurs helpers qui viennent remplacer cette fonction. Par exemple: `${theme("colors.white")}` ou `${th("colors.white")}` au lieu de `${({ theme }) => theme.colors.white};`. Cela fera probablement l'objet d'un petit article supplémentaire.

Pour finir nous allons voir ensemble le fichier `App.js` qui contient notre application.

```JSX
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import theme from "./theme";
import {
  Container,
  Title,
  SubTitle,
  List,
  Album,
  Number,
  Year,
  Infos,
  Genre,
  Artist,
  AlbumTitle,
  AlbumData
} from "./styled";
import data from "./rolling-stones-top-50.json";
import bgImage from "./bg.jpg";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.families.font1};
    font-family: ${({ theme }) => theme.fonts.sizes.body};
    margin: 0;
    padding: 0;
    background: #5a5b5d url(${bgImage}) no-repeat fixed center;
    background-size: cover;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container>
      <Title>Rolling Stone Magazine</Title>
      <SubTitle>Top 50 of all time</SubTitle>
      <List>
        {data.map(({ number, year, album, artist, genre }) => (
          <Album key={`${artist}-${album}`}>
            <Number>{number}</Number>
            <AlbumData>
              <Artist>{artist}</Artist>
              <AlbumTitle>{album}</AlbumTitle>
              <Infos>
                <Year>{year}</Year>
                <Genre>{genre}</Genre>
              </Infos>
            </AlbumData>
          </Album>
        ))}
      </List>
    </Container>
  </ThemeProvider>
);
export default App;

```

On voit ici comment est utilisé le `<ThemeProvider />`, il vient entourer l'ensemble de l'application afin que tous les composants enfants puissent accéder au thème grâce au [Contexte React](https://fr.reactjs.org/docs/context.html).
On retrouve ici notre helper `createGlobalStyle` qui nous permet de créer un composant contenant le style global, `<GlobalStyle/>` (mais vous pouvez l'appeler `<Michel/>` si vous le souhaitez, cela fonctionnera aussi bien). Ce composant est généralement inséré juste après le `<ThemeProvider />`, et il est plus propre de le définir dans un fichier séparé, comme le thème.

A l'arrivée le code de l'applicaiton est très lisible car il n'y a aucune classe, seulement des composants dont la fonction est bien définie.

## Conclusion

J'espère que cette présentation des styled-components vous aura donné envie d'essayer cette merveilleuse librairie, ou peut-être de découvrir certains aspets peu connus.

Chez Commit42 on est fans!
