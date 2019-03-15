---
title: Le MVP est là
date: 2019-03-15T08:38:32.079Z
author: Eva Spessotto
thumbnail: /assets/mvp.png
tags:
  - MVP
  - Agilité
  - GatsbyJS
---
Non le MVP n’est pas le Most Valuable Player mais bien le Minimum Viable Project.

Cette semaine je me suis attachée à faire une première version du site de commit42 avec uniquement les fonctionnalités primordiales, ça sera ma base de travail que je vais venir améliorer de sprint en sprint.

## Le MVP

#### _“Euh rappelle-moi Eva, c’est quoi un MVP déjà ?”_

Comme je le disais dans l’introduction c’est le Produit Minimum Viable (Minimum Viable Project en anglais). En gros c’est le projet sous sa forme la plus simple, avec les fonctionnalités minimales, sans fioritures. Le MVP permet d’avoir rapidement quelque chose de concret même si c’est au détriment de certaines fonctionnalités intéressantes mais non vitales tel que l’aspect visuel.

Ce qui est intéressant aussi avec le MVP c’est qu’on a un retour utilisateur et un retour d’expérience rapidement, on peut alors ajuster le projet sur les prochains sprints en fonction de cette base.

![Schema MVP](/assets/mvp.png "Schema MVP")

_Crédits icônes: Freepik_

Le MVP est donc la base de travail, comme les fondations d’une maison sur lesquelles on va venir ajouter petit à petit les briques jusqu’à ce que la maison soit satisfaisante.

#### _“C’est vachement intéressant ça, mais du coup d’où tu es partie ? Tu avais un modèle ?”_

