import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import {animationMixIn} from './animations/animation';

export default class Sales extends React.Component{
    constructor(props){
        super(props);
        console.log(`sales constructor`, props);
        // let active = props.sales.filter(e => {
        //     return this.filterDates(e.node);
        // });
        // console.log(`sales active`, active);
        // this.state = {
        //     activeSales: active
        // }
    }
    filterDates(sale){
        console.log(`sales filtering `, sale);
        let now = new Date();
        let start = new Date(sale.frontmatter.startdate);
        let end = new Date(sale.frontmatter.enddate);
        let active = now.getTime() > start.getTime() && now.getTime() < end.getTime();
        console.log(`sales start ${sale.frontmatter.startdate} end ${sale.frontmatter.enddate} active? ${active}`);
        return active;
    }

    render(){
        return <StaticQuery
              query={graphql`
                query SalesStaticQuery {
                    sales: allMarkdownRemark(
                        filter: {frontmatter: {layout: {eq: "sale"}}}
                      ) {
                        edges {
                          node {
                            id
                            html
                            frontmatter {
                              startdate(formatString: "MMMM DD, YYYY")
                              enddate(formatString: "MMMM DD, YYYY")
                              path
                            }
                          }
                        }
                      }
                }
              `}
              render={stat => {
                    let active = stat.sales.edges.filter(e => {
                        return this.filterDates(e.node);
                    });
                    if(active){
                        return <div>
                                {active && active.length > 0 &&  <hr />}
                                {active.map(s => {
                                    return <Sale><div key={s.node.id}>
                                        <div>
                                            <div className="startdate">
                                                <h5>START</h5>
                                                <p>{s.node.frontmatter.enddate}</p>
                                            </div>
                                            <div className="enddate">
                                                <h5>END</h5>
                                                <p>{s.node.frontmatter.startdate}</p>
                                            </div> 
                                        </div>
                                        <h3>SALE</h3>
                                        <div
                                            className="blog-post-content"
                                            dangerouslySetInnerHTML={{ __html: s.node.html }}
                                            />
                                    </div></Sale>
                                })}
                            </div>
                    }else{
                        return null;
                    }
            }}/>
    }
}
//dur, del, fill, ease, iter
const Sale = styled.div`
    background-color: red;
    padding: 0px 10px;
    max-width: 500px;
    margin: 10px auto;
    border-radius: 5px;
    box-shadow: 0px 2px 1px 2px black;
    .startdate, .enddate{
        display: block;
        padding: 5px;
        p, h5{
            text-align: center;
            margin: 0;
            color: white;
        }
    }
    h3{
        text-align: center;
        margin: 0;
        padding: 5px;
        font-size: 2.2em;
        color: white;
        text-decoration: underline;
    }
    .content{
        color: white;
    }
    @media only screen and (min-width: ${props => props.theme.mediaMinWidth}) {
        .startdate, .enddate{
            display: inline-block;
        }
        .enddate{
            float: right;
        }
    }
    animation-name: bounce;
    ${animationMixIn('1', '0', 'forward', 'ease', 'infinite')}
    @keyframes bounce { 
        0%, 20%, 40%, 60%, 80%, 100% {
            transform: translateY(0);
            box-shadow: 0px 2px 1px 2px black;
        }
        50% {transform: translateY(-5px); box-shadow: 0px 4px 10px 3px black;}
    }
`