const path = require("path")
const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const createPaginatedPages = require("gatsby-paginate")

// Méthode pour générer les pages de tags
const createTagPages = (createPage, posts) => {
  const tagTemplate = path.resolve("src/templates/TagTemplate.js")
  const postsByTag = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }

        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  tags.forEach(tagName => {
    const posts = postsByTag[tagName]

    createPage({
      path: `/tags/${_.kebabCase(tagName)}`,
      component: tagTemplate,
      context: {
        posts,
        tagName,
      },
    })
  })
}

// Méthode pour générer les pages de tous les articles
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/BlogPostTemplate.js`)
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 150)
            timeToRead
            id
            fields {
              slug
            }
            frontmatter {
              tags
              title
              date
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 980) {
                    src
                    srcSet
                    aspectRatio
                    sizes
                    originalName
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges.filter(item => {
      return item.node.fields.slug.startsWith("/blog/")
    })

    // Appelle la méthode pour les tags
    createTagPages(createPage, posts)

    // Génère les posts
    posts.forEach(({ node }, index) => {
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
          // Pour afficher les articles prec/suiv en fin d'article
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      })
    })

    // Génère la liste des posts pour la page /blog/ avec la pagination
    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: "src/templates/PostsListTemplate.js",
      pageLength: 9,
      pathPrefix: "blog",
      buildPath: (index, pathPrefix) =>
        index > 1 ? `${pathPrefix}/${index}` : `${pathPrefix}`,
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Sert pour l'optimisation des images
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Sert pour utiliser le theming de Semantic UI
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "../../theme.config$": path.join(
          __dirname,
          "src/semantic/theme.config"
        ),
      },
    },
  })
}
