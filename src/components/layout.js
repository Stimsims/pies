import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

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
  // componentDidMount(){
  //   if (window.netlifyIdentity) {
  //     window.netlifyIdentity.on("init", user => {
  //       if (!user) {
  //         window.netlifyIdentity.on("login", () => {
  //           document.location.href = "/admin/";
  //         });
  //       }
  //     });
  //   }
  // }
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
            headerImage: file(relativePath: { regex: "/apple/" }) {
              childImageSharp  {
                  fluid{
                      ...GatsbyImageSharpFluid
                  }
              }
            }
          }
        `}
        render={data => {
          console.log(`layout data`, data);
          return(
            <WebsiteWrapper>
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              >
                <html lang="en" />
                {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> */}
              </Helmet>
              <Header siteTitle={data.site.siteMetadata.title} 
              image={this.props.image?this.props.image:data.headerImage.childImageSharp.fluid} />
              <div
                style={{
                  margin: '0 auto',
                  maxWidth: 960,
                  padding: '0px 1.0875rem 1.45rem',
                  paddingTop: '110px',
                }}
              >
                {this.props.children}
                
              </div>
            </WebsiteWrapper>
          )
        }
      }
      />
    )
  }
}
const WebsiteWrapper = styled.div`
  overflow-x: hidden;
`
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
