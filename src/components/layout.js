import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
// const html = () => {
//   return {
//     __html: `if (window.netlifyIdentity) {
//       window.netlifyIdentity.on("init", user => {
//         if (!user) {
//           window.netlifyIdentity.on("login", () => {
//             document.location.href = "/admin/";
//           });
//         }
//       });
//     }`
//   }
// }
class Layout extends React.Component{
  componentDidMount(){
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }
  render(){
    return (
    <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
              <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
              {/* <script dangerouslySetInnerHTML={html()} /> */}
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
              }}
            >
              {this.props.children}
              
            </div>
          </>
        )}
      />
    )
  }
}
// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: 'Sample' },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         >
//           <html lang="en" />
//           <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
//           <script dangerouslySetInnerHTML={html()} />
//         </Helmet>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: '0 auto',
//             maxWidth: 960,
//             padding: '0px 1.0875rem 1.45rem',
//             paddingTop: 0,
//           }}
//         >
//           {children}
           
//         </div>
//       </>
//     )}
//   />
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
