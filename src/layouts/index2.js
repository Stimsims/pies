import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';
//import CSSTransition from 'react-transition-group/CSSTransition';

import Header from '../components/header'
import './layout.css'
//import './transition.css'

import { Location } from '@reach/router';
import Transition from "../components/transition"
// const enter = css`
//   opacity: 0.01;
// `;

// const enterActive = css`
//   opacity: 1;
//   transition: opacity 250ms ease-in;
// `;

// const exit = css`
//   ${position} opacity: 1;
// `;

// const exitActive = css`
//   ${position} opacity: 0.01;
//   transition: opacity 250ms ease-out;
// `;
class Layout extends React.Component{

  render(){
    console.log(`layout render props`, this.props);
    return (
      <Location>
      {({ navigate, location }) =>{
          console.log(`navigation`, navigate);
          console.log(`location`, location);
          return (<StaticQuery
              query={graphql`
                query LayoutQuery {
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
                          key={location.pathname}
                          className={location.pathname}
                          style={{
                            margin: '0 auto',
                            maxWidth: 960,
                            padding: '0px 1.0875rem 1.45rem',
                            paddingTop: '110px',
                            display: 'block', position: 'relative'
                          }}
                        >
                          {/* {this.props.children} */}
                          <Transition location={location}>{this.props.children}</Transition>
                        </div>
                  </WebsiteWrapper>
                )
              }
            }
            />)
      }}
      </Location>
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
