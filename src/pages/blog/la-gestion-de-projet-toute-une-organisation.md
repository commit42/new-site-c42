---
title: 'La gestion de projet, toute une organisation'
date: 2019-02-28T00:00:00.000Z
author: Eva
thumbnail: /assets/kanban.png
tags:
  - agilité
  - kanban
  - gestion de projet
---

Hello, c'est encore Eva ! Si vous avez lu mon article précédent, vous savez que j’ai du faire le choix d’une stack pour la refonte du site de commit42 afin de répondre à certains besoins. Pour les autres, et bien, vous êtes à présent au courant 😁 (mais vous pouvez quand même aller lire [l’article](https://www.commit42.fr/blog/un-nouveau-site-pour-une-nouvelle-annee/)).

Bonne nouvelle: mes choix ont été validés par l’équipe, je peux maintenant passer à la planification du projet.

## Quelle méthode adopter  ?

Pour choisir la façon dont je voulais gérer mon projet j’ai commencé par me renseigner sur les différentes techniques de gestion de projet, bien que j’ai été habituée à l’agilité avec la méthode Scrum et la méthode Kanban.

J’ai donc relevé les possibilités*  suivantes:

* le cycle en V

* la liste de tâches (gestion de tickets)

* la méthode kanban

*(cette liste est non exhaustive évidemment)

#### Cycle en V

Le cycle en V est une méthode de gestion de projet qui vise à limiter les retours en arrière lors de la conception d’un produit en enchaînant les étapes les unes après les autres. Elle est moins favorisée de nos jours car elle ne correspond plus aux attentes actuelles de time to market (temps nécéssaire à la conception d'un produit jusqu'à sa mise en vente) accéléré car aucune avancée n’est exploitable avant la toute fin du projet.

Cette méthode qui vient du BTP pourrait être vulgarisée de la façon suivante : on planifie la maison puis on la construit petit à petit dans un ordre logique (on ne pose pas le toit avant d’avoir les murs). Pour chaque tâche terminée on la fait valider avant de passer à la suivante jusqu’à ce que la maison soit terminée.

Ci-dessous un schéma de l’ensemble de la méthode: 

![Schéma cycle en V](/assets/articles-eva/article-2/schema-cycle-en-v.png)

#### Méthodes agiles

#### *“Qu’est-ce que ça veut dire “méthode agiles” Eva ?”*

Ce sont de approches de gestion de projet qui se veulent plus souples que les méthodes dites “classiques” (comme le cycle en V par exemple). Le principe est de fixer des objectifs atteignables à court terme et de faire un point régulièrement pour éventuellement réorienter le projet selon les besoins. Chaque objectif doit être atteignable dans un laps de temps défini appelé itération ou sprint. Une fois une itération terminée une autre commence. Souvent une itération dure une semaine mais elle peut aller jusqu’à quatre semaines.

Lorsqu’un projet débute on commence par mettre à disposition le plus rapidement possible une version minimale (MVP pour Minimum Viable Product). On viendra l’améliorer itération par itération en y ajoutant les fonctionnalités prévues.

Pour mon MVP je vais conserver la page d’accueil déjà en place sur le site de commit42 et la partie blog (qui est une liste d’article) en y implémentant le headless CMS afin de pouvoir poster des articles plus facilement.

C’est en cela que le TTM est réduit en agile: on se limite au strict minimum pour une première mise en ligne rapide.

Chaque itération va servir à améliorer ce MVP étape par étape et de manière “livrable” ; c’est à dire qu’à chaque fin de sprint la fonctionnalité qui a été développée est mise à disposition des utilisateurs finaux.

Une fois le MVP terminé, on peut commencer à mettre en place une nouvelle page d’accueil par exemple.


#### *"Et du coup quels sont les avantages de l'agilité ?"*

L’agilité prend en compte que l’humain n’est pas une machine et accepte que l’on puisse se tromper: définir les besoins de manière incomplète, mal interpréter la demande des utilisateurs finaux ou découvrir d’autres solutions plus pertinentes en cours de projet.

Cela permet aussi de pouvoir s’arrêter à tout moment (de manière temporaire ou définitive) tout en s’assurant d’avoir un “produit” exploitable, même si incomplet.

Les livraisons régulières et rapides permettent aussi d’avoir des retours utilisateurs directs afin d’améliorer régulièrement  le projet selon les  attentes exprimées par les clients. Vous pouvez retrouver le [manifeste agile juste ici](https://manifesteagile.fr/) pour en savoir plus.

La liste de tâches et le système Kanban sont tous les deux issus des méthodes agiles et donc rythmés par des itérations jusqu’à la fin du projet. 

Au début du projet on identifie les besoins qui sont ensuite découpés en petites tâches. On les priorise et réparti sur les différentes itérations à venir.

Dans ces deux méthodes on commence par les tickets les plus importants et si il nous reste du temps, on traite les tickets moins prioritaires. A la fin du sprint, s’ils n’ont pas été traités ils peuvent être déplacés à l’itération suivante ou abandonnés.
Ce mode de fonctionnement permet de concentrer l’énergie sur les points réellement importants et de ne pas perdre de temps sur des fonctionnalités secondaires.

#### La liste de tâches


La liste de tâche est gérée par un système de tickets dans lequel un ticket représente une tâche. Ils sont triés par priorité décroissante et par itération. Chaque ticket est attribué à une personne pour qu’il apparaisse dans sa liste de tâche à faire.

![Schéma d'une liste de tâches](/assets/articles-eva/article-2/schema-liste-taches.png)

#### Le Kanban

Le système Kanban, quant à lui, est beaucoup plus visuel. Kanban signifie “étiquette” en japonais ; le principe est donc d’avoir un tâche par étiquette qui est ensuite disposée sur un tableau selon son statut. Souvent on trouve les colonnes “A faire”, “En cours”, “À valider” et “Validé mais chaque équipe peut avoir ses propres colonnes selon l’organisation choisie. A chaque fois que la tâche change de statut il faut actualiser le Kanban. Ce système est très pratique pour avoir un vision d’ensemble du projet  et aide à finir les tâches avant d’en commencer de nouvelles.

![Schéma d'un kanban](/assets/articles-eva/article-2/kanban.png)

Vous trouverez ci-dessous un tableau comparatif de ces 3 méthodes expliquées plus haut:

![Tableau comparatif des 3 méthodes](/assets/articles-eva/article-2/tab-methodes-gestion-projet.png)

N.B: Cela dit, la liste de tâche et le kanban peuvent être combinés dans certains outils avancés comme [Taïga](https://taiga.io/). 
Par exemple le kanban sera utilisé pour les user-stories en décrivant les fonctions que souhaiterait voir l’utilisateur final (en tant qu’utilisateur, je souhaite me connecter à mon compte afin de passer une commande).
La liste de tâches sera, elle, utilisée pour découper les aspects techniques de chaque user story en tickets et mettre en place des bugs reports.

## Et du coup, t’as choisi quoi?

Bien qu’à commit42 les développeurs et le chef de projet majoritairement en liste de tâches, je me suis plutôt tournée vers le Kanban.

Comme je vais travailler toute seule sur ce projet j’ai été libre de choisir l’outil de travail qui me convenait le plus. 
J’ai décidé d’utiliser Trello au lieu d’un kanban physique car c’est plus facile à gérer s’il y a des modifications à faire sur une tâche ou une colonne. De plus le chef de projet pourra suivre mon avancement grâce à l’historique que propose Trello et me laisser des commentaires en cas de besoin.

![Schéma du process de gestion de projet](/assets/articles-eva/article-2/schema-process.png)


Le processus que je vais présenter est utilisé par commit42 avec un de leur client. Ils s’adaptent souvent à leurs méthodes afin que ces derniers se sentent à l’aise avec la gestion de projet.

L’avancement du projet se déroule de gauche à droite, le but étant de finir avec tous les tickets dans la colonne la plus à droite, “Validé”.

A gauche, on liste toutes les tâches non attribuées à une itération/un sprint dans la colonne Backlog, avec un tri par priorité et des badges de couleurs selon leur nature (front, back…et articles de ce blog !)

On prépare 3 itérations en avance avec des tickets du Backlog. S0 est le sprint en cours, S -1 et S -2 les prochains sprints.

Lorsque l’on commence une tâche de l’itération 0 (S0) elle va dans la colonne “En cours” et une fois finie dans “A valider”. 
Quand la tâche est validée par le chef de projet et/ou client la tâche est finie et peut aller dans la colonne “Validé”. Pour l’instant, nous ne déployons pas encore, mais une colonne “Déployé” pourra être ajoutée ensuite.
Si la tâche n’est pas validée, la raison est notée dans le ticket et elle va dans la colonne “Retours”. Les retours sont prioritaires sur les tâches de l’itération en cours (cycle orange sur le schéma) comme on peut le voir dans l’ordre des colonnes.

Lorsqu’une tâche est bloquée (souvent par un élément externe) on peut la mettre dans la colonne correspondante pour y revenir plus tard lorsque la situation sera plus propice au traitement de ce ticket (cycle rouge).

Concernant les tâches, elles doivent doit être estimées individuellement, c’est à dire prévoir le temps qu’elle vont prendre pour préparer au mieux les itérations. Cela permet de ne pas surcharger ou sous-charger une itération en travail. On part du principe qu’une semaine avec un développeur équivaut à 5 jours/homme, il faut donc que l’estimation s’approche de cette durée.


## Conclusion

Cette réflexion sur les différentes façons de gérer un projet m’a vraiment permis de voir qu’il n’y a pas une unique bonne façon de gérer un projet mais qu’il faut savoir trouver la solution qui correspond le plus au projet, à la relation que l’on veut avoir avec ses clients. La gestion de projet est aussi une question de goût, il vaut mieux choisir un outil qui nous plait et avec lequel on est à l’aise puisqu’on va s’en servir presque tous les jours jusqu’à la fin du projet !

Pour ma part j’ai choisi d’utiliser le système de Kanban avec Trello car je suis déjà à l’aise avec l’utilisation des Kanbans, je trouve ça simple et ça me permet d’avoir une vision globale sur mon projet. Trello quant à lui est un outil gratuit qui me permet de lier d’autres outils de travail grâce à des extensions et qui est aussi très simple d’utilisation et customisable. 


### Sources

#### Kanban vs scrum:
[https://www.developpez.com/actu/203845/Agile-entre-Scrum-et-Kanban-laquelle-des-deux-methodologies-est-elle-la-meilleure-Le-point-dans-une-etude-comparative/](https://www.developpez.com/actu/203845/Agile-entre-Scrum-et-Kanban-laquelle-des-deux-methodologies-est-elle-la-meilleure-Le-point-dans-une-etude-comparative/)

#### Cycle en v:
- [https://meritis.fr/methodo/agile-vs-cycle-v-combat-pilotage-projet/](https://meritis.fr/methodo/agile-vs-cycle-v-combat-pilotage-projet/)
- [http://www.geek-directeur-technique.com/2009/02/04/le-cycle-en-v](http://www.geek-directeur-technique.com/2009/02/04/le-cycle-en-v)
- [https://chefdequipe.fr/methodes/le-cycle-en-v/](https://chefdequipe.fr/methodes/le-cycle-en-v/)

#### Cycle en V vs Scrum:
[https://islean-consulting.fr/fr/cycle-en-v-scrum-que-choisir/](https://islean-consulting.fr/fr/cycle-en-v-scrum-que-choisir/)

#### Qu’est ce qu'un Kanban ?
[https://www.smoall.com/tips-tricks/methode-de-gestion-avantages-inconvenients-kanban/](https://www.smoall.com/tips-tricks/methode-de-gestion-avantages-inconvenients-kanban/)

#### Quelques autres ressources sur les méthodes agiles:
- [https://agiliste.fr/introduction-methodes-agiles/](https://agiliste.fr/introduction-methodes-agiles/)
- [http://referentiel.institut-agile.fr/iteration.html](http://referentiel.institut-agile.fr/iteration.html)
- [https://manifesteagile.fr/](https://manifesteagile.fr/)

