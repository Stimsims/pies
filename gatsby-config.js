const path = require(`path`);
//  'gatsby-plugin-page-transitions',
module.exports = {
  siteMetadata: {
    title: 'Gekko Restaurant',
    siteRoot: 'https://goofy-archimedes-763914.netlify.com',
    siteUrl: 'https://goofy-archimedes-763914.netlify.com',
    description: 'The Gekko restaurant serves Indian Japanese fusion food'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: `/static/admin/config.yml`
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
          component: require.resolve(`./src/layouts/index.js`)
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/components/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/pages/pages`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              // Path to your Netlify CMS config file
              cmsConfig: `/static/admin/config.yml`,
            }
          },
          `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              backgroundColor: "transparent"
            }
          },
          "gatsby-remark-embed-video",
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 2em`
            }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gekko Restaurant',
        short_name: 'Gekko',
        start_url: '/',
        background_color: '#ff0066',
        theme_color: '#ff0066',
        display: 'minimal-ui',
        icon: 'src/images/gecko-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ],
}
//    'gatsby-plugin-netlify-identity-widget',