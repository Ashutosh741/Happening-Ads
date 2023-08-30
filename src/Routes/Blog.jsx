import React from 'react'
import Header from '../Pages/Header'
import Banner from '../Pages/Banner'
import BlogTab from '../Pages/BlogTab'
import BlogCard from '../Pages/BlogCard'
import BlogBanner from '../Pages/BlogBanner'

const Blog = () => {
  return (
    <div>
      <Header/>
      <BlogBanner/>
      <BlogTab/>
      {/* <BlogCard/> */}
    </div>
  )
}

export default Blog
