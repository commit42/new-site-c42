---
path: /blog/un-nouveau-site-pour-un-nouvelle-annee
title:  "Un nouveau site pour une nouvelle année"
date: 2019-02-21T11:16:14+01:00
tags:  ["gatsby",  "PWA",  "React", "Strapi"]

---

Quoi de mieux pour commencer l’année que d’un peu de nouveauté ? L’équipe de commit42 est très heureuse de vous annoncer la refonte prochaine du site web et blog !

Le projet est mené par Eva, stagiaire récemment arrivée chez commit42 (c’est moi qui rédige l’article) et supervisé par Mathieu et Thomas.

Je vous propose de suivre la réalisation de ce projet que je documenterai sous forme d’articles. Ce projet est pour moi l’occasion de mettre en application les compétences que j’ai développées durant ma formation à la [Wild Code school](https://wildcodeschool.fr/) dans un cadre réel ainsi que d’assurer la gestion de projet.


#### *“Waw c’est génial tout ça Eva, mais en quoi va consister ce changement ?”*


Et bien déjà, redéfinir les besoins en terme de fonctionnalités et de contenu à communiquer et ensuite changer les technologies utilisées jusqu’ici pour le site.

## Les besoins

#### Une méthode simple et classique pour définir le besoin: un bon vieux brainstorming des familles



Pour la (re)définition des besoins nous avons procédé en bonne et due forme à une réunion d’équipe. Chacun armé d’une pile de post-it et de son plus beau marker, nous avons fait la liste, sous forme de mots-clefs, des choses qui nous paraissaient importantes par rapport au site (que ce soit dans le fond ou la forme). Ensuite nous les avons triés par importance afin de les prioriser et nous avons réuni les demandes similaires. Nous avons ensuite séparé ces besoins en deux catégories: les besoins fonctionnels et les besoins de contenu. 


![Schéma besoins](/assets/articles-eva/besoins.png)

Pour ce qui est des besoins fonctionnels nous avons en top de liste l’amélioration du référencement ; besoin vital pour que des potentiels clients puissent trouver facilement notre site et découvrir nos services.

Ensuite, et presque à l’unanimité, est ressorti le fait de mettre en avant les compétences techniques de l’équipe et particulièrement de faire de ce nouveau site une PWA (évidemment vous savez déjà ce que c’est puisque vous avez déjà probablement lu [notre article](https://www.commit42.fr/blog/pwa-cest-qwa/) sur les PWA) ; ainsi notre site pourra servir de démo auprès des clients et appuyer l’idée que c’est vachement cool quand même. Enfin, la partie blog du site sera conservée pour continuer à écrire des articles sur les outils et technologies qu’on utilise.

Concernant les besoins de contenu nous en avons conclu qu’il faudrait communiquer sur:

*  **Les qualités de production**

    Nous souhaitons montrer nos méthodes de travail, les technologies utilisées, la qualité et les tests et les réalisations de l’entreprise (avec des démos)

* **Les qualités relationnelles**

    Donc tout ce qui est lié à la clientèle (démarchage, suivi de projet et mise en production du site)

* **Les qualités humaines de l’entreprise**

    Notamment en expliquant l’origine et les singularités de commit42 ainsi qu’en mettant en avant les valeurs de l’entreprise.


Nous avons aussi pu relever une envie d’inclure des choses un peu ludiques sur le site pour refléter l’état d’esprit de l’entreprise - jeune, décalée et un peu geek - qui pourraient se manifester sous forme de petites animations inattendues, éventuellement des jeux sur certaines pages (page 404 ?) mais tout ça sera plus amplement réfléchi en temps voulu (et si le temps le veut...).

## Les solutions techniques

### Partie front-end


Ce nouveau site sera donc une PWA (Progressive Web App) et j’ai fait le choix de la faire en React.js avec le framework Gatsby.js et Semantic UI.


![Technos front-end](/assets/articles-eva/technos-front.png)


#### *“Ok ok mais pourquoi tu veux faire une Single Page Application ?”*

En effet React permet de faire des SPA ([single page application](http://www.opentuto.com/tag/avantages-et-inconvenients-spa/) donc) qui sont des applications qui ne comportent qu’une seule page HTML. Le contenu change selon les requêtes mais la page n’est jamais rechargée. Cela permet d’optimiser le temps de chargement entre les pages et fluidifier l’expérience utilisateur.

En fait toute l’application est chargée la première fois que l’on ouvre l’application, le navigateur interprète ensuite le javascript pour afficher dynamiquement le contenu en fonction des actions de l’utilisateur.

Tout ça pour dire que ce n’est pas vraiment cette particularité là qui m’a fait choisir React mais plutôt le fait que l’outil qui permet de générer un environnement pour utiliser React, à savoir create-react-app, génère un Service Worker par défaut. C’est un script qui est exécuté par le navigateur et qui permet à l’application d’être disponible en mode hors-ligne. Et ça tombe bien parce qu’une PWA a comme prérequis d’être disponible en hors-ligne (tout est lié).

#### Gatsby.js VS Next.js

![Gatsby vs Next](/assets/articles-eva/gatsby-vs-next.png)

#### *“Et au fait Eva, pourquoi Gatsby.js ? Et en plus c’est quoi ce truc?”*

Gatsby.js est considéré comme un “générateur de site statique” qui fait du rendu côté serveur (SSR) et ça c’est super [SEO friendly](https://www.anthedesign.fr/referencement/site-internet-seo-friendly/) (autrement dit, c’est très bien pour le référencement de l’application). Ce framework est très adapté aux sites statiques comme les sites vitrine ou les blogs car il est vraiment configuré pour.

#### *“Ouais mais du coup c’est quoi la différence entre Next.js et Gatsby.js?”*

Les deux sont des frameworks pour React qui:

-   génèrent des sites performants
    
-   permettent un bon référencement
    
-   créent des SPAs (single page applications)

Cependant Next.js est plutôt une framework pour faire des applications SSR alors que Gatsby.js est réellement fait pour créer des sites statiques très rapidement. Avec Gatsby il y aura moins de configuration à faire qu’avec Next.js et le déploiement est très facile à faire avec Netlify. De plus l’aspect référencement est plus poussé pour des sites statiques qu’avec Next.js.

Pour y avoir plus clair j’ai tout de même fait un petit tableau comparatif:

![Comparaison Gatsby et Next](/assets/articles-eva/tab-gatsby-next.png)

Si vous voulez en savoir plus sur les différences entre Gatsby et Next je vous laisse quelques articles qui parlent de tout ça:

[Différences entre CRA/Next.js/Gatsby.js](https://coffeencoding.com/cra-vs-next-js-vs-gatsby/): Cet article fait un comparatif entre create-react-app, Gatsby.js et Next.js et montre des cas d’utilisation pour chaque

[Comment fonctionnent Next.js et Gatsby.js](https://prismic.io/blog/how-gatsby-and-nextjs-really-work):
 Dans cette interview [Gabe Rogan](https://twitter.com/krabbypattified) ([@krabbypattified)](https://twitter.com/krabbypattified) explique comment fonctionnent les deux frameworks, surtout au niveau du référencement et de la performance

[Next.js vs Gatsby.js](http://blog.jakoblind.no/gatsby-vs-next/): Cet article complète bien les deux autres, d’autres points sont abordés concernant les différences entre les deux framwork et explique comment chacun d’eux utilise les données

#### Bootstrap VS Semantic UI

![Bootstrap vs Semantic UI](/assets/articles-eva/bootstrap-vs-semantic.png)

Pour la partie design je vais plutôt me tourner vers Semantic UI React même si j’aurais pu utiliser Bootstrap 4.

#### *“Euh, wesh Eva t’es trop une hipster, tu veux pas utiliser les outils que tout le monde utilise pff”*


Alors… Oui mais non.

J’ai déjà utilisé Bootstrap sur quelques projets et il ne m’a pas fallu longtemps pour me rendre compte que c’est extrêmement verbeux. Que celui qui ne s’est jamais arraché les cheveux en se perdant dans toutes les classes Bootstrap me jette la première pierre !

Le second point qui m’a fait ne pas choisir ce framework c’est que Bootstrap utilise des classes globales et non sémantiques, ce qui n’est pas vraiment recommandé dans les [bonnes pratiques du code](https://robdodson.me/css-semantics/). En plus de ça c’est un véritable casse-tête parfois pour arriver à styler les éléments comme on le souhaite à cause du code très surchargé par le framework.

De plus Bootstrap est utilisé par beaucoup de personnes, il est donc très bien documenté, mais c’est aussi un inconvénient parce que tous les sites se ressemblent (sauf si on passe un temps fou à surcharger Bootstrap, ce qui du coup n’a pas trop d'intérêt, autant changer de framework…). Donc si on recherche un minimum d’originalité, Bootstrap n’est pas le meilleur choix à faire.

Pour finir Bootstrap est assez lourd, ce qui a fini de me décider sur le fait que je ne veux pas l’utiliser.

Bon, à part ça Bootstrap n’est pas non plus à jeter à la poubelle ; il est très facile à prendre en main donc super pour débuter, il est responsive et mobile first et comme je l’ai dit plus haut, très bien documenté. Mais pour la refonte du site de commit42 ce n’est pas ce dont j’ai besoin.

#### *“Bon c’est super Eva, tu fais la maligne à démonter Bootstrap mais du coup tu vas utiliser quoi ?”*


Récemment je me suis intéressée à Semantic UI, il m’a fallu un certain temps pour le prendre en main mais au final c’est pas si compliqué.

Ce que j’ai apprécié avec ce framework c’est qu’il est livré avec un système très simple de thématisation, il est donc facile de styler les composants pour coller parfaitement au design que l’on souhaite.

Aussi il est bien documenté et léger et propose une façon de coder assez stricte mais qui est très concise donc permet de garder un code lisible (youpi).

C’est sans compter qu’il est également responsive et comporte un système de grille.

Comme pour Next.js et Gatsby.js j’ai fait un petit tableau des avantages et inconvénients de chaque:

![Comparaison Bootstrap et Semantic UI](/assets/articles-eva/tab-bootstrap-semantic.png)

### Partie back-end


#### Les headless CMS


Lors de mes recherches j’ai découvert les [headless CMS](https://www.storyblok.com/tp/headless-cms-explained), qui sont des systèmes de gestion de contenu qui mettent à disposition les données sous forme d’API REST. L’API est gérée depuis une interface graphique qui communique avec la base de données.

![Schéma headless CMS](/assets/articles-eva/schema-cms.png)

Les headless CMS sont très adaptés aux Single Page applications car elles s’appuient sur des API pour recevoir des données justement. Aussi la séparation distincte du front et du back est plutôt intéressante, on peut vraiment personnaliser l’interface de l’application pour créer une meilleure expérience utilisateur et travailler indépendamment sur le back ou le front sans que ça ait d'incidence sur l’un ou l’autre.

Si vous faites une recherche rapide vous trouverez une flopée de headless CMS et c’est pas toujours facile de faire la différence entre chaque !

Globalement tous proposent le même genre de service et beaucoup sont payants. Toutes catégories confondues, on peut trouver en tête de liste ButterCMS, dotCMS, Directus et Contentful. Evidemment c’est une liste non exhaustive, voici un [tableau comparatif](https://docs.google.com/spreadsheets/d/1L2KNUf-8um8_yevKRTmUUQKy4DcoKWZ-GZR0HavrtoQ/edit#gid=1319427496) assez complet.

J’ai rapidement cherché des solutions gratuites, bien que ButterCMS avait l’air intéressant car il est adapté aux blogs. Parmi les headless CMS gratuits j’ai rapidement été séduite par la simplicité de [Strapi](https://strapi.io/), qui est open-source, complètement gratuit et français ! En plus il existe un [plugin](https://github.com/strapi/gatsby-source-strapi) pour connecter Gatsby et Strapi. Le monde est bien fait non ?

J’ai fait un tableau comparatif de Strapi et ButterCMS mais aussi Cockpit qui est un CMS gratuit et plutôt bien réputé, mais qui finalement ne m’intéressait pas pour ce projet car pas très bien documenté et il nécessite d’avoir un serveur en PHP (alors que je veux rester en javascript).

![Comparaison CMS](/assets/articles-eva/tab-cms.png)

ButterCMS: [https://buttercms.com/api-first-cms/](https://buttercms.com/api-first-cms/)

Strapi: [https://strapi.io/overview](https://strapi.io/overview)

Cockpit: [https://getcockpit.com/](https://getcockpit.com/)

Pour ce qui est de la base de donnée on utilisera MongoDB pour deux raisons:

* Comme c’est un petit projet MongoDB permettra, à l’avenir, d’avoir de la flexibilité
    
* Même si Strapi est compatible avec plusieurs SGDB, MongoDB est fortement recommandée


## Conclusion

![Stack finale](/assets/articles-eva/stack.png)

Ce nouveau site sera basé sur des outils récents et performants qui permettront une expérience utilisateur fluide et qui facilitera la maintenance du côté des rédacteurs de commit42.

Je vous laisse toutes les sources qui m’ont permis d’écrire cet article ci-dessous si vous avez envie d’approfondir un des sujets abordés.

## Sources

#### Hot Module Replacement:
[https://webpack.js.org/concepts/hot-module-replacement/](https://webpack.js.org/concepts/hot-module-replacement/)

#### Sites frameworks

-   [https://nextjs.org/](https://nextjs.org/)
    
-   [https://www.gatsbyjs.org/](https://www.gatsbyjs.org/)

    
    
#### Différences Next/Gatsby:

-   [https://prismic.io/blog/how-gatsby-and-nextjs-really-work](https://prismic.io/blog/how-gatsby-and-nextjs-really-work)
    
-   [https://coffeencoding.com/cra-vs-next-js-vs-gatsby/](https://coffeencoding.com/cra-vs-next-js-vs-gatsby/)
    
-   [http://blog.jakoblind.no/gatsby-vs-next/](http://blog.jakoblind.no/gatsby-vs-next/)

    
#### Pour en savoir plus sur la différences entre Semantic UI et Bootstrap, c’est par ici:

-   [https://www.altexsoft.com/blog/engineering/most-popular-responsive-css-frameworks-bootstrap-foundation-materialize-pure-and-more/](https://www.altexsoft.com/blog/engineering/most-popular-responsive-css-frameworks-bootstrap-foundation-materialize-pure-and-more/)
    
-   [https://www.upwork.com/hiring/development/twitter-bootstrap-vs-semantic-ui/](https://www.upwork.com/hiring/development/twitter-bootstrap-vs-semantic-ui/)
    

#### Articles sur pourquoi ne plus utiliser Bootstrap:

-   [http://www.punkchip.com/why-dont-you-use-bootstrap/](http://www.punkchip.com/why-dont-you-use-bootstrap/)
    
-   [https://www.sitepoint.com/community/t/help-me-convince-coworkers-why-bootstrap-4-is-not-the-answer/299458](https://www.sitepoint.com/community/t/help-me-convince-coworkers-why-bootstrap-4-is-not-the-answer/299458)
    
-   [https://www.myweekendproject.com/post/is-bootstrap-worth-using-in-2018](https://www.myweekendproject.com/post/is-bootstrap-worth-using-in-2018)
    
-   [https://blog.theodo.fr/2018/03/stop-using-bootstrap-layout-thanks-to-css-grid/](https://blog.theodo.fr/2018/03/stop-using-bootstrap-layout-thanks-to-css-grid/)


#### Alternatives à Bootstrap:

-   [https://www.ionos.fr/digitalguide/sites-internet/developpement-web/alternatives-a-bootstrap/](https://www.ionos.fr/digitalguide/sites-internet/developpement-web/alternatives-a-bootstrap/)
    
-   [https://www.slant.co/topics/3946/~best-bootstrap-alternatives](https://www.slant.co/topics/3946/~best-bootstrap-alternatives)
    

#### En savoir plus sur Semantic UI:

-   [https://www.slant.co/topics/150/viewpoints/18/~best-css-framework~semantic-ui](https://www.slant.co/topics/150/viewpoints/18/~best-css-framework~semantic-ui)
    
-   [https://react.semantic-ui.com/](https://react.semantic-ui.com/)

    
#### Qu’est ce qu’un CMS headless ? :
[https://www.lafabriquedunet.fr/blog/headless-cms/](https://www.lafabriquedunet.fr/blog/headless-cms/)
 

#### Pourquoi utiliser un headless CMS ? :
[https://blog.strapi.io/10-reasons-headless-cms/](https://blog.strapi.io/10-reasons-headless-cms/)


#### Liste de headless CMS à utiliser:
[https://www.cmswire.com/web-cms/13-headless-cmss-to-put-on-your-radar/](https://www.cmswire.com/web-cms/13-headless-cmss-to-put-on-your-radar/)
    

#### Tableau comparatifs de pleins de headless CMS:
[https://docs.google.com/spreadsheets/d/1L2KNUf-8um8_yevKRTmUUQKy4DcoKWZ-GZR0HavrtoQ/edit#gid=1319427496](https://docs.google.com/spreadsheets/d/1L2KNUf-8um8_yevKRTmUUQKy4DcoKWZ-GZR0HavrtoQ/edit#gid=1319427496)

#### Isomorphisme:
[https://marmelab.com/blog/2016/12/21/react-isomorphique-en-pratique.html](https://marmelab.com/blog/2016/12/21/react-isomorphique-en-pratique.html)


#### SPA et applications isomorphiques:

-   [https://www.ikomobi.com/5-solutions-web-adaptees-a-chacun-de-vos-besoins/](https://www.ikomobi.com/5-solutions-web-adaptees-a-chacun-de-vos-besoins/)
    
-   [http://www.opentuto.com/tag/avantages-et-inconvenients-spa/](http://www.opentuto.com/tag/avantages-et-inconvenients-spa/)
    

#### PWA avec React:

-   [https://nimbleways.com/home/2018/06/19/faire-une-pwa-avec-react-en-20-minutes/](https://nimbleways.com/home/2018/06/19/faire-une-pwa-avec-react-en-20-minutes/)

-   [https://medium.freecodecamp.org/how-to-build-a-pwa-with-create-react-app-and-custom-service-workers-376bd1fdc6d3](https://medium.freecodecamp.org/how-to-build-a-pwa-with-create-react-app-and-custom-service-workers-376bd1fdc6d3)
-  [https://blog.pagesd.info/2017/08/18/transformer-site-web-pwa/](https://blog.pagesd.info/2017/08/18/transformer-site-web-pwa/)


#### Service worker:

-   [https://developers.google.com/web/fundamentals/primers/service-workers/](https://developers.google.com/web/fundamentals/primers/service-workers/)
    
-   [https://www.julienpradet.fr/fiches-techniques/pwa-declarer-un-service-worker-et-gerer-son-cycle-de-vie/](https://www.julienpradet.fr/fiches-techniques/pwa-declarer-un-service-worker-et-gerer-son-cycle-de-vie/)
    