Vu que je m’occupe d’une refonte de site, je suis partie sur une reproduction des fonctions du site actuel mais en reprenant le code à 0 avec la [nouvelle stack](https://www.commit42.fr/blog/un-nouveau-site-pour-une-nouvelle-annee/).

Il était convenu que je reprenne exactement ce qui est déjà sur le site - c’est à dire :

* une page d’accueil très minimaliste,
* une partie blog avec la liste des articles et la possibilité de voir un article... tout en y ajoutant Netlify CMS, afin de pouvoir rédiger et publier facilement des articles.

En effet la publication d’articles sur le site en l’état est problématique car il faut rédiger soi-même l’article en [markdown](https://fr.wikipedia.org/wiki/Markdown) puis l’envoyer sur le repo distant pour que l’application soit redéployée.

Avec la solution que je propose (Netlify CMS) il y aura un éditeur de texte qui créer lui même le fichier markdown à partir du texte entré (en prenant en compte les titres, images, liens…), ce qui sera tout de même plus simple.

#### _“Et c’est tout ? T’as pas galéré ou quoi ?”_

Ah si si.

Surtout pour configurer les routes (l’url d’accès à une page) comme je le souhaitais. En fait pour ne pas perdre l’indexation des articles déjà publiés par commit42 et surtout ne pas casser les liens qui ont déjà pu être partagés sur internet j’ai voulu reprendre exactement la même structure. Et ça ne s’est pas tout à fait passé comme prévu.

## Comment configurer les routes avec Netlify CMS

Je souhaitais donc avec des liens avec la structure suivante:

```
http://commit42.com/blog/[insérer ici le nom de l’article]
```

Et il se trouve que dans la config de Netlify CMS on peut ajouter une ‘preview_path’ qui permet - du moins c’est ce que je pensais - formater l’url des posts à partir des slugs.

Le slug est une chaîne de caractère qui identifie un article et que l’on peut utiliser dans l’url de celui-ci. Il est souvent généré à partir du titre et parfois de la date. Tous les mots/chiffres sont séparés par de tirets de cette façon: `ceci-est-un-slug-3`

Ici il va me servir pour définir ma route vers mes articles.

```yml
collections:  
    - name: posts
      slug: “{{slug}}”  
      preview_path: "blog/{{slug}}"
```

Ici j’ai défini une collection, donc un type de données, qui s’appelle `posts` et qui pour chaque post va créer un slug à partir du titre (ça c’est ce que fait tout seul Netlify CMS).

Je pensais donc que `preview_path` permettait de configurer la route que l’on souhaite afficher pour les posts, car actuellement la seule route que j’arrivais à afficher est:

```
http://commit42.com/[Insérer ici un slug]
```

En fait j’ai fini par comprendre que cette preview path permet, lorsque l’on rédige un article, de voir un aperçu de l’article comme s’il était publié sur le site. Finalement c’est tout à fait logique mais je n’avais pas compris tout de suite.

Heureusement Maxime, qui connaît déjà bien GatsbyJS, avait déjà eu à faire à ce souci de routes et il m’a expliqué qu’il fallait créer à la main une route pour les articles.

J’ai donc dû ajouter cette fonction à mon fichier `gatsby-node.js`:

```jsx
// A mettre tout en haut du fichier
const  { createFilePath }  =  require("gatsby-source-filesystem")

// Ici le code que vous avez peut-être déjà
  
exports.onCreateNode = ({ node, actions, getNode }) => {  
    const { createNodeField } = actions  
  
    if (node.internal.type === `MarkdownRemark`) {  
      const value = createFilePath({ node, getNode })  
      createNodeField({  
          name: `slug`,  
	      node,  
          value,  
       })  
    }  
}
```

Ainsi à chaque fois d’un fichier markdown est détecté, GatsbyJS crée une route à partir du dossier dans lequel est stocké le fichier en question, pour moi `/blog/` en y concaténant son slug à la fin, ce qui donne 

`http://commit42.com/blog/[Insérer ici un slug]`.

Je vous recommande vivement d’aller voir [cet article](https://scotch.io/tutorials/zero-to-deploy-a-practical-guide-to-static-sites-with-gatsbyjs#toc-creating-blog-pages) qui approfondi ce cas plus en détail et donne des explications sur les fonctions utilisées.

## Ajouter des composants SEO

Si vous vous souvenez bien , dans mon [premier article](https://www.commit42.fr/blog/un-nouveau-site-pour-une-nouvelle-annee/) je mentionnais le fait qu’améliorer le référencement du site est un des points les plus importants. C’est pourquoi j’ai décidé d’implémenter des composants SEO dans le MVP.

Afin de créer une fonctionnalité la plus complète possible j’ai créé 3 composants:

* un pour les balises meta du site qui vont avoir un impact sur les moteurs d’indexation (qui sont habituellement dans une balise HEAD)
* un pour le protocole Open Graph
* et un pour les Twitter Cards.

#### _“Olala Eva je comprends rien à ce que tu racontes, ça veut dire quoi tout ça ?”_

**Les balises meta**

Les balises meta sont la base du SEO , il s’agit de balises qui permettent d’optimiser le référencement des pages.

Elles se présentent de la façon suivante:

```html
<html>  
  <head>  
    <title>commit42 | Studio de développement Web - React - Progressive Web Apps - CakePHP</title>  
    <meta name="description" content="commit42, studio d'innovation Web et Data sur Toulouse. Nous accompagnons et développons vos projets Web : React, CakePhp et Magento." />  
  </head>  
  <body>
    // Ici le body
  </body>
</html>
```

Et permettent d’avoir l’affichage suivant dans google:

![Affichage Google](/assets/commit42-google.png "Affichage Google")

Si ces balises sont mal renseignées certaines pages pourraient ne pas apparaître sur google et donc moins faire connaître le site (vu que personne ne pourra les trouver).

**Open Graph**

Le protocole Open Graph a été développé par Facebook en 2010 et permet d’optimiser l’aperçu d’un lien lorsqu’on le partage sur les réseaux sociaux. Il se base justement sur les balises meta pour générer un aperçu avec le titre, la description et l’image de la page.

Comme les articles de blog sont diffusés systématiquement via les réseaux sociaux, qui sont la source de trafic principale du blog à l’heure actuelle, rendre les liens attrayants lorsqu’ils sont partagés est une fonction essentielle.

![Affichage Open Graph](/assets/schema-opengraph.png)

**Les Twitter Cards** 

Les Twitter Cards sont exactement la même chose que Open Graph mais spécifiquement pour Twitter.

Si vous souhaitez comprendre étape par étape comment créer des composants SEO pour GatsbyJS, je vous invite à aller voir la documentation de [GastbyJS](https://www.gatsbyjs.org/docs/add-seo-component/) qui m’a grandement aidée ainsi que ces deux repos: [gastby-starter-prismic](https://github.com/LeKoArts/gatsby-starter-prismic/blob/master/src/components/SEO/SEO.jsx) et de [marisamorby.com](https://github.com/jlengstorf/marisamorby.com/blob/master/src/components/SEO/SEO.js). 

#### _“C’est bien joli toute cette théorie Eva mais en vrai comment ça marche ?”_

Voici à quoi ressemble mes composants:

```jsx
// src/components/SEO/SEO.js

import React from  'react';
import  { Helmet }  from  "react-helmet"
import PropTypes from  "prop-types"
import  { StaticQuery, graphql }  from  "gatsby"
import favicon from  '../../../static/favicon.png'
import Facebook from  './Facebook'
import Twitter from  './Twitter'

const  SEO  =  ({  title,  description,  image,  pathname,  article  })  =>  {
  return (
    <StaticQuery
	   query={query}
	      render={({
	         site: {
		       siteMetadata: {
		          defaultTitle,
		          defaultDescription,
                  siteUrl,
		          defaultImage,
		          twitterUsername,
		        }
              }
	       }) => {
	const  seo = {
	    title: title || defaultTitle,
	    description: description || defaultDescription,
	    image: `${siteUrl}${image  ||  defaultImage}`,
	    url: `${siteUrl}${pathname  ||  '/'}`
	}  
		
	return (
	    <>
	      <Helmet  title={seo.title}>
	        <html  lang="fr" />
	        <meta  name="description" content={seo.description} />
		<meta  name="image" content={seo.image} />
		<link  rel="shortcut icon" href={favicon}></link>
	      </Helmet>
	      <Facebook
		desc={seo.description}
		image={seo.image}
		title={seo.title}
		type={article ? 'article' : 'website'}
		url={seo.url}
	      />

	      <Twitter
		title={seo.title}
		image={seo.image}
		desc={seo.description}
		username={twitterUsername}
	      />
	    </>
           )
         }}
       />
   );
}

export  default SEO;

SEO.propTypes =  {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	pathname: PropTypes.string,
	article: PropTypes.bool,
}
  
SEO.defaultProps =  {
	title:  null,
	description:  null,
	image:  null,
	pathname:  null,
	article:  false,
}

const query =  graphql`
	query SEO {
		site {
			siteMetadata {
			defaultTitle: title
			defaultDescription: description
			siteUrl: url
			defaultImage: image
			twitterUsername
			}
		}
	}
`;
```

```jsx
// src/components/SEO/Facebook.js

import PropTypes from  'prop-types'  
import React from  'react'  
import Helmet from  'react-helmet'  
  
const Facebook = ({ url, name, type, title, desc, image }) => (  
	<Helmet>  
		{name && <meta property="og:site_name" content={name} />}  
		<meta property="og:url" content={url} />  
		<meta property="og:type" content={type} />  
		<meta property="og:title" content={title} />  
		<meta property="og:description" content={desc} />  
		<meta property="og:image" content={image} />  
		<meta property="og:image:alt" content={desc} />  
	</Helmet>  
)  
  
export default Facebook  
  
Facebook.propTypes = {  
	url: PropTypes.string.isRequired,  
	type: PropTypes.string,  
	title: PropTypes.string.isRequired,  
	desc: PropTypes.string.isRequired,  
	image: PropTypes.string.isRequired,  
	name: PropTypes.string,  
}  
  
Facebook.defaultProps = {  
	type: 'website',  
	name: null,  
}
```

```jsx
// src/components/SEO/Twitter.js

import PropTypes from  'prop-types'  
import React from  'react'  
import Helmet from  'react-helmet'  
  
const Twitter = ({ type, username, title, desc, image }) => (  
	<Helmet>  
		{username && <meta name="twitter:creator" content={username} />}  
		<meta name="twitter:card" content={type} />  
		<meta name="twitter:title" content={title} />  
		<meta name="twitter:description" content={desc} />  
		<meta name="twitter:image" content={image} />  
		<meta name="twitter:image:alt" content={desc} />  
	</Helmet>  
)  
  
export default Twitter  
  
Twitter.propTypes = {  
	type: PropTypes.string,  
	username: PropTypes.string,  
	title: PropTypes.string.isRequired,  
	desc: PropTypes.string.isRequired,  
	image: PropTypes.string.isRequired,  
}  
  
Twitter.defaultProps = {  
	type: 'summary_large_image',  
	username: null,  
}
```

Dans le fichier `SEO.js`, je récupère toutes les données puis les distribue aux autres composants. 
Je m’explique: grâce à graphQL on récupère d’abord les données du fichier `gatsby-config.js`.

```jsx
// gatsby-config.js

module.exports = {  
	siteMetadata: {  
		title: 'commit42 | Studio de développement Web',  
		description: 'Studio de développement Web à Toulouse - React - Progressive Web Apps - CakePHP',  
		url: 'https://new-site-c42.netlify.com',  
		image: '/assets/logo.png',  
		twitterUsername: '@commit42'  
	},  
	plugins: [// ici vos plugins]  
}
```

```jsx
// src/components/SEO/SEO.js

const query = graphql`  
	query SEO {  
		site {  
		siteMetadata {  
			defaultTitle: title  
			defaultDescription: description  
			siteUrl: url  
			defaultImage: image  
			twitterUsername  
			}  
		}  
	}  
`;
```

Ensuite on passe ces données au composant SEO avec une `StaticQuery` qui permet de récupérer à la fois des données avec GraphQL et les props du composant.

```jsx
// src/components/SEO/SEO.js

<StaticQuery  
	query={query}  
	render={({  
		site: {  
		siteMetadata: {  
			defaultTitle,  
			defaultDescription,  
			siteUrl,  
			defaultImage,  
			twitterUsername,  
		}  
	}  
})
```

D’autre part je récupère les propriétés (ou props pour les intimes) qui sont passées au composant SEO.

```jsx
// src/components/SEO/SEO.js

const SEO = ({ title, description, image, pathname, article }) => {
```

On crée ensuite des variable pour afficher soit les props s’il y en a soit les données du `gatsby-config.js` qui sont ici considérées comme les données par défaut (donc à afficher si une page n’a pas de titre, description ou autre).

```jsx
// src/components/SEO/SEO.js
  
const seo = {  
	title: title || defaultTitle,  
	description: description || defaultDescription,  
	image: `${siteUrl}${image || defaultImage}`,  
	url: `${siteUrl}${pathname || '/'}`  
}  
```

Ces variables sont par la suite transmises aux composants Facebook et Twitter comme props pour qu’ils les données chacun de leur côté.

```jsx
// src/components/SEO/SEO.js

<Facebook  
	desc={seo.description}  
	image={seo.image}  
	title={seo.title}  
	type={article ? 'article' : 'website'}  
	url={seo.url}  
/>  
<Twitter  
	title={seo.title}  
	image={seo.image}  
	desc={seo.description}  
	username={twitterUsername}  
/>
```

Ici c’est le template pour les articles dans lequel j’importe le composant SEO et lui transmet les informations de la page afin qu’elle puisse être indexée.

Vu que ce composant sert à construire toutes les pages “articles” je suis certaine que tous mes articles vont être indexés par les moteurs de recherche et vont avoir un aperçu optimisé grâce à Open Graph.

```jsx
// src/templates/blog-post.js

import React from  "react"  
import  "./blog-post.scss"  
import { Container, Header } from  'semantic-ui-react'  
import { graphql } from  "gatsby"  
import SEO from  '../components/SEO/SEO'  
import Layout from  '../components/layout'  
  
export  default  function  Template({ data }) {  
	const { markdownRemark: post } = data  
	return (  
		<Layout isHome={false}>  
			<SEO  
			title={post.frontmatter.title}  
			description={post.excerpt || 'nothing here'}  
			image={post.frontmatter.thumbnail}  
			pathname={post.fields.slug}  
			article  
			/>  
			<Container text style={{ marginTop: '5%', marginBottom: '5%' }}>  
				<Header as="h1">{post.frontmatter.title}</Header>  
				<div  
				className="blog-post-content"  
				dangerouslySetInnerHTML={{ __html: post.html }}  
				/>  
			</Container>  
		</Layout>  
	)  
}  
  
export const pageQuery = graphql`  
query BlogPostBySlug($slug: String!) {  
		markdownRemark(fields: {slug: {eq: $slug}}) {  
			html  
			excerpt  
			fields{  
				slug  
			}  
			frontmatter {  
				date  
				title  
				thumbnail  
			}  
		}  
	}  
`
```

Les “proptypes” utilisées à la fin de chaque composant sont une façon de typer les propriétés, c’est à dire qu’on défini en avance le type de données que doit recevoir chaque variable. Cela rend le débogage plus simple en affichant les erreurs dans la console lorsqu’on utilise le mode développeur du navigateur mais surtout, permet de s’assurer que la donnée passée de composant en composant est bien ce dont on a besoin.

```jsx
SEO.propTypes = {  
	title: PropTypes.string,  
	description: PropTypes.string,  
	image: PropTypes.string,  
	pathname: PropTypes.string,  
	article: PropTypes.bool,  
}
```

Sur l’exemple ci dessous le titre s’attend à recevoir une string (pas des sous-vêtements hein mais une chaîne de caractère), tout comme la description, l’image et le pathname alors que article sera un booléen (true ou false).

Les proptypes n’ont pas réellement de rapport avec le référencement mais c’est la première fois que j’en utilise donc je trouvais intéressant de les mentionner tout de même.

## Une démo ?

#### _“Dis Eva, est-ce qu’on peut vooooooir ?”_

NON.

Bon d’accord.

Voici [le repo du MVP](https://github.com/EvaSpessotto/mvp-commit42) et [le lien](https://mvp-commit42.netlify.com/) pour la démo (bien que si tout s’est bien passé, vous lisez déjà cet article sur le MVP !).

NB: Pour les personnes qui liront cet article bien après le mois de mars 2019, vous pourrez voir à quoi ressemblait le MVP au moment où je l’ai fait !

## Conclusion

Le MVP est fin prêt à voir le jour ! Dès la semaine prochaine je vais le mettre en ligne et enfin pouvoir écrire et publier des articles depuis Netlify CMS (j’ai hâte) et arrêter de spammer mes collègues de mails dès que j’envoie quelque chose sur le repo du site (ils ont hâte).

### Sources

#### Tutoriel comment faire un blog avec GatsbyJS:

<https://www.gatsbyjs.org/blog/2017-07-19-creating-a-blog-with-gatsby/>

#### Configurer les routes pour les articles

<https://scotch.io/tutorials/zero-to-deploy-a-practical-guide-to-static-sites-with-gatsbyjs#toc-creating-blog-pages>

#### Faire un composant SEO pour GatsbyJS

<https://www.gatsbyjs.org/docs/add-seo-component/>

#### Faire des composants utilisant Open Graph et Twitter Cards

<https://github.com/LekoArts/gatsby-starter-prismic>
