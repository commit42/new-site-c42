---
title: La magie des styled-components - 1ère partie
date: 2019-12-10T08:23:08.618Z
author: Mathieu
thumbnail: /assets/artem-maltsev-3n7ddlkmfeg-unsplash.jpg
tags:
  - styled-components
  - react
  - css
  - sass
---
# Intro

Vendredi dernier nous nous sommes réunis afin d'organiser notre travail sur notre side-project open-source [Gatsbylius](https://github.com/opengento/gatsbylius), une boutique e-commerce qui tourne avec [Sylius](https://sylius.com/) en back et [Gatsby](https://www.gatsbyjs.org/) en front.

Gatsby est un générateur de site statique basé sur React, et dès qu'il s'agit de gérer le style sur React notre solution préférée est d'utiliser la librairie [styled-components](https://www.styled-components.com/). Il s'agit d'une librairie CSS-in-JS que Valentin et moi utilisons depuis plus d'un an avec toujours autant de plaisir. Et plus nous l'utilisons plus nous découvrons de nouvelles façons d'organiser notre code et d'améliorer l'expérience développeur (DX).

Comme nous l’utilisons sur Gatsbylius cette réunion fut l'occasion de présenter les styled-components à Flavien et Maher, qui sont plutôt des développeurs back et qui n'avaient pas encore eu l'occasion de tester. Devant leur enthousiasme lors de cette découverte nous avons voulu partager notre expérience à travers 2 articles :

* Partie 1: dans ce premier article nous verrons comment a été créée cette librairie. Nous mettrons ensuite en place une application React très simple qui nous permettra de tester cette merveilleuse librairie.
* Partie 2: dans l'article suivant nous verrons des utilisations plus avancées ainsi que quelques idées concernant l'organisation du code. 

# Styled-components: qui, pourquoi et comment ?

## Il y a bien longtemps, dans une ~~galaxie~~ ville lointaine, très lointaine...

Grâce à la conférence donnée par Max Stoiber au _WeAreDevelopers World Congress 2018_ j'ai pu découvrir la belle et fun histoire de la création des styled-components. Je vais tenter d'en faire un résumé rapide mais vous pouvez visionner la conférence ci-dessous (25mn + 20mn de Q&A) pour bénéficier de toutes les anecdotes et infos. Je recommande!

[https://www.youtube.com/watch?v=BkgU_-KGK9w](https://www.youtube.com/watch?v=BkgU_-KGK9w)

En 2015 Max Stoiber retrouve un de ses amis, Craig Sharkie, dans un bar à Sydney (Uncle Mings https://goo.gl/maps/mLyucbqzxVKUf5vp6). Un autre ami de Craig, qui vit à Melbourne, les rejoint. Il s'agit de Glen Maddern, co-créateur des css-modules (https://github.com/css-modules/css-modules), une autre solution très utilisée pour gérer le CSS dans React.

Max et ses collègues travaillaient alors à l'élaboration d'une librairie UI, Elemental UI, qui utilisait LESS et Max cherchait à l'époque un moyen d'éviter de devoir utiliser un outil de build LESS à la chaîne de compilation en plus de l'outil de build JS (webpack) utilisé par React. Ce soir-là il découvre grâce à Glen le concept de CSS-in-JS. Sa première pensée a été "What ?! What is he talking about ?!" (?traduction moisie just for fun? "Quelle idée saugrenue") mais heureusement pour la communauté il n'est pas resté bloqué sur cette pensée.

De nombreux projets exploraient déjà cette solution mais ils nécessitaient d'écrire le CSS en tant qu'objet Javascript, ce qui est assez agaçant. Écrire les propriétés CSS en camelCase, les valeurs entre guillemets et terminer chaque instruction par une virgule comme ci-dessous nous on est vraiment pas fans. :(

<AwesomeComponent style={{backgroundColor: "rgb(0,200,200)", paddingTop: "5rem"}} />
Après de nombreux whiskies la soirée fut riche en idées folles. Il insiste vraiment en répétant "crazy ideas", il devait être bon ce whisky. :)

Le lendemain Max et Glen se retrouvèrent pour commencer à travailler ensemble sur ces "crazy ideas" qui deviendraient la librairie qu'on connaît aujourd'hui sous le nom de styled-components.

https://gph.is/1GmQmQ2

Avantages & inconvénients

Avantages

nom de classe unique autogénéré : les styled-components génèrent un nom de classe unique (ex: class="sc-1qhv3lv-0"), ainsi il n'y a plus de confilts de classe à redouter. Un plugin babel permet en plus d'intégrer automatiquement le nom du composant dans le nom de classe auto-généré (ex: class="MyComponent-sc-1qhv3lv-0"). Il est ainsi facile de repérer son composant dans l'inspecteur sans utiliser les React Dev Tools.
syntaxe CSS (& SCSS) : il est très facile de débuter avec les styled-components car il s'agit purement et simplement d'écrire du CSS. Certaines fonctionnalités très appréciées dans SASS (SCSS) sont également implémentées, notamment l'imbrication d'élements et de classes, et utilisation du symbole & pour cibler l'élément parent.
les pseudo-classes, pseudo-éléments & les media queries peuvent être utilisés : la prop style des composants React et certaines librairies CSS-in-JS injectent le style en tant qu'attribut style d'une balise HTML. Styled-components au contraire injecte le style dans des balises <style></style> dans la balise <head></head> de chaque page, ce qui permet d'utiliser toutes les bonnes choses que CSS met à notre disposition. (?emoji smile)
l'implémentation interne du composant peut changer sans en modifier l'utilisation : par exemple des composants <Grid />, <Row /> et <Column /> créés pour définir une grille peuvent utiliser CSS Flexbox dans un premier temps, puis dès que la compatibilité des navigateurs est jugée suffisante Flexbox peut être remplacé par CSS Grid. L'utilisation des composants ne change pas., ils sont toujours appelés en tant que <Grid />, <Row /> et <Column />.
CSS optimisé : le bundle CSS de chaque page est plus léger car seul le CSS utilisé dans la page est chargé, cela permet un chargement de la page plus rapide.
préfixes vendeurs automatiques : les préfixes vendeurs (aussi appelés préfixes navigateurs) sont automatiquement ajoutés selon les derniers standards. Plus besoin d'utiliser autoprefixer dans ses outils de build ou, plus embêtant encore (pourvu que ce ne soit pas votre cas...), d'ajouter ces préfixes manuellement! (?emoji brain explosion).
thème(s) : l'utilisation d'un ou plusieurs thèmes est très simple. Un composant <ThemeProvider /> permet d'injecter un thème dans les props de tous ces enfants grâce au Context API de React. Le thème peut ensuite être utilisé dans les règles CSS du composant (?emojis joie & fiesta).
accès aux props du composant : grâce à l'utilisation des tagged template literals (https://wesbos.com/tagged-template-literals/) il est possible d'utiliser des fonctions pour définir le style selon certaines conditions: des props comme props.disabled, props.primary ou les valeurs définies dans un thème comme props.theme.boxShadow .
maintenance facilitée : les styles et le composant sont localisés au même endroit, il est très facile de trouver le fichier à modifier et lorsque l'on supprime le composant on supprime également le style ce qui évite de polluer le code avec du CSS inutilisé.
Inconvénients

il n'est plus possible de mettre le CSS en cache car au lieu de charger des fichiers CSS et de les mettre en cache le CSS il est injecté dans des balises <style></style> à chaque chargement de page. Heureusement seul le CSS de la page courante est chargé ce qui réduit énormément l'impact de l'absence de cache
la librairie Styled-components a été créée pour fonctionner avec React et ne peut pas être utilisée en dehors de ce framework. Une autre librairie, Emotion (https://emotion.sh/docs/introduction), permet également l'utilisation des styled-components. La syntaxe est similaire bien qu'il existe quelques différences entre les 2 librairies. Emotion par contre n'est pas liée à React et peut être utilisée dans toute application Javascript.
Débuter avec les styled-components

Installation et pré-requis

Pour suivre ce tuto il est préférable de connaître React et d'être familier avec la syntaxe ES6 de Javascript. Avoir un peu d'expérience en CSS vous permettra de mieux apprécier les avantages des styled-components.

Dans le but de ne pas écrire un article trop long je ne m'étendrai pas sur l'explication du code CSS utilisé.

Pour créer un nouveau projet React vous pouvez utiliser create-react-app. Grâce à npx il est inutile de l'installer globalement, npx télécharge et lance un package temporaire sans polluer le namespace global (voir la doc de React: https://fr.reactjs.org/docs/create-a-new-react-app.html#create-react-app)

// "mon-projet" correspond ici au nom de votre projet et va créer ce répertoire\
npx create-react-app mon-projet

// aller dans le répertoire du projet
cd mon-projet

// lancer le projet pour vérifier que React est bien installé
yarn start
Si tout s'est bien passé en vous rendant à l'adresse http://localhost:3000 vous devriez voir cette page:

La%20magie%20des%20styled%20components/Untitled.png

Vous pouvez aussi utiliser l'éditeur en ligne Codesandbox qui vous permet de créer une application React en 1 click: https://codesandbox.io

C'est une très bonne solution pour tester des petits bouts de code ou des packages npm (les dépendances s'installent aussi en 1 click!).

Il nous reste juste à installer les styled-components. React utilise par défaut le gestionnaire de paquets yarn (créé par Facebook, comme React) mais il est tout à fait possible d'utiliser npm.

// yarn
yarn add styled-components

// npm
npm install styled-components
Au moment de l'écriture de cette article le package.json indique les verisons suivantes:

React v16.12
styled-components v4.4.1
L'installation est terminée, let the fun begin!

Le but étant de présenter les styled-components le code sera volontairement simplifié. Certaines balises HTML pourraient être remplacées par des éléments plus sémantiques et certaines répétitions devraient être évitées. Dans le prochain article nous verrons justement comment réorganiser le code afin de rendre le projet plus clair et d'éviter les répétitions.

Comparaison avec CSS/SASS

Afin d'éviter les conflits de noms de classe des méthodologies comme BEM (Block - Element - Modifier) ont été inventées.

J'adore BEM mais il faut avouer que dans certains cas on se retrouve avec des balises HTML inondées de noms de classes. Par exemple une vignette contenant une image et un label pourrait être définie ainsi avec BEM en utilisant la syntaxe class="block__element" .

<div class="card__container">
    <img class="card\_\\_image" src="tesla\\_\_cybertruck.jpg" alt="Photo du pickup tesla avec une vitre cassée par Elon Musk lui-même" />
    <p class="card__label">Pickup Tesla Cybertruck</p>
  <a class="card__link" href="/testa-cybertruck">Découvrir le Tesla Cybertruck</a>
</div>
Pour modifier le style on peut utiliser des classes Modifier :

class="block**element block**element--modifier"

<div class="card card--outline card--primary">
    <img class="card\_\\_image card\\_\_image--framed" src="tesla__cybertruck.jpg" alt="Photo du pickup Tesla avec une vitre cassée par Elon Musk lui-même" />
    <p class="card__label card__label--large">Pickup Tesla Cybertruck</p>
    <a class="card__link card__link--button" href="/testa-cybertruck">Découvrir le Tesla Cybertruck</a>
</div>
SASS (SCSS) permet d'imbriquer les classes et d'utiliser le symbole & pour faire référence à la classe parente, ce qui fait gagner beaucoup de temps et permet une meilleure lisibilité.

.card {
    ...

```
&--outline {
    ...
}

&--primary {
    ...
}

&__image {
    ...

    &--framed {
        ...
    }
}
```

}
Première bonne nouvelle, si vous désirez migrer une application qui utilise SASS vers les styled-components cette syntaxe est prise en charge! :emoji fiesta: Styled-components implémente certaines fonctionnalités de SASS ce qui permet une transition douce.

Attention quand même, toutes les fonctionnalités de SASS n'ont ps été implémentées.

Voyons maintenant comment faire disparaître les nombreuses classes sur les balises HTML grâce aux styled-components. Notre code sera ainsi plus lisible.

Premier composant

Nous allons créer une toute petite application qui va afficher un titre, un bouton et une galerie composée de 3 photos. J'avais bien dit que ce serait très basique. ;)

Nous ferons en sorte que la galerie soit responsive grâce aux media queries. Car ne l'oublions pas, styled-components permet d'utiliser toutes les règles CSS contrairement au CSS inline. :)

Commençons par afficher le traditionnel "Hello world". Supprimons le contenu du fichier App.js et remplaçons-le par ce code :

import React from "react";

const App = () => (

  <div>
    <h1>Hello world</h1>
  </div>
);

export default App;
Cette application React minimaliste affiche "Hello world". Lançons npm start à la racine du projet, l'adresse<http://localhost:3000> devrait afficher :

La%20magie%20des%20styled%20components/Untitled%201.png

Maintenant nous allons utiliser les styled-components pour tranformer ce titre h1 en un composant React <Title />.

import React from "react";
import styled from "styled-components";

const Title = styled.h1;

const App = () => (

  <div>
    <Title>Hello world</Title>
  </div>
);

export default App;
Cette étrange syntaxe, introduite dans JavaScript ES6, se nomme tagged template literals. La fonction styled crée un composant à partir d'une balise HTML (styled.div`,styled.h1`), définit son style, et peut même modifier le style selon les props du composant comme nous le verrons plus tard.

Il est aussi possible d'étendre le style d'un composant existant en utilisant les parenthèses à la place de la notation pointée : \`styled(Component)\`. C'est essentiel pour éviter la répétition de code.

Notre <h1> est maintenant un composant React <Title/> mais pour le moment aucun changement n'apparaît dans le navigateur, il est temps d'ajouter un peu de CSS. Au lieu d'utiliser un attribut class les styled-components permettent de définir le style directement dans la déclaration du composant.

import React from "react";
import styled from "styled-components";

const Title = styled.h1`display: block;
  width: 18rem;
  margin: 4rem auto;
  padding: 1rem;
  font-size: 1.4rem;
  text-align: center;
  text-transform: uppercase;
  color: #65c3ba;
  border: 1px solid #65c3ba;`;

const App = () => (

  <div>
    <Title>Hello world</Title>
  </div>
);

export default App;
La%20magie%20des%20styled%20components/Untitled%202.png

Notre composant <Title /> est toujours utilisé de la même façon, aucune classe n'a été ajoutée et pourtant notre style a bien été appliqué. En inspectant notre titre nous allons découvrir un nom de classe auto-généré, dans mon navigateur je peux lire "sc-bdVaJa hMJzYd".

La%20magie%20des%20styled%20components/Untitled%203.png

Comme dit précédemment, par défaut nous n'avons aucun risque d'avoir un conflit de classe. :fiesta:

Dans un but purement pédagogique je vous propose d'ajouter une balise <span> dans la balise <h1> et d’observer le résultat dans l'inspecteur. On imbrique le style dans le composant <Title/>, comme dans un fichier SCSS. On peut imbriquer les classes de la même façon.

import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  display: block;
  width: 18rem;
  margin: 4rem auto;
  padding: 1rem;
  font-size: 1.4rem;
  text-align: center;
  text-transform: uppercase;
  color: #65c3ba;
  border: 1px solid #65c3ba;

  span {
    color: red;
  }
`;

const App = () => (

  <div>
    <Title>
      Hello world <span className="test">Test</span>
    </Title>
  </div>
);

export default App;
On obtient ce magnifique titre:

La%20magie%20des%20styled%20components/Untitled%204.png

Si on observe nos éléments dans l'inspecteur on voit que le namespace est bien ajouté à notre élément imbriqué. On peut voir que le nom de classe a changé sur notre <h1>.

La%20magie%20des%20styled%20components/Untitled%205.png

Donc même si 2 éléments dans l'application ont la même classe, tant que leur style est déclaré à l'intérieur d'un styled-component il n'y aura pas de conflit grâce à la classe auto-générée. :v:

Mais dans l'idéal il est préférable de déclarer notre interface en composants bien séparer et éviter les classes.

Fin de l'expérience, on peut maintenant retirer le span et le style correspondant.

Style global

Il y a souvent des règles CSS globales à définir (reset, normalisation, typographie, etc.). Styled-components fournit à cet usage un helper : createGlobalStyle.

Ici je définis simplement une valeur box-sizing: border-box pour tous les élements, un reset des marges et paddings du <body>, et j'utilise la règle font-family afin que les polices système soient utilisées.

import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    _,_
    :before,
    *:after {
      box-sizing: inherit;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
`;

const Title = styled.h1`...`;

const App = () => (

  <div>
    <GlobalStyle />
    <Title>Hello world</Title>
  </div>
);

export default App;
On ajoute ensuite un composant <Container /> :

import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`...`;

const Container = styled.div`display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1400px;`;

const Title = styled.h1`...`;

const App = () => (

  <div>
    <GlobalStyle />
    <Container>
      <Title>Hello world</Title>
    </Container>
  </div>
);

export default App;
J'utiliserai une URL très pratique (merci unsplash.com) qui permet d'afficher une photo aléatoire en choisissant la taille et le sujet! :waouh:

Pour afficher une photo de Londres:

<img src="https://source.unsplash.com/800x600/?london" alt="Photo de Londres" />
Il est temps de changer notre titre. Notre nano-application affichera des photos de 3 villes européennes différentes: Londres, Paris, Amsterdam. Dans l'espoir de faire connaître cette application dans le monde entier j'ai choisi un nom anglophone : "European towns".

N'hésitez pas à faire appel à votre potentiel créatif et à tout modifier : ".../?poney", ".../?chocolatine", ".../?michel"

Une fois le contenu définit il est temps de créer les composants de la galerie et d'ajouter un bouton pour recharger la page. La règle @media et la pseudo-classe :hover sont imbriquées dans le composant concerné.

const Button = styled.button`padding: 0.5rem 1rem;
  margin-bottom: 4rem;
  font-size: 1.2rem;
  background-color: #37b2cb;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 32%;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
  border: 1px solid #efefef;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  :hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img`max-width: 100%;
  display: block;`;

const ImgLabel = styled.p`font-style: italic;
  margin-bottom: 0;`;
Et voilà enfin notre application terminée:

import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    _,_
    :before,
    *:after {
      box-sizing: inherit;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

const Container = styled.div`display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1400px;`;

const Title = styled.h1`display: block;
  width: 18rem;
  margin: 4rem auto;
  padding: 1rem;
  font-size: 1.4rem;
  text-align: center;
  text-transform: uppercase;
  color: #65c3ba;
  border: 1px solid #65c3ba;`;

const Button = styled.button`padding: 0.5rem 1rem;
  margin-bottom: 4rem;
  font-size: 1.2rem;
  background-color: #37b2cb;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 32%;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
  border: 1px solid #efefef;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  :hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img`max-width: 100%;
  display: block;`;

const ImgLabel = styled.p`font-style: italic;
  margin-bottom: 0;`;

const App = () => (

  <div>
    <GlobalStyle />
    <Container>
      <Title>European towns</Title>
      <Button onClick={() => window.location.reload(true)}>
        Recharger la page
      </Button>
      <Gallery>
        <GalleryItem>
          <Img src="https://source.unsplash.com/1600x900/?london" alt="" />
          <ImgLabel>London</ImgLabel>
        </GalleryItem>

```
    <GalleryItem>
      <Img src="https://source.unsplash.com/1600x900/?paris" alt="" />
      <ImgLabel>Paris</ImgLabel>
    </GalleryItem>

    <GalleryItem>
      <Img src="https://source.unsplash.com/1600x900/?amsterdam" alt="" />
      <ImgLabel>Amsterdam</ImgLabel>
    </GalleryItem>
  </Gallery>
</Container>
```

  </div>
);

export default App;
Votre navigateur devrait maintenant afficher ceci en vue mobile et desktop. Just for fun j'ai ajouté une petite animation transform: scale() au survol des images, histoire d'utiliser une pseudo-classe.

La%20magie%20des%20styled%20components/Untitled%206.png

La%20magie%20des%20styled%20components/Untitled%207.png

Vous pouvez retrouver ce code dans codesandbox :

Styled-components basics

Dans le prochain article nous verrons comment utiliser les props pour modifier le style d'un styled-component, comment mettre en place un <ThemeProvider />, comment définir des styles conditionnels, et comment éviter la duplication de code. Nous présenterons quelques pistes de réflexion que nous avons eues sur l'organisation d'un projet avec les styled-components.

Si cet article vous a plu n'hésitez pas à le partager.

Sources

styled-components: Documentation

The Road to Styled-Components: Styling Component Based Systems

How to Redesign Unsplash Using Styled Components - SitePoint

The magic behind 💅 styled-components

TODO

??? Sondage twitter pour avoir une idée de l'utilisation en France ? "Utilisez-vous les styled components ? Oui / Non / Pourquoi pas / Never!" et pourquoi ?

Partie 2

\[ ] props ⇒ props
\[ ] function css : variables et style conditionnel
\[ ] extend avec styled(Component)
\[ ] extraire les fonctions ? (point-less free style, tacit programming)
\[ ] organisation des fichiers
\[ ] override &&&
\[ ] ex: spectrum
Partie 3

\[ ] ??? styled system - rebass
Sources supplémentaires

The magic behind 💅 styled-components

Styled Components: Enforcing Best Practices In Component-Based Systems - Smashing Magazine
