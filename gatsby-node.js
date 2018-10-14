/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it



const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images-v2');
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

// exports.onCreateNode = ({ node }) => {
//     fmImagesToRelative(node);
//   };

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
  
    return new Promise((resolve, reject) => {
      const blogPostTemplate = path.resolve(`src/templates/BlogTemplate.jsx`);
      const menuPostTemplate = path.resolve(`src/templates/MenuTemplate.jsx`);
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
                      layout
                    }
                  }
                }
              }
            }
          `
        )
        .then(result => {
            
          if (result.errors) {
            reject(result.errors)
          }
  
          // Create pages for each markdown file.
          result.data.allMarkdownRemark.edges
          .forEach(({ node }) => {
              if(node.frontmatter.layout === 'menu'){
                createPage({
                    path: node.frontmatter.path,
                    component: menuPostTemplate,
                    context: {
                        frontmatter: node.frontmatter
                    },
                })
              }else if(node.frontmatter.layout === 'blog'){
                    createPage({
                        path: node.frontmatter.path,
                        component: blogPostTemplate,
                        // In your blog post template's graphql query, you can use path
                        // as a GraphQL variable to query for data from the markdown file.
                        context: {
                            frontmatter: node.frontmatter
                        },
                    })
              }

          })
        })
      )
    })
  }