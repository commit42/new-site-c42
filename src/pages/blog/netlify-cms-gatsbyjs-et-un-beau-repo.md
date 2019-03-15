---
title: 'Netlify CMS, GatsbyJS et un repo tout beau'
date: 2019-03-07T00:00:00.000Z
author: Eva Spessotto
thumbnail: /assets/netlify-cms2.png
tags:
  - NetlifyCMS
  - GatsbyJS
  - Netlify
---
Ok, je suis à la semaine 3 de mon stage et en commençant à apprendre GatsbyJS je me suis rendu compte que même si Strapi est super cool, Netlify CMS va plus correspondre à ce dont on a besoin.

## Netlify CMS au lieu de Strapi

#### _“Mais d’où vient donc cette révélation ?”_ :sparkles:

C’est au détour d’une conversation avec Maxime ([@n4mzar](https://twitter.com/n4mzar?lang=fr)) - un des développeurs de commit42 - que j’ai découvert l’existence de ce CMS. 

Suite à la lecture de mon article sur le choix de la stack, Maxime a voulu tester Strapi (qui fonctionne très bien) mais il a trouvé et testé en parallèle Netlify CMS et il s’est aperçu que ça correspondait mieux à nos besoins sur ce projet de refonte de site. C’est pourquoi il m’en a fait part au plus tôt, c’est à dire, lundi matin en arrivant au bureau.

#### _“ Et du coup est-ce que tu peux nous en dire un peu plus sur NetlifyCMS ?”_ :thinking:

Alors, Netlify CMS c’est aussi un headless CMS - comme Strapi - mais qui permet de générer des fichiers Markdown. En fait l’éditeur de contenu est un WYSIWYG (what you see is what you get) ce qui permet de faire directement la mise en page de l’article et c’est justement ce qui m’intéresse. 

Il se trouve que dans la [release v3@alpha.12](https://blog.strapi.io/v3-alpha-12-graphql-rich-text-editor-redesigned-dashboard/) de Strapi, un éditeur de contenu [WYSIWYG](http://glossaire.infowebmaster.fr/wysiwyg/) a aussi été mis en place suite à une forte demande, mais ce qui m’a fait changer d’avis quant à Strapi c’est que Netlify CMS n’a pas besoin de base de données. Lorsque l’on crée un nouveau post avec Netlify CMS, ce dernier est automatiquement exporté en fichier markdown puis stocké dans un dossier dans le repository du projet. Ce qui a l’avantage de faciliter le déploiement avec [Netlify](https://www.netlify.com/) (Netlify normal, pas Netlify CMS… vous m’suivez ?) car il il n’y a pas de base de données à héberger.

## Gatsby + Netlify CMS + Semantic UI

#### _“Quelles sont les autres nouvelles de la semaine Eva ?”_ :eyes:

J’ai passé beaucoup de temps à lire et regarder des tutoriels pour comprendre comment fonctionne GatsbyJS (tous les liens seront dans les sources) et surtout à comprendre l’organisation du dossier et l’utilisation de chaque fichier. J’ai aussi mis en place Netlify CMS sur un projet test avec Gatsby avec Semantic UI que j’ai ensuite déployé pour essayer toute la stack en même temps. Pour voir le répo [c’est par ici](https://github.com/EvaSpessotto/test-gatsby-netlify).

De ce que j’ai compris, un projet avec Gatsby est composé de la façon suivante:

```
|-- /.cache
|-- /blog
|-- /src
	|--/components
		|-- layout.js
	|-- /pages
		|-- index.js
		|-- 404.js
	|-- /templates
|-- /static
      |--/admin
		|-- config.yml
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-ssr.js
|-- gatsby-browser.js
```

Je vais expliquer l’utilisation des fichiers et dossiers auxquels j’ai eu à faire, pour les autres je vous laisse la [documentation de Gatsby](https://www.gatsbyjs.org/docs/gatsby-project-structure/).

### `/blog`

Le nom de ce fichier est arbitraire, c’est là que seront stocké les fichiers .md rédigés via Netlify CMS. Si vous n’utilisez pas Netlify CMS vous n’aurez pas besoin de ce dossier.

### `/src/components`

De la même façon que dans un projet React, le dossier `/components` contient tous les composants. Dans ce dossier on trouvera également un fichier `layout.js` car dans Gatsby le layout est un composant qui va contenir toutes les parties redondantes du site (menu, navigation, footer…). Le composant doit en principe entourer les autres composants:

```jsx
src/components/layout.js

import React from "react";
import Navigation from "./global/navigation";
import Footer from "./global/footer";

export default ({ children }) => (
  <div>
    <Navigation />
      {children}
    <Footer />
  </div>
)
```

```jsx
src/pages/index.js

import React from "react";
import Layout from "../components/layout";

export default IndexPage () => {
  return (
    <Layout>
      <h1>Hello world !</h1>
    </Layout>
  )
}
```

### `/src/pages`

Ce dossier contient toutes les pages du site. A chaque fois qu’un fichier est ajouté dans ce dossier une route portant le même nom est créé. 

_NB: pensez à ne pas mettre de majuscule au début du nom de vos pages sinon la route correspondante aura aussi une majuscule (sauf si c’est ce que vous voulez)._

Par exemple le fichier `Articles.js` donnera la route suivante `http://commit42.com/Articles`.

### `/src/templates`

Les templates sont des fichiers qui donnent la structure pour un même type de données. Dans mon cas je vais avoir un template pour les articles de blog, qui pourrait par exemple donner ça:

```jsx
blogPostTemplate.js

import React from "react";
import Layout from "../components/layout";

export default const BlogPostTemplate ({ data }) => {

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className="blog-post">
        <div>
          <h1>{frontmatter.title}</h1>
          <h4>{frontmatter.date}</h4>
          {
            frontmatter.tags && frontmatter.tags.map((tag, index) => <button key={index}>{tag}</button>)
          }
        </div>
        <img src={frontmatter.thumbnail} />
        <div 
          className="blog-post-content"
          dangerouslySetInnerHTML={{__html: html}}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        thumbnail
      }
    }
  }
`
```

_NB: Dans la div en dessous de la balise img j’injecte directement le markdown récupéré avec GraphQL, ainsi je n’ai aucune mise en page à faire !_

_NB 2: La query tout à la fin après le composant est une requete qui grâce à GraphQL me permet de récupérer les données dont j’ai besoin, ici les articles. Le frontmatter est la partie tout en haut d’un fichier markdown (.md) dans laquelle on met toutes les informations qui ne sont pas le contenu de l’article (le titre, la date, le nom de l’auteur, les tags…)_

_Exemple:_

```
---
title: Article 1
Author: Eva
Path: /articles/article-1
Date: 06/03/2019
---

Ici le contenu !
```

Ainsi tous mes articles auront cette structure:

![Template d'un post du blog](/assets/articles-eva/article-3/template-blog.png)

### `/static/admin`

Le dossier admin contient la configuration pour Netlify CMS. C’est dans un fichier config.yml que l’on défini les collections et les champs que l’on souhaite pouvoir remplir depuis l’interface. De même que le dossier /blog, si vous n’utilisez pas Netlify CMS vous n’aurez pas besoin de ce dossier.

Si Netlify CMS vous intéresse voici le lien pour le configurer: <https://www.netlifycms.org/docs/add-to-your-site/>

### `gatsby-config.js`

C’est le fichier dans lequel on configure les extensions que l’on installe pour Gatsby.
De mon côté j’ai utilisé:

* gatsby-source-filesystem
* gatsby-transformer-remark
* gatsby-plugin-sharp
* gatsby-transformer-sharp
* gatsby-remark-relative-images
* gatsby-remark-copy-linked-files

Les deux premiers servent à récupérer et formater le markdown pour qu’il soit lu par GatsbyJS, les autres vont s’occuper d’optimiser les images (donc pour réduire le temps de chargement etc).

### `gatsby-node.js`

Ce fichier permet de gérer la création de pages à partir des données récupérées via GraphQL.
Par exemple pour les articles, au lieu de créer une page par article dans le dossier `/src.pages`,  j’ai créé un template dans lequel j’injecte les données pour chaque article. Seulement pour accéder à un article il faut une route unique, c’est donc dans gatsby-node.js que l’on va configurer ça. ([ici la documentation officielle](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/) à ce sujet)

## Déploiement :rocket:

Concernant le déploiement sur Netlify j’ai eu un peu de mal comme c’était sur la première fois et dans la [documentation de Gatsby](https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/#deploying-to-netlify) je n’avais pas compris qu’il fallait à la fois gérer le déploiement sur Netlify et l’OAuth sur Github (mais grâce à Maxime qui avait testé pour moi ce week-end ça a été). 

Cependant faites bien attention à configurer dans le dossier config.yml le repo que vous allez utiliser avant de lancer le déploiement.

Vous pouvez trouvez le répo et la démo [juste ici](https://github.com/EvaSpessotto/test-gatsby-netlify).

## Conclusion :clap:

Conclusion
Cette semaine de formation et de tests a été des plus primordiale car j’ai pu revoir ma stack et l’ajuster. Outre ce petit changement de CMS, j’ai bien pu prendre en main GatsbyJS, Netlify CMS et le déploiement sur Netlify que je ne connaissais pas du tout. 

Avec Gatsby j’ai rapidement compris l'intérêt du layout et des templates qui vont me faire gagner énormément de temps dans la conception future du nouveau site. Netlify CMS quant à lui est très facilement configurable, super accessible et pratique ; le déploiement de l’ensemble a été incroyablement rapide, pour quelqu’un qui n’avait encore jamais déployé une application j’ai été bluffée.

Dans le prochain article je vous parlerai du MVP du site de commit42 que je ferai avec la nouvelle stack évoquée dans cet article: GatsbyJS + Semantic UI React + Netlify CMS. Stay tuned !

### Sources

#### Tutoriels GatsbyJS

* <https://www.gatsbyjs.org/tutorial/>
* <https://www.youtube.com/playlist?list=PLnHJACx3NwAdCmDDPdCt6W6BJfRbatfnc>
* <https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby>
* <https://www.gatsbyjs.org/blog/2017-07-19-creating-a-blog-with-gatsby/>
* <https://github.com/prayash/awesome-gatsby>

#### Afficher la liste des fichiers markdown

<https://www.gatsbyjs.org/docs/adding-a-list-of-markdown-blog-posts/>

#### Créer des pages avec GatsbyJS

<https://www.gatsbyjs.org/docs/creating-and-modifying-pages/>

#### Structure type d’un projet avec Gatsby

* <https://www.gatsbyjs.org/docs/gatsby-project-structure/>
* <https://www.youtube.com/watch?v=UwYTK28gNmQ&list=PLnHJACx3NwAdCmDDPdCt6W6BJfRbatfnc&index=5>

#### Gatsby et NetlifyCMS

<https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/#sourcing-from-netlify-cms>

#### Même si on a plus prévu de s’en servir, j’ai quand même trouvé un tutoriel pour Gatsby et Strapi:

<https://jamstatic.fr/2018/04/26/construire-un-blog-statique-avec-gatsby-et-strapi/>

#### Plugin pour Gatsby et Strapi

<https://www.gatsbyjs.org/packages/gatsby-source-strapi/?=strapi>

#### Exemple de site avec Gatsby et Sémantic UI

<https://www.gatsbyjs.org/starters/parmsang/gatsby-starter-ecommerce/>

#### Netlify vs Netlify CMS

<https://www.netlifycms.org/docs/intro/#netlify-cms-vs-netlify>
