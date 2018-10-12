/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it



const path = require('path');

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
  
    return new Promise((resolve, reject) => {
      const blogPostTemplate = path.resolve(`src/templates/BlogTemplate.jsx`)
      // Query for markdown nodes to use in creating pages.
      resolve(
        graphql(
          `
            {
              allMarkdownRemark(limit: 10) {
                edges {
                  node {
                    frontmatter {
                      path
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
            console.log(`gatsby node remark result`, result);
          if (result.errors) {
            reject(result.errors)
          }
  
          // Create pages for each markdown file.
          result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            const path = node.frontmatter.path;
            createPage({
              path,
              component: blogPostTemplate,
              // In your blog post template's graphql query, you can use path
              // as a GraphQL variable to query for data from the markdown file.
              context: {
                  frontmatter: node.frontmatter
              },
            })
          })
        })
      )
    })
  }