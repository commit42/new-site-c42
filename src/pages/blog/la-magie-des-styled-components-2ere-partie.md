---
title: La magie des styled-components - 2ère partie
date: 2020-02-09T21:43:16.685Z
author: Mathieu
thumbnail: /assets/johannes-plenio-1vzlw-ihjam-unsplash-1-.jpg
tags:
  - styled-components
  - react
  - css
---
- V5 perfs
- props ⇒ props
- ressources
- css\`` function from styled-components
- extend avec styled(Component)
- nested, parent:hover &
- theme
- extraire les fonctions
- organisation des fichiers
- override &&

Cet article est le 2e d'une série consacrée à l'utilisation des styled-components avec React, pour lire la première partie c'est ici: [La magie des styled-components - 2ère partie](https://www.commit42.com/blog/la-magie-des-styled-components-1ere-partie/).

## Nouvelle version de la librairie!

Depuis la publication du premier article la v5 est sortie.
En bref, c'est plus rapide et le bundle plus léger.

> 50% faster server-side rendering, 22% faster client-side rendering, 31% smaller bundle size, RTL support and no breaking changes!
> -- <cite>Evan Jacobs, [Announcing styled-components v5: Beast Mode](https://medium.com/styled-components/announcing-styled-components-v5-beast-mode-389747abd987)</cite>
