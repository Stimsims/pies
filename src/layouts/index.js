import React from "react"
//import { Link } from "gatsby"
import Helmet from "react-helmet"
import Transition from "./../components/Transition.js"
import Header from './../components/header.js';
import { StaticQuery, graphql } from 'gatsby';
import styled, {ThemeProvider} from 'styled-components';
import CookieConsent from "react-cookie-consent";

import './../components/animations/slides.css';
import './../components/animations/fades.css';
import './../components/styles/text.css';
import "./layout.css"
import theme from './theme.js';

const TemplateWrapper = (props) => {
    let { children, location, data} = props;
    console.log(`TemplateWrapper data`, props);
    return (
        <StaticQuery
              query={graphql`
                query LayoutStaticQuery {
                    site {
                        siteMetadata {
                          title
                        }
                      }
                      headerImage: file(relativePath: { regex: "/octopus/" }) {
                        childImageSharp  {
                            fluid{
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
              `}
              render={stat => {
                  console.log(`StaticQuery`, stat);
                  return(
                    <ThemeProvider theme={theme}>
                        <WebsiteWrapper>
                            <Helmet
                                title="Gatsby Default Starter"
                                meta={[
                                { name: `description`, content: `Sample` },
                                { name: `keywords`, content: `sample, something` }
                                ]}
                            >
                            </Helmet>
                            <CookieConsent
                                location="top"
                                buttonText="Okay"
                                cookieName="gekko-cookie-consent"
                                style={{ background: "rgba(0,0,0,0.7)",  zIndex: '999999' }}
                                buttonStyle={{ color: "#4e503b", fontSize: "13px", 
                                animationName: 'wiggle', animationDuration: '2.5s', animationIterationCount: 'infinite',
                                animationTimingFunction: 'ease-in-out' }}
                                expires={150}
                            >
                                This website uses cookies to enhance its service to you.
                            </CookieConsent>
                            {/* <Header siteTitle={stat.site.siteMetadata.title} 
                                        image={data && data.headerImage? data.headerImage.childImageSharp.fluid:
                                        stat.headerImage.childImageSharp?stat.headerImage.childImageSharp.fluid:null} /> */}
                                 <Header siteTitle={stat.site.siteMetadata.title} 
                                        image={stat.headerImage.childImageSharp?stat.headerImage.childImageSharp.fluid:null} />
                            <div
                                style={{
                                margin: `0 auto`,
                                maxWidth: 960,
                                padding: `0px 1.0875rem 1.45rem`,
                                paddingTop: '150px',
                                }}
                            >
                            
                                <Transition location={location}>{children}</Transition>
                            </div>
                        </WebsiteWrapper>       
                    </ThemeProvider>
                )
        }}/> //end of StaticQuiry
      )
}

export default TemplateWrapper

const WebsiteWrapper = styled.div`
  
  height: 100vh;

`
/*  overflow-x: hidden;
           {data && data.site && <Header siteTitle={data.site.siteMetadata.title} 
                    image={data.mapImage?
                        data.mapImage.childImageSharp.fluid
                        :data.headerImage.childImageSharp.fluid} />}
*/