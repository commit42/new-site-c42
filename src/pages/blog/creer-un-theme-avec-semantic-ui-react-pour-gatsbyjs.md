---
title: Créer un thème avec Semantic UI React pour GatsbyJS
date: 2019-03-25T15:09:32.644Z
author: Eva
thumbnail: /assets/2019-03-25-04-14-11-screenshot.png
tags:
  - Semantic UI
  - GatsbyJS
  - React
---
Bien le bonjour !
Contrairement à d'habitude, cet article ne portera pas sur mon avancé de la refonte du projet de commit42. Aujourd'hui je vous montre comment créer son propre thème pour [Semantic UI React](https://react.semantic-ui.com) avec GatsbyJS.

Les ressources à ce sujet sont très limitées ; pour ainsi dire je n'en ai trouvé que deux: [une en anglais](https://edmcman.github.io/blog/2018-12-31--theming-semantic-ui-react-in-gatsby-js/) et [une en japonais](https://blog.yohei.tokyo/2019/02/gatsbyjs-semantic-ui/) (d'après google traduction)
Je me suis dit que ça ne serait pas une mauvaise idée de faire une synthèse de tout ce que j'ai compris. Ça pourra peut-être aider d'autre développeur..es !

### Installation des dépendances

Pour commencer, installez `semantic-ui-react` et `semantic-ui-css` de la façon suivante:

```
npm install --save semantic-ui-css semantic-ui-react
```

Ensuite installez `less` et le plugin `gatsby-plugin-less` comme ceci:

```
npm install --save gatsby-plugin-less less
```

Ajoutez le plugin dans gatsby-config.js:

```javascript
module.exports = {
  ...
  plugins: [
    ...,
    `gatsby-plugin-less`,
    ...
  ]
  ...
}
```

Ensuite installez `semantic-ui-less`:

```
npm install --save semantic-ui-less
```

### Initialiser le dossier pour créer son thème

Allez dans les nodes_modules: `node-modules/semantic-ui-less`.
Copiez le fichier`theme.config.example` et le dossier`_site`.

Retournez dans le dossier de votre projet et créez un dossier `/semantic` dans `src/` .
Y copier ce que vous venez d'aller chercher dans les node_modules. Renommez `theme.config.example` en `theme.config` et `_site` en `site`.

Ensuite, dans le fichier `theme.config` que vous venez de copier, remplacez les lignes suivantes:

* `@import (multiple) "theme.less";`  --> `@import (multiple) '~semantic-ui-less/theme.less';` 
* `@siteFolder: "site` --> `@siteFolder: '../../src/semantic/site';`

Enfin, tout à la fin ajoutez: `@fontPath : "../../../themes/@{theme}/assets/fonts";`.

Important: Si vous souhaitez ajouter vos propres fonts, mettez les dans `src/semantic/site/globals/fonts`.

Votre fichier theme.config devrait ressembler à ça:

```less
/*

████████╗██╗  ██╗███████╗███╗   ███╗███████╗███████╗
╚══██╔══╝██║  ██║██╔════╝████╗ ████║██╔════╝██╔════╝
   ██║   ███████║█████╗  ██╔████╔██║█████╗  ███████╗
   ██║   ██╔══██║██╔══╝  ██║╚██╔╝██║██╔══╝  ╚════██║
   ██║   ██║  ██║███████╗██║ ╚═╝ ██║███████╗███████║
   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝╚══════╝

*/

/*******************************
        Theme Selection
*******************************/

/* To override a theme for an individual element
   specify theme name below
*/

/* Global */
@site        : 'default';
@reset       : 'default';

/* Elements */
@button      : 'default';
@container   : 'default';
@divider     : 'default';
@flag        : 'default';
@header      : 'default';
@icon        : 'default';
@image       : 'default';
@input       : 'default';
@label       : 'default';
@list        : 'default';
@loader      : 'default';
@placeholder : 'default';
@rail        : 'default';
@reveal      : 'default';
@segment     : 'default';
@step        : 'default';

/* Collections */
@breadcrumb  : 'default';
@form        : 'default';
@grid        : 'default';
@menu        : 'default';
@message     : 'default';
@table       : 'default';

/* Modules */
@accordion   : 'default';
@checkbox    : 'default';
@dimmer      : 'default';
@dropdown    : 'default';
@embed       : 'default';
@modal       : 'default';
@nag         : 'default';
@popup       : 'default';
@progress    : 'default';
@rating      : 'default';
@search      : 'default';
@shape       : 'default';
@sidebar     : 'default';
@sticky      : 'default';
@tab         : 'default';
@transition  : 'default';

/* Views */
@ad          : 'default';
@card        : 'default';
@comment     : 'default';
@feed        : 'default';
@item        : 'default';
@statistic   : 'default';

/*******************************
            Folders
*******************************/

/* Path to theme packages */
@themesFolder : 'themes';

/* Path to site override folder */
@siteFolder: '../../src/semantic/site';

/*******************************
         Import Theme
*******************************/

@import (multiple) "~semantic-ui-less/theme.less";
@fontPath : "../../../themes/@{theme}/assets/fonts";

/* End Config */
```

Afin d'utiliser notre propre configuration webpack pour `semantic-ui-less` ajoutez ce code à votre fichier `gatsby-node.js` :

```javascript
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '../../theme.config$': path.join(__dirname, 'src/semantic/theme.config'),
      },
    },
  });
};
```

Si vous n'avez pas déjà de `gatsby-browser`, créez ce fichier à la racine de votre projet et mettez la ligne suivante dans ce fichier: 

```js
require("semantic-ui-css/semantic.min.css")
```

Pour terminer, dans votre composant `layout.js` ajoutez: `import  "semantic-ui-less/semantic.less";` et dans votre page `index.js` ajoutez `import  "semantic-ui-css/semantic.min.css"`

### Créer son thème

Votre configuration est maintenant fin prête, vous allez pouvoir commencer à créer votre thème !

Allez dans `src/semantic/site/globals/site.variables` et ajoutez les lignes suivantes (par exemple):

```
@emSize: 13px;
@fontSize: 13px;
@fontName: 'Helvetica';
```

Re-développez votre application avec `gatsby develop` et observez le résultat !

### Utiliser ses propres fonts

Si vous souhaitez utiliser des fonts autres que celles par défaut, voici comment faire:

Dans `src/semantic/site/global/site.overrides` créer vos `@font-face`:

```less
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  src: url('fonts/Poppins-BlackItalic.ttf');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('fonts/Roboto-Light.ttf');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
```

Ensuite dans `src/semantic/site/global/site.variables` créez vos styles de caractères:

```less
@headerFont: 'Poppins';
@pageFont: 'Roboto';
```

Ici j'ai défini `Poppins` comme étant la font pour les titres et `Roboto` celle pour le corps du texte.

### Conclusion :clap:

Si tout s'est bien passé vous devriez pouvoir créer votre propre thème pour Semantic UI React ! Vous trouverez juste en dessous mon repo Gihub si vous souhaitez consulter le code.

Mon repo github: <https://github.com/EvaSpessotto/theming-gatsby-sui>

### Sources :link:

**Créer une thème avec Semantic UI React pour React**
<http://nephewapps.com/2018/02/25/theming-semantic-ui-with-create-react-app/>

<https://jsramblings.com/2018/03/04/how-to-use-semantic-ui-with-a-custom-theme-in-your-CRA-app.html>

**Changer les polices de votre thème**

<https://stackoverflow.com/questions/49621165/how-do-you-include-custom-fonts-in-semantic-ui-instead-of-google-fonts>

<https://github.com/Semantic-Org/Semantic-UI/issues/6435#issuecomment-398339397>

**Theming Semantic UI + Gatsby**

<https://edmcman.github.io/blog/2018-12-31--theming-semantic-ui-react-in-gatsby-js/>

<https://blog.yohei.tokyo/2019/02/gatsbyjs-semantic-ui/>
