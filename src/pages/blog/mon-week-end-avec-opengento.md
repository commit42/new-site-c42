---
title: Mon week end avec Opengento.
date: 2019-11-19T15:00:32.419Z
author: Maher
thumbnail: /assets/bandeau-opengento-juin-2015.jpg
tags:
  - opengento
  - magento
  - Sylius
  - Gatsby
---
# OpenGento c’est quoi ?

C’est une association de développeurs qui travaillent ou utilisent des outils e-commerce qui se sont dit que ce serait cool de se retrouver pour en discuter / faire des POCs. 

J’ai connu [OpenGento](https://opengento.fr/) par le biais de commit42 qui fait partie des membres actifs avec nos collègues d’Occitech / Front Commerce. Donc quand je me suis vu proposé un weekend hackathon / fête autour de Magento ou de l'e-commerce, à la base j'étais un peu sceptique mais finalement c'était SUPER !

Mais je vais donc vous expliquer ce qu’on a fait ce weekend… et étonnamment cela ne contient pas beaucoup de Magento.

## Vendredi : Départ pour Lille !

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Direction le weekend <a href="https://twitter.com/opengento?ref_src=twsrc%5Etfw">@opengento</a> ! :) <a href="https://t.co/PTjlfYwcuI">pic.twitter.com/PTjlfYwcuI</a></p>&mdash; commit42 (@commit42) <a href="https://twitter.com/commit42/status/1195335106526896128?ref_src=twsrc%5Etfw">November 15, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Cette année il se déroulait dans le grand Nord (Le lieu change régulièrement) c’est donc Adexos qui nous ont accueilli sur place… ainsi que la pluie, évidemment.

<blockquote class="twitter-tweet"><p lang="fr" dir="ltr">Super temps merci Lille ! On continue l&#39;aventure :) <a href="https://t.co/6YhjYLPegY">pic.twitter.com/6YhjYLPegY</a></p>&mdash; commit42 (@commit42) <a href="https://twitter.com/commit42/status/1195365487682691073?ref_src=twsrc%5Etfw">November 15, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Après être venus nous récupérer à l’aéroport nous sommes allés à l'inauguration de leurs nouveaux locaux. Une soirée super sympa avec du champagne, de la bière et surtout un escape game dans une partie des locaux.
Ce fut l’occasion d’un premier échange avec les membres d’Opengento et une soirée qui a bien contribué à nous rapprocher !

## Samedi les choses sérieuses commencent !

Au réveil nous attaquons le “hackathon”.

Les sujets ont été trouvées avant mon réveil (un peu tardif, grosse soirée.) mais lors de la sélection, chaque idée était notée et toutes les personnes présentes se groupaient autour d’une poignée d’entre elles.

![liste des sujets hackathon](/assets/img_20191117_144043-1.jpg "liste des sujets hackathon")

Parmi les idées il y avait donc : 

* Un POC Sylius + Gatsby : Gatsby est un générateur de site statique basé sur React et GraphQL, et Sylius est une plaforme e-comerce qui semble être l’avenir de Magento. Ce POC a été très justement nommé [Gatsbylius](https://github.com/opengento/gatsbylius) 
* Des tests sur le fonctionnement des Ubikeys avec l’administration Magento 2
* De la sécurité web
* Du logstash et du magento : [Logger](https://github.com/opengento/logger)
* Un module Sylius pour implémenter Elasticsearch : le [SyliusSearchPlugin](https://github.com/monsieurbiz/SyliusSearchPlugin)
* Une découverte de Sylius et Monofony

Le POC sur un Gatsby + Sylius m’a personnellement séduit et je vous le présenterai sous peu.

En parallèle, dans la journée des activités se sont organisées entre la luge d’été, le babyfoot et le ping pong. 
Bien entendu, une tireuse à bière et autres boissons étais disponibles pour se... ressourcer.

Et quoi de mieux pour bien finir cette journée qu’une méga raclette pour le dîner ! 

<blockquote class="twitter-tweet"><p lang="fr" dir="ltr">La nuit tombe sur Béthune, les esprits s&#39;éveillent...<br>La nuit va être longue et bien remplie !<br>Au fait... ce soir on mange léger : <a href="https://twitter.com/hashtag/teamRaclette?src=hash&amp;ref_src=twsrc%5Etfw">#teamRaclette</a> <a href="https://t.co/P1VrNrKIl8">pic.twitter.com/P1VrNrKIl8</a></p>&mdash; OpenGento (@opengento) <a href="https://twitter.com/opengento/status/1195738109578743810?ref_src=twsrc%5Etfw">November 16, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Dimanche c’est le jour du retour.

![Présentation des POCs](/assets/presentation_gatsby-1.jpg "Présentation des POCs")

Après une présentation de chacun des projets durant la matinée, le groupe s’est graduellement réduit au fur et à mesure des départs.
Chacun s’en est retourné chez lui avec de la fatigue, certes, mais surtout des bons souvenirs, de nouvelles connaissances et des nouvelles compétences !

Durant le weekend j’ai rencontré beaucoup de personnes et abordé énormément de sujets tels que la sécurité informatique, le scaling des infras en prod ou les différentes choses sur sylius et magento. 

Ce fut l’occasion d’avoir des avis et des visions différentes sur des sujets plus variées que d'habitude.

En tout cas je suis de retour au boulot avec plein de bonnes idées (et un peu de fatigue) !

Si vous voulez en savoir encore plus, voici un article de nos amis de chez Monsieur Biz : <https://monsieurbiz.com/blog/weekend-opengento-2019>

Encore merci à tous pour ce weekend, vivement le prochain !

Maher

PS : Bien entendu, comme promis dans cet article, une présentation détaillée de ce POC Gatsby + Silius arrivera bientôt ! ;)
