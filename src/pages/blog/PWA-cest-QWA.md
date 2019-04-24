---
title: "PWA, c’est QWA ?"
date: 2019-02-05T09:02:00.000Z
author: Thomas
thumbnail: /assets/Responsive-minimal-PWA.png
tags:
  - pwa
  - react
  - magento
  - toulouse
---

![PWA](/assets/Responsive-minimal-PWA.png)

Voilà comment les articles sur les PWA débutent généralement:

> _Cette technologie, héritée de la tendance “mobile first” est l’avenir du développement de solutions._ > _Le PWA combine les avantages d’un développement web, cross-compatible, à une expérience proche d’une application native._

C’est classe mais pas forcément compréhensible.

Nous allons tenter ici de vous expliquer simplement les grands principes, ce qu’il est possible de faire avec des PWA ainsi que vous orienter vers des sites où vous pourrez tester ces fonctionnalités.

Cet article a pour objectif de rester accessible, quitte à éluder quelques détails afin de pouvoir avoir des arguments utilisables avec un client.

Pour plus de technicité, nous ferons un article dédié un jour, peut-être.

Mais avant tout, commençons par la base :

## PWA signifie “Progressive Web App”

Une Web App, tout le monde s’imagine bien ce que cela représente : c’est une application qui est gérée directement au sein du navigateur. Spotify, Slack, WhatsApp, Twitter, Facebook… Tous ont une “version web” de leur service qui ressemble souvent à leur application mobile.

Une Web App, donc.
Jusque là, nous ne devrions avoir perdu personne.

“Progressive” signifie que la Web App s’adapte à l’appareil la faisant tourner. Pour un navigateur qui ne supporte aucune des technologies avancées, le service n'offre rien de plus qu’un site classique. Pour les autres en revanche, il aura un comportement bien plus riche.

La Web App pourra alors intégrer notamment des fonctions liées au périphérique : géolocalisation, caméras, stockage...

## Une coquille pour le contenu

Vous avez sans doute entendu le terme de “microservices” ou de “front” séparé du “back”.
La technologie PWA s’inscrit dans cette lignée.

Dans un site “classique”, l’ensemble du code de la page du site à afficher est envoyé à chaque clic.

Sont arrivées ensuite des technologies permettant de ne mettre à jour qu’une partie de la page.

De nos jours la plupart des sites avancés ont une interface qui reste en cache dans le navigateur, n’est envoyé donc qu’une fois, et dont le rôle est de faire le lien entre l’utilisateur et le serveur contenant les données.

Dans une PWA, à la manière d’une application, il y a une séparation entre le contenant et le contenu.

Elle met à jour son interface “côté client”, au sein du navigateur de l’internaute, et envoie et reçoit des requêtes avec le service.

![PWA-app-sheel](/assets/PWAappshell.png)

[Crédit image](https://developers.google.com/web/fundamentals/architecture/app-shell)

Dans une PWA, l’interface est donc chargée une seule fois, est conservée d’un lancement à l’autre et s’anime au gré des informations reçues par le serveur.

## Les avantages concrets d’une PWA

En soi, une web-app PWA est :

- Compatible avec la majorité des navigateurs
- Responsive, donc compatible mobile, tablette, PC
- Utilisable en mode hors-ligne ou faible connexion (cf point précédent)
- Compatible avec les notifications push
- Ajoutable sur l’écran d’accueil
- Digne d’une app native pour l’utilisateur

Par rapport à une application native :

- Il n’est pas nécessaire de créer des version iOS, Android, Mac et PC
- Aucune attente de modération lors de mises à jour… car aucune modération.
- Vous n’êtes pas noyés au sein d’un vaste catalogue d’autres applications
- Un simple lien et votre audience a accès au contenu. Pas d’installation requise. Pas de campagne de promotion à faire, un bon référencement suffit.

## Des exemples de PWA à tester

#### Wiki-offline

Un lecteur de page wikipedia qui permet de stocker des articles idéal pour tester la fonction hors-ligne

https://wiki-offline.jakearchibald.com/

#### Umbrella Weather App

Une application météo pour tester la géolocalisation

https://roneetkumar.github.io/umbrella/index.html

#### Voice Memo

Comme son nom l’indique, une application de mémos vocaux qui permet de tester les fonctions audio

https://voice-memos.appspot.com/

#### QR code scan

Un scanner de QR code (comme son nom l’indique) pour tester l’utilisation de l’appareil photo

https://qrcodescan.in/

#### Splittypie

Une application de partage de frais entre amis qui vous permettra de tester l’expérience utlisateur

https://splittypie.com/

## En conclusion

A moins que vous ne souhaitiez vendre votre application, le choix d’une PWA est la solution multi plateforme la plus rationnelle du moment pour fournir un service dans le creux de la main de vos utilisateurs potentiels.
