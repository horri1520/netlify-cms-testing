import React from "react"
import { graphql, Link } from "gatsby"
// ↑にgraphqlを。gatsbyがつくってくれてるものなので安心して使います。詳しくは公式に。
// dataがあったらすぐ「あーgraphqlのことね」とわかってくれるGatsbyの優しさに夢女る。

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// Imageも↑のLinkもまだ使っていませんが今後のためにステイさせておいていいとおもいます。

export default ({ data }) => { // export defaultは１コンポーネント１回限り！とかいうので、こんなかんじにしときます
  console.log(data)　//なくてもいいです、気になったのでいれただけです。
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>タイトルとか入れるといい</h1>
        <h5>{ data.allMarkdownRemark.totalCount }</h5>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3>{ node.frontmatter.title } * { node.frontmatter.date }</h3>
              <p>{node.excerpt}</p>
            </div>

          ))
        }
      </div>

  </Layout>
)}

// ここに queryを定義！！graphqlしてあげるだけで理解してくれるGatsbyまじサンキュー。
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`