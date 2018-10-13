import React from "react"
//import { Link } from "gatsby"
import Helmet from "react-helmet"
import Transition from "./../components/Transition.js"
import Header from './../components/header.js';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import "./layout.css"

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
                    <WebsiteWrapper>
                        <Helmet
                            title="Gatsby Default Starter"
                            meta={[
                            { name: `description`, content: `Sample` },
                            { name: `keywords`, content: `sample, something` },
                            ]}
                        />
                        <Header siteTitle={stat.site.siteMetadata.title} 
                                    image={data && data.headerImage? data.headerImage.childImageSharp.fluid:
                                    stat.headerImage.childImageSharp?stat.headerImage.childImageSharp.fluid:null} />
                        <div
                            style={{
                            margin: `0 auto`,
                            maxWidth: 960,
                            padding: `0px 1.0875rem 1.45rem`,
                            paddingTop: '100px',
                            }}
                        >
                        
                            <Transition location={location}>{children}</Transition>
                        </div>
                    </WebsiteWrapper>
                )
        }}/> //end of StaticQuiry
      )
}

export default TemplateWrapper

const WebsiteWrapper = styled.div`
  overflow-x: hidden;
`
/*
           {data && data.site && <Header siteTitle={data.site.siteMetadata.title} 
                    image={data.mapImage?
                        data.mapImage.childImageSharp.fluid
                        :data.headerImage.childImageSharp.fluid} />}
*/