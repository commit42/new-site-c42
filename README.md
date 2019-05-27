![Logo commit42](https://github.com/commit42/new-site-c42/blob/master/static/assets/logo-c42.png)

# Site de [commit42](https://www.commit42.com/) [![Netlify Status](https://api.netlify.com/api/v1/badges/2decf125-e9f2-4863-bfa5-917f7d4bd8d3/deploy-status)](https://app.netlify.com/sites/new-site-c42/deploys)

Stack:

- GatsbyJS
- Semantic UI React
- Netify CMS

## :rocket: Quick Start

1.  Forker ce repo
1.  Aller dans le dossier
    ```
    cd new-site-c42
    ```
1.  Installer les dépendances
    `yarn` ou `npm install`

1.  Developper l'application

    ```
    gatsby develop
    ```

    Aller voir à l'adresse `http://localhost:8000`

## A propos de l'admin

Pour se connecter à l'admin il faut utiliser ses identifiants github.

L'admin est disposible à l'adresse `https://www.commit42.com/admin/`.
Il y a 3 collections: une pour les articles, une pour les auteurs, une pour les pages.

### Les collections

- Auteurs

Lorsqu'une nouvelle personne souhaite rédiger un article, il faut qu'il s'ajoute à la collection `auhtors` afin qu'il soit disponible dans la liste des auteurs:

![Collection authors dans l'admin](/static/assets/authors-collection.gif "Collection authors dans l'admin")

- Pages

Il n'est pas possible de rajouter une page depuis l'admin, il faut forcémement passer par le fichier `static/admin/config.yml` car chaque page à sa propre structure.

Pour rajouter une page il faut ajouter le code suivant:

```yml
  - file: src/content/pageName.md
    label: Label pour l'admin
    name: pageName
    fields:
```

Ensuite dans `fields` il faut rajouter les champs dont on va avoir besoin, ce sont des objets composés de la façon suivante:

```yml
fields:
  - { name: fieldName, label: Label du champ, widget: [indiquer ici le widget] }
```

Pour savoir quel widget il faut ajouter, rendez-vous sur [la doc de Netlify CMS](https://www.netlifycms.org/docs/widgets/)

### Le workflow

Le workflow est dit "éditorial" c'est à dire qu'il gère le cyle de vie d'un article (brouillon, à relire, à publier).
Lorsqu'un nouvel article est créé il est automatiquement enregistré comme brouillon. Pour le publier il faut se rendre sur l'onglet "workflow" et déplacer son article dans la colonne correspondante.

(le gif ne bug pas, il est juste un peu long...)

![Workflow de l'admin](/static/assets/publish-post.gif "Collection authors dans l'admin")
