import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export default class Meta extends React.PureComponent{
    renderOther(others){
        console.log(`Meta rendering others`, others);
        if(others && Array.isArray(others)){
            return others.map(e => {
                let result = <meta {...e} />;
                console.log(`Meta returning other`, result);
                return result;
            })
        }
        return null;
    }
    render(){
        console.log(`Meta component rendering,`, this.props);
        let description = this.props.description;
        let title = this.props.title;
        let image = this.props.image;
        let imageAlt = this.props.imageAlt;
        let type = this.props.type;
        let twitterUser = '@Paygevii1';
        let twitterCard = this.props.twitterCard? this.props.twitterCard:'summary';
        return (
            <StaticQuery 
            query={graphql`
                query MetaStaticQuery {
                    site {
                        ...SiteInformation
                    }
                }
              `}
            render = {
                (data => {
                    console.log(`Meta static query data`, data);
                    return (
                        <Helmet>
                            {title && <meta propety="og:title" content={title} />
                                && <meta name="twitter:title" content={title} /> }
                            {description && <meta name="description" content={description} />
                                        && <meta property="og:description" content={description} />
                                        && <meta name="twitter:description" content={description} />}
                            {image && <meta property="od:image" content={image} />
                                    && <meta name="twitter:image" content={image} />}
                            {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
                            {type && <meta property="og:type" content="website" />}
                            <meta property="og:site_name" content={data.site.siteMetadata.title} />
                            <meta name="twitter:site" content={twitterUser}/>
                            <meta name="twitter:creator" content={twitterUser}/>
                            <meta name="twitter:card" content={twitterCard} />
                            {this.renderOther(this.props.other)}
                        </Helmet>
                    )
                })
            }
            />
            
        )
    }
}

/*
        <Helmet>
          <meta name="description" content="Gekko is a restaurant, here is its menu" />

          <meta property="og:title" content={props.data.site.siteMetadata.title} />
          <meta property="og:image" content={props.data.headerImage.childImageSharp.fluid.src}  />
          <meta property="og:description" content="Gekko is a restaurant, here is its menu" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={props.data.site.siteMetadata.title} />

          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:site" content="@Paygevii1"/>
          <meta name="twitter:creator" content="@Paygevii1"/>
          <meta name="twitter:title" content={props.data.site.siteMetadata.title}/>
          <meta name="twitter:description" content={"Gekko is a restaurant, here is its menu"} />
          <meta name="twitter:image" content={props.data.headerImage.childImageSharp.fluid.src}/>
          <meta name="twitter:image:alt" content={'the restaurant interior'} />

        </Helmet>
*/
