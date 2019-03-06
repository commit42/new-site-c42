---
path: /blog/securiser-wordpress
title: "Sécuriser son site Wordpress en 2018"
date: 2018-08-03T11:40:00+01:00
draft: false
---


Un de nos récents projets tourne sous Wordpress, un outil que nous n'utilisons pas si souvent, nous en avons donc profité pour faire quelques recherches et nous allons tenter ici de résumer comment sécuriser au mieux un site sous Wordpress en 2018.

Il ne faut jamais oublier que la sécurité totale n'existe pas, néanmoins il est possible de se protéger suffisamment pour éviter la plupart des problèmes. Plus les attaquants potentiels seront mis en difficulté, moins ils insisteront pour vous attaquer.

Plusieurs extensions ayant une tâche bien précise sont présentées, mais si vous voulez aller vite, l'extension [All In One WP security](https://fr.wordpress.org/plugins/all-in-one-wp-security-and-firewall/) peut presque tout gérer toute seule.

Il y a de nombreuses choses à voir, alors comme le dit la chanson d'Electro Deluxe: [Let's go to work!](https://www.youtube.com/watch?v=DE09dS8QLJI)

## Backup

La première chose a considérer en matière de sécurité devrait être de mettre en place une solution de backup. Une sauvegarde régulière permet de restaurer le site à l'identique en un temps record en cas de piratage du site ou d'un problème technique. Dans certaines situations il est difficile voire impossible de récupérer les données, des heures ou même des années de travail pourraient ainsi être définitivement perdues. Il est malheureusement assez rare de n'avoir jamais perdu des données essentielles sur son propre ordinateur à cause d'un disque ou un système défectueux. C'est la même chose quand il s'agit de votre site, alors inutile de prendre des risques alors qu'il suffit de faire des sauvegardes régulières!

Il existe de nombreuses solutions, gratuites et payantes, ayant toutes certains avantages/inconvénients. Il faut donc bien définir ses besoins et son budget afin de choisir la solution la plus adaptée.

### Updraft Plus

Nous avons choisi [Updraft Plus](https://fr.wordpress.org/plugins/updraftplus/), une extension dont la version gratuite est très appréciée par la communauté : elle est notée 4.8 / 5 et on compte plus d'un million d'installations actives au moment de la rédaction de cette article. Pas de doute, on va pouvoir lui faire confiance.

Updraft Plus est simple d'utlisation et présente notamment l'avantage de pouvoir définir des sauvegardes planifiées enregistrées envoyées vers Dropbox, Google Drive, Amazon S3 (ou compatible), UpdraftVault, Cloud , DreamObjects, FTP, Openstack Swift et e-mail.

Contrairement à d'autres solutions qui ne sauvegardent que la base de données, cette extension permet de sauvegarder l'ensemble du site: base de données, extensions, thèmes, etc.

![Updraft - Accueil](/assets/securiser-wordpress/updraft_home.png)

![Updraft - Sauvegardes](/assets/securiser-wordpress/updraft_saves.png)

![Updraft - Stockage distant](/assets/securiser-wordpress/updraft_storage.png)

Nous n’expliquerons pas en détail l'utilisation de cette extension, de nombreuses ressources le font très bien :

- [Sauvegarder son site wordpress et dormir l’esprit tranquille !](https://webmarketingtuto.com/blog/sauvegarder-site-wordpress/)
- [How to backup a WordPress site for free: step by step, using Updraft Plus](https://themeisle.com/blog/backup-a-wordpress-site-for-free/)
- [How to Backup & Restore WordPress Sites with UpdraftPlus](https://www.wpbeginner.com/plugins/how-to-backup-restore-your-wordpress-site-with-updraftplus/)

### BackWPup

[BackWPup](https://fr.wordpress.org/plugins/backwpup/) est une autre solution de backup très utilisée.

Si vous préférez utiliser cette extension cet article va vous intéresser: [Sauvegarder votre blog automatiquement](https://wpformation.com/sauvegarder-wordpress-backwpup/)

## Maintenir son site à jour

Des mises à jour régulières permettent de se protéger contre les dernières failles de sécurité connues. Il est donc essentiel de maintenir Wordpress et l'ensemble des extensions à jour. (oui ça peut paraître trivial, mais c'est toujours mieux de le rappeler)

## Sécuriser l'accès au site

Si vous ne voulez pas faciliter la tâche à d'éventuels pirates il faut sécuriser l'accès à l’administration du site. On évite ainsi au maximum les attaques par force brute, qui consistent à tester toutes les solutions possibles de mots de passe. C'est une attaque très courante car de nombreux sites sous Wordpress utilisent des paramètres par défaut.

Actions:

- changer le nom d'administrateur par défaut(_admin_), et choisir un nom d'administrateur difficile à découvrir
- limiter l'utilisation du compte _administrateur_ et créer un profil _éditeur_ pour modifier le contenu
- limiter au maximum les privilèges des utilisateurs. Le codex (le manuel de Wordpress) a un article très complet à ce sujet: [Rôles et capacités](https://codex.wordpress.org/fr:R%C3%B4les_et_Capacit%C3%A9s)
- changer le chemin vers la page de connexion : par défaut on accède à l'admin en ajoutant _/wp-admin_ à l'URL du site, ou en accédant directement au fichier _/wp-login.php_. L'extension [WPS Hide Login](https://wordpress.org/plugins/wps-hide-login/) permet de faire ça très simplement. Une nouvelle option est présente dans les réglages afin de choisir une autre adresse vers la page de connexion, par exemple _/connexionadminsecurisee_. ![WPS Hide Login](/assets/securiser-wordpress/wps_hide_login.png) Cette adresse sera maintenant le seul moyen d'accéder à l'administration et les pages par défaut renverront maintenant une erreur 404. Vous pouvez aussi utiliser une adresse du genre _/vOHJFoCrcIcz5_ mais il ne faut pas oublier que le but est de s'en rappeler. L'extension _All In One WP Security_ permet de faire la même chose mais sur notre installation elle ne fonctionne pas correctement. Nous supposons un conflit avec une autre extension ou le thème Jupiter utilisé mais nous avons manqué de temps pour en trouver la cause. Nous avons donc décidé d'utiliser _WPS Hide Login_ qui fonctionne parfaitement.
- limiter le nombre de tentatives de connexion: par défaut Wordpress ne limite pas le nombre de tentatives d'accès, ce qui permet à un robot ou un pirate de tenter sa chance autant de fois que nécessaire pour se connecter à votre site. L'extension _All In One WP Security_ permet de limiter le nombre de tests de connexions autorisés et de bloquer les adresses IP trop insistantes pendant un certain temps. Il permet donc de décourager ces attaques. L'extension [Login Lockdown](https://wordpress.org/plugins/login-lockdown/) est aussi très bien référencée.
- utiliser une authentification à 2 facteurs permet d'augmenter encore la sécurité de son site. Nous n'avons pas encore exploré ces solutions mais nous avons repéré 2 extensions permettant de mettre en place cette solution: - [Google Authenticator – WordPress Two Factor Authentication (2FA)](https://fr.wordpress.org/plugins/miniorange-2-factor-authentication/) - [Two Factor Authentication](https://fr.wordpress.org/plugins/two-factor-authentication/)

## Sécuriser la base données

Tous les champs de la base de données sont préfixés par Wordpress. Par défaut le préfixe est \_wp\_\_, les pirates le savent ce qui facilite encore une fois leur travail. Modifier ce préfixe dès l'installation permet de protéger un peu plus son site.

Si le préfixe n'est pas défini à l'installation il est possible de le modifier par le biais d'une extension. C'est ce que nous avons fait grâce à _All In One WP Security_.

![All in one WP security - changer les préfixe de la base de données](/assets/securiser-wordpress/aoi_prefixe_bdd.png)

## Ajouter les clés secrètes

Si elles ne sont pas présentes dans le fichier wp-config.php il faut ajouter ces clés après les avoir générées ici: [https://api.wordpress.org/secret-key/1.1/salt/](https://api.wordpress.org/secret-key/1.1/salt/)

Un très bon article (en anglais) explique tout à leur sujet: [What, Why, and Hows of WordPress Security Keys](https://www.wpbeginner.com/beginners-guide/what-why-and-hows-of-wordpress-security-keys/)

## Cacher les fichiers et répertoires sensibles

Il est possible d'éditer le fichier _.htaccess_ manuellement pour effectuer ces opérations:

```apacheconf
# Pour protéger le fichier wp-config via votre htaccess
<Files wp-config.php>  
	order allow,deny  
	deny from all  
</Files>

# Pour cacher les répertoires sensibles
Options All -Indexes

# Enfin pour protéger le fichier htaccess lui-même
<Files .htaccess>  
	order allow,deny  
	deny from all  
</Files>
```

Bonne nouvelle, _All In One WP Security_ en activant 2 options:

- Règles de base du pare-feu > Activer les règles de base du pare-feu
- Règles supplémentaires du pare-feu > Désactiver les vues Index

![All in one WP security - activer le pare-feu](/assets/securiser-wordpress/aoi_base_parefeu.png)

## Désactiver l'éditeur de fichiers intégré

Afin de limiter les capacités d'édition d'une personne connectée mal intentionnée, il est conseillé d'empêcher l'édition des fichiers depuis l'interface d'administration.

Dans _All In One WP Security_ il suffit d'activer Sécurité des fichiers > Edition des fichiers PHP > Désactiver la capacité d’éditer des fichiers PHP.

Si vous n'utilisez pas d'extension il est aussi possible de le faire manuellement en ajoutant cette ligne au fichier _functions.php_:

```php
define('DISALLOW_FILE_EDIT',true);
```

## Cacher le numéro de version de Wordpress

Un pirate pourrait être intéressé par le numéro de version de Wordpress utilisé sur votre site, il pourrait en découvrir plus facilement les vulnérabilités.

Activer Paramètres > WP version info > Supprimer le générateur WP d’Infos Meta dans _All In One WP Security_.

## Protection anti-spam

_All In One WP Security_ fournit une protection par captcha consistant à résoudre des opérations mathématiques simples comme _17 + dix-huit_. Mais il faut bien avouer que ce n'est pas top d'un point de vue expérience utilisateur.

Nous avons donc choisi d'utiliser à la place l'extension _Advanced noCaptcha & invisible Captcha_, en utilisant la version _invisible Captcha_.

Il suffit ensuite de s'inscire sur le site de [Google reCAPTCHA](https://www.google.com/recaptcha) pour obtenir la clé API afin de l'activer.

## Passer son site en HTTPS

Servir son site web de façon sécurisée apporte énormement au site et à ses visiteurs.

Un premier avantage est un bonus de positionnement sur les moteurs de recherche, Google a confirmé maintes fois qu'il avantageait les sites en HTTPS dans ses résultats. 

Ensuite, cela permet de garantir la confidentialité de vos utilisateurs, en chiffrant toutes les données qui circulent entre leur navigateur et votre site internet. 
Cela peut devenir important s'ils sont amenés a rentrer des informations personnelles en utilisant votre site, tel que pour laisser un commentaire, remplir un formulaire, ou encore dans le cadre de transactions commerciales. 

Sans HTTPS, il est très simple pour des personnes malintentionnées d'écouter, et voler ces informations, si elles sont par exemple rentrée par un utilisateur connecté via un wifi public ou malveillant.

En 2018, il devient la norme de proposer son site en HTTPS, et cela devient peu à peu la norme: les navigateurs internet mettent de plus en plus en avant le fait qu'un site ne soit pas sécurisé et affichent des avertissements de sécurité lorsque l'utilisateur intéragit avec ceux-ci. 

Si passer son site en HTTPS n'est donc pas obligatoire, ne pas le faire à notre époque serait donc au minimum une faute.

Cet article très complet vous explique tout:
[Comment passer WordPress en HTTPS ?](https://wpformation.com/wordpress-http-https/)

## Désactiver XMLRPC

XMLRPC est un protocole permettant une connexion entre Wordpress et des connexions externes. Si vous êtes sûr que votre site n'utilise pas ce protocole il est conseillé de le désactiver car il augmente le risque d'attaques par force brute.

Dans _All In One WP Security_ activer Pare-feu > Règles de bases du pare-feu > Completely Block Access To XMLRPC

Attention, certains thèmes ou extensions utilisent ce protocole comme par exemple JetPack ou BuddyPress.

## Etapes suivantes

A ce stade nous avons déjà bien protégé notre site Wordpress, mais il est toujours possible d'en faire plus. _All In One WP Security_ possède encore de nombreuses options. C'est une extension très complète qui propose des options avancées, il faut donc activer celles-ci avec précaution au risque de bloquer complètement l'accès au site. Même à vous...

Bon courage !
