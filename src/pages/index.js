import React from 'react'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import {BlogPostCols} from '../components/common/style'
import LatestPosts from '../components/latest-posts/latest-posts'
import AdsSidebar from '../components/ads/ads-sidebar'
import SEO from '../components/seo/seo'

function Index() {
  return (
    <Layout>
      <SEO title="Latest Post" />
      <Hero />
      <BlogPostCols>
        <LatestPosts />
        <AdsSidebar />
      </BlogPostCols>
    </Layout>
  )
}

export default Index
