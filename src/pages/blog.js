import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      bonjour du blog
      <Link to="/">back home</Link>
    </Layout>
  )
}

export default blog
