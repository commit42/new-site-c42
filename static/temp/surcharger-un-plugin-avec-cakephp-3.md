---
path: /blog/surcharger-un-plugin-avec-cakephp-3
title: "Surcharger un plugin avec CakePHP 3"
date: 2019-01-09T16:40:00+01:00
draft: false
tags: ["cakephp", "plugin"]
---

Suite à la création d'un site internet via le CMS [Croogo](https://croogo.org/) basé sur CakePHP 3, nous avons été amené à devoir surcharger des plugins. En effet ce CMS est intégralement composé de plugins (au sens CakePHP du terme).

La documentation officielle (de CakePHP), bien que très complète, ne couvrant absolument pas cette partie, nous avons dû faire un petit tour dans le cœur de la bête afin de comprendre ce mécanisme et arriver à combler notre besoin.

![coeur](https://media.giphy.com/media/yeUxljCJjH1rW/giphy.gif)

## Template

Les premiers éléments que l'on souhaite surcharger, sur un CMS, sont bien entendu, les templates de vue. Pour cela nous avons donc dû comprendre sur quoi CakePHP se basait pour trouver le bon fichier dans notre arborescence.

Après une petite aventure de quelques minutes, le résultat tombe.

![Aventure](https://media.giphy.com/media/N97O8wvYMDreE/giphy.gif)

Pour surcharger le template d'un plugin il suffit de créer un fichier du même nom dans `src/Template/Plugin/{PluginName}/{ControllerName}/{ActionName}.ctp`.

Avec un exemple concret :

Si je veux surcharger la méthode "view" du controleur "Users" mon plugin "SuperPlugin" je vais créer le fichier `src/Template/Plugin/SuperPlugin/Users/view.ctp`.

## Controllers

Surcharger un template c'est bien, mais parfois il sera nécessaire de modifier un comportement. On devra donc surcharger un controleur. Malheurement, pas de solution miracle à base de fichier dans un dossier "Plugin", non, nous allons devoir surcharger ses routes (rien de bien compliqué cependant mais il va falloir modifier notre fichier `routes.php`).

### Modifier le chargement des routes

Par défaut, le fichier `routes.php` charge en premier les routes des plugins avant les nôtres, cela pose donc un problème : dans cet état il est impossible de les surcharger car une fois une route trouvée, les autres sont ignorées. Il faut donc modifier notre fichier `routes.php` comme ceci.

```php
<?php
Router::scope('/', function (RouteBuilder $routes) {
 // vos routes
});

// Chargement des routes de vos plugins
Plugin::routes();
``` 

### Surcharger la route d'un plugin

Maintenant que nos plugins sont chargés, après il va être très facile de surcharger leurs routes. En effet il suffira de la reécrire en passant l'option `plugin` à `false`.

Par exemple pour la route de plugin :

```php
// si notre plugin d'appelle "myplugin" son url sera "/myplugin/user/:username"
$routes->connect(
	'/user/:username', 
	 ['controller' => 'Users', 'action' => 'view'],
	 ['pass' => ['username']]
);
```

Nous devrons déclarer la route suivante dans le scope `/`

```php
Router::scope('/', function (RouteBuilder $routes) {
	$routes->connect(
		'myplugin/user/:username', 
		['controller' => 'Users', 'action' => 'view', 'plugin' => false],
		['pass' => ['username']]
	);
});
``` 

## Modèles

Afin de surcharger les modèles d'un plugin vous devrez surcharger la méthode `initialize` de votre `AppController`.

Dans les exemples ci-dessous le but sera de surcharger la table `users` du plugin `MyPlugin`

- Si vous ne souhaitez surcharger que l'entité :

```php
// src/AppController.php

public function initialize()  
{
	TableRegistry::config('MyPlugin.Users', ['entityClass' => 'App\Model\Entity\User']);
}
```

- Si vous souhaitez surcharger l'entité et l'objet Table

```php
// src/AppController.php

public function initialize()  
{
	TableRegistry::config('MyPlugin.Users', [
	 'className' => 'App\Model\Table\UsersTable', 
	 'entityClass' => 'App\Model\Entity\User'
	 ]);
}
```

- Attention, si vous ne souhaitez que surcharger l'objet Table, il est obligatoire de redéclarer l'entité

```php
// src/AppController.php

public function initialize()  
{
	TableRegistry::config('MyPlugin.Users', [
	 'className' => 'App\Model\Table\UsersTable', 
	 'entityClass' => 'MyPlugin\Model\Entity\User'
	 ]);
}
```

## Helpers

Pour terminer il ne nous reste plus que les helpers. Au contraire des modèles, vous devrez cette fois-ci modifier  la méthode `beforeRender` de votre `AppController`.

Par exemple pour surcharger le helper `UserHelper` du plugin `MyPlugin` vous devez ajouter dans votre `AppController`

```php
public function beforeRender(Event $event)
{
	$this->viewBuilder()->setHelpers(['Users']);
}
```

## Bonus

Comme chez commit42 on est des gens formidables, nous avons développé pour vous (et aussi pour nous), un petit plugin pour vous faciliter la vie : [cakephp-override](https://github.com/ozee31/cakephp-override)

En reprenant les exemples précédents, on pourrait écrire grâce au plugin le fichier de configuration suivant :

```php
// config/overrides.php

<?php return ['Overrides' => [
	'routes' => [
		'myplugin/user/:username' => [
			'route' => ['controller'  =>  'Users',  'action'  =>  'view',  'plugin'  =>  false],
			'options' => ['pass'  =>  ['username']],
		]
	 ],
	 'models' => [
		 'MyPlugin.Users' => [
			 'className' => 'App\Model\Table\UsersTable', 
			 'entityClass' => 'App\Model\Entity\User'
		 ]
	 ],
	 'helpers' => [
		 'MyPlugin.Users' => [
			 'className' => 'Users',
			 'controllers' => true, // true if you want override for all Controllers, an array or a string otherwise
		 ]
	 ]
]];
```

