const path = require("path")
const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

const createTagPages = (createPage, posts) => {
  const tagTemplate = path.resolve("src/templates/tagTemplate.js")

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

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
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

    const posts = result.data.allMarkdownRemark.edges

    // Permet de générer les pages pour les tags
    createTagPages(createPage, posts)

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
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
