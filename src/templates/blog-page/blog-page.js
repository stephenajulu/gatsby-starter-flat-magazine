import React from 'react'
import BlogPosts from './blog-posts'
import Layout from '../../components/layout/layout'
import {BlogPostCols} from '../../components/common/style'
import AdsSidebar from '../../components/ads/ads-sidebar'
import {graphql} from 'gatsby'
import Pagination from '../../components/pagination/pagination'
import SEO from '../../components/seo/seo'

export const query = graphql`
  query($skip: Int) {
    allSanityPost(
      skip: $skip
      limit: 10
      sort: {fields: publishedAt, order: DESC}
    ) {
      edges {
        node {
          title
          slug {
            current
          }
          mainImage {
            asset {
              url
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          excerpt
          authors {
            author {
              name
            }
          }
          publishedAt(fromNow: true)
        }
      }
    }
  }
`

function BlogPage({data, pageContext}) {
  const {current, pages} = pageContext
  return (
    <Layout>
      <SEO title="Blog Archive" />
      <BlogPostCols>
        <BlogPosts data={data} />
        <AdsSidebar />
      </BlogPostCols>
      <Pagination currentPage={current} totalPage={pages} />
    </Layout>
  )
}

export default BlogPage
