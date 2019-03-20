---
title: 'Une solution domotique complète avec IFTTT, SmartLife et Logitech Harmony'
date: 2019-03-20T14:06:21.854Z
author: Thomas
thumbnail: /assets/objets-connectes-750x400.jpg
tags:
  - ifttt
  - domotique
  - MVP
  - harmony
  - smartlife
---
Bonjour à toutes, à tous ainsi qu’aux autres, aujourd’hui c'est Thomas qui vous écrit et je vais vous présenter la solution domotique mise en place par mes soins dans les locaux du groupe Occitech afin d’améliorer notre confort (et aussi "_parce que c'est possible_").

Déjà : **la domotique, qu’est-ce que c’est ?** 

C’est un mot-valise qui désigne tout ce qui permet de centraliser les solutions automatiques son domicile en contrôlant, chauffage, volets, portes… et allumer/éteindre la tireuse à bière et l’arbre de Noël (oui, en Mars !) dans le cas de certains.

## Cahier des charges

Le cahier des charges initial était énoncé simplement : 

> ## **“_On aimerait ne pas avoir froid le matin en arrivant_**
>
> **_cdt._**”

Une des solutions est de pouvoir allumer les clims réversibles et les chauffages de nos locaux en partant de chez soi par exemple, donc depuis l’extérieur de notre réseau.

Les clims sont contrôlées par télécommande infrarouge et sont au nombre de 3 : 

* 1 dans l'open-space de commit42, 
* 1 dans l'open-space d'occitech 
* 1 en salle de réunion

L’alimentation électrique n’est pas accessible (intégrée dans le mur).

Les chauffages, eux sont des radiateurs mobiles, branchés chacun sur une prise qui leur est dédiée.

Si possible, ajouter un comportement automatique, avec un démarrage à 7h30 et une extinction à 18h00 pour les chauffages et les clims des open-spaces afin de ne pas avoir à y penser le matin et éviter aussi les oublis de fin de journée.

De plus, il faudrait pouvoir donner accès à l’ensemble des commandes aux employés pour ajuster (couper le chauffage s’il fait trop chaud par exemple).

Enfin, un cas particulier : il n’est pas nécessaire de chauffer tous les jours la salle de réunion mais on doit pouvoir obtenir une température correcte lors des réunions sans avoir à y aller pour y démarrer la clim.

## Les composants connectés

### Prises connectées

<img src="/assets/pasted-image-0.png" width="200" style="float:left;margin:15px;" >

Pour les chauffages, nous allons simplement mettre et couper le courant.

La majorité des centaines de prises connectées d’entrée de gamme sont suffisantes et se valent à peut près toutes. 

Il convient de vérifier tout de même qu’elle peuvent supporter la puissance demandée par l’appareil pour éviter tout risque.

Notre choix s’est arrêté sur [ce pack de 3 prises à moins de 30€](https://www.amazon.fr/gp/product/B07M96JCQ6/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1), pour une raison de... promotion en cours.

Elles utilisent, pour la configuration et la gestion, l’application SmartLife (comme beaucoup) qui est compatible Alexa, Google Home, IFTTT (mais pas Homekit).

### Émetteur infrarouge

<img src="/assets/harmony.png" width="400" style="float:right;margin:15px;" >

Pour contrôler les clims, nous n’avons pas le choix: il va falloir simuler leurs télécommandes infrarouges.

Pour cela il existe quelques de boîtiers émetteurs, souvent sous la forme d’un galet, capable d’envoyer un signal infrarouge à 360° pour télécommander les appareils à sa portée et utilisant ce mode de commande.

Ils sont configurés via une application sur smartphone et sont souvent reliés à un service en ligne qui fait la liaison entre l’appareil et le téléphone.

Nous avions le choix entre des **Logitech Harmony Hub** ou des émetteurs infrarouges de marques inconnues et aux review suspectes. 

On a donc choisi la solution Logitech, un peu chère, le prix varie littéralement d'un jour à l'autre [sur Amazon](https://www.amazon.fr/gp/product/B014GXQ9YW/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1) mais on peut les trouver régulièrement à 59€ l'unité mais il peut monter jusqu'à 97€. 

Le service en ligne Harmony est aussi censé être compatible Alexa, IFTTT, Google Home… mais nous en reparlerons.

La configuration des hubs est censée être simple, c’est peut-être le cas pour les appareils déjà présents dans la base de donnée Harmony mais ce n’était le cas d’aucune de nos climatisations.

Pour cela il a fallu rentrer un nouveau modèle en sélectionnant DISPOSITIF MULTIMEDIA (oui, oui) puis rentrer le fabricant et le modèle, valider deux fois pour dire qu’on est **bien** certains d’avoir le bon numéro de modèle puis CONTRÔLE DOMOTIQUE puis SYSTÈME DE CLIMATISATION et passer au mode apprentissage.

Cette procédure d’apprentissage est... laborieuse. Elle consiste à pointer la télécommande de la climatisation vers le Harmony Hub pour qu’il enregistre la commande.

Il faut parfois tenter plusieurs fois avant que le hub ne détecte le signal envoyé par la télécommande lors de l’apprentissage, et parfois l’envoi de signal ne fait pas l’action escomptée sur la climatisation.

Ajoutons le fait que les “tests” lors de la procédure d’apprentissage ne marchent pas, il faut donc aller au bout de la configuration pour vérifier que tout s’est bien passé.

Bref, c’est une lutte, en plus c’est lent, ça plante… mais on y est arrivés en prenant de 30 minutes à 1h à pester contre Logitech.

Le principe derrière Harmony est de fonctionner par “Activité”. 

**Qu’est-ce qu’une activité ?** 

Le bon exemple serait une activité type “Regarder un film” : Lancer cette activité déclenche une série de commande qui allume la télévision, met la clim en mode silencieux, éteint la lumière du plafond pour passer aux lampes de chevets de part et d’autre de la télévision. Lorsque l’activité est stoppée, le lumières s’inversent, la télé s’éteint, la climatisation revient en mode de ventilation normal.

Notre usage est BEAUCOUP plus simple : nous lançons une “activité” dont la seule action est d’allumer la climatisation. Lors de la fin de l’activité, le signal d’extinction est envoyé.

Bref, ça fonctionne pour tous les modèles dont nous disposons, malgré quelques gouttes de sueurs et 3 boites de Lexomil.

## Centre de contrôle

### Première piste : Google Home

<img src="/assets/photo5805236634210382998.jpg" width="200" style="float:left;margin:15px;" >

Ce service permet de gérer les appareils via l’interface ou de les renommer pour pouvoir les utiliser avec l’Assistant Google. 

On peut aussi programmer des allumages automatiques via des “routines”.

L’avantage de Google Home, outre son côté tout-en-un, est que l’on peut partager les droits d’accès à une “maison” avec des comptes Gmail. 

Attention : les comptes Google Suite ne sont pas compatibles avec cette fonction de partage.

Le principe est simple : on crée un compte sur l’app de l’appareil connecté (exemple : SmartLife, Philips Hue, Logitech Harmony…), on le configure et ensuite, on connecte le compte à Google Home et tous les appareils configurés seront automatiquements ajoutés.

Encore une fois, Harmony est de retour pour nous a jouer un mauvais tour : les commandes vocales dédiées à l’Assistant Google n’étant pas disponibles en français, l’association de notre compte Harmony avec notre compte Google a été refusé (côté Logitech), donc il n’est pas possible non plus de les contrôler via l’interface Google Home, ce qui nous aurait pourtant suffit. 

Tant pis, il va falloir concevoir notre propre gestionnaire.

### IFTTT : la solution idéale pour qui sait bidouiller

IFTTT est un service en ligne permettant d’automatiser des tâches selon des conditions.

Le principe de IFTTT se comprend quand on développe son acronyme: If This Then That.

Si ceci, alors cela.

Tous nos besoins peuvent être résumés en :

* _Si il est 7h30 alors allume le chauffage du patron_
* _Si je le demande, éteint la climatisation_
* _etc..._

Cette logique (un bloc reliant un déclencheur à un effet) est appelée un “applet”.

Les déclencheurs peuvent varier d’une commande Google Assistant à un mail en passant par une station météo connectée ou un widget sur l’écran de votre smartphone. C’est très complet et si on ne sait pas exactement ce que l’on souhaite, on peut se perdre des heures à rêver à tout le potentiel d’automatisation offert par ce service, et pas que pour les objets connectés.

Exemple théorique : lire une musique sur spotify lorsque votre pizza dominos est en cours de livraison.

En résumé, cela peut être schématisé comme suit :

![ifttt domino's](/assets/ifttdominos.jpg "ifttt domino's")

A la manière de Google Home, la première chose à faire est de donner l’accès à IFTTT à vos portails domotiques (ici SmartLife et Harmony).

Nous allons utiliser 3 types de déclencheurs :

* L’heure (pour programmer les allumages et extinctions)
* Google Agenda partagé pour réserver la salle de réunion (pour démarrer le chauffage 15 min avant une réunion prévue)
* Une commande manuelle via la consultation d’une adresse donnée 

<img src="/assets/webhooks.png" width="30px" style="float:right;margin:5px;" >
Grâce à la dernière fonction, appelée WebHook, avec une page web et des scripts simples, nous pouvons faire une interface que nous hébergerons à une adresse donnée à chacun et protégée par un mot de passe.

Dans le cas d’un déclencheur c’est un ping vers une adresse qui est sous la forme : 

`https://maker.ifttt.com/trigger/{event}/with/key/xxxxxxxxxxxxxx`

Le petit script rapide :

`<script>
function startchauffage() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://maker.ifttt.com/trigger/startchauffage/with/key/xxxxxxxxxxx", true);
  xhttp.send();
  alert("Chauffage démarré");
}
</script>`

Et il suffit alors de faire un lien type :

`<a href="#" onclick="startchauffage()" >Démarrer le chauffage</a>`

(on verra plus loin comment faire lorsqu’il y a plusieurs actions à réaliser)

## Mise en place

### Programmation horaire

<img src="/assets/smartlifeprog.png" width="100px" style="float:right;margin:5px;" >

Parfois IFTTT est un peu fastidieux car il est impossible de créer un groupe d’actions pour un déclencheur donné. 

Le parfait exemple c’est l’allumage du matin : il faut créer un applet pour chacun des appareils. 

Pour les prises connectées, nous avons donc décidé de nous passer de IFTTT et d’utiliser directement la fonction de programmation de SmartLife qui permet de gérer cette fonction pour l’ensemble des prises.

Pour les climatiseurs, au vu de l’ergonomie et des lenteurs de l’application Harmony je suis passé par IFTTT (ça se sent que j’en peux plus de cette appli ou pas?).

### Programmation conditionnelle

La seule programmation que nous exploitons actuellement est la suivante :

Si un quelconque évènement est prévu dans le Google Agenda “salle de réu”, démarrer la climatisation 15 minutes avant cet évènement.

On aurait pu l’arrêter 15 min après mais les réunions ne durent pas forcément la durée indiquée sur l’agenda. Le choix a été fait de prévoir une extinction manuelle.

### Centre de commande

C’est le mode le plus intéressant au final, avec l’utilisation des WebHooks d’IFTTT on peut créer un véritable centre de commande de notre domotique.

Pour cette première version du centre de commande (en mode prototypage rapide), nous avons créé une carte stylisée des locaux et avons créé des zones cliquables map grâce à un outil en ligne (<https://www.image-map.net/>)

![map occitech](/assets/dessin-sans-titre-25-.png)

Voici donc le fonctionnement de ce mode manuel avec IFTTT lors de la commande d’un climatiseur :

![](/assets/ifttfinal.jpg)

Vous pouvez tester (sans agir sur nos locaux) ici : <http://domotique.ethersys.fr/public.html>

Vous pouvez d’ailleurs en réutiliser le code source et le script permettant plusieurs actions pour vos projets domotique !

## Une suite du projet ?

L’une des limites actuelles, qui ne sera pas facilement contournable, est l'absence totale de retour sur l’état (allumé ou éteint) de nos climatisations. Le signal est envoyé, point. 

Seules les prises connectées transmettent leur état à SmartLife et cela ouvre une possibilité sympathique :

Comme cet état peut être transmis à IFTTT via Webhooks, on pourrait tout à fait noter l’état sur le site via, par exemple, un appel web lorsqu’il y a changement d’état.

Ce serait une suite intéressante mais une véritable application web serait alors nécessaire pour stocker les états et serait notifiée par WebHooks lors des changements.

Cela pourrait donner ceci :

![](/assets/ifttfuture.jpg)

En conclusion, en l’état actuel, la solution répond aux besoins et c’est une excellente démonstration de notre plus grande passion : connecter des services entre eux pour en créer un nouveau à la fois plus complet mais aussi plus adapté au besoin !
