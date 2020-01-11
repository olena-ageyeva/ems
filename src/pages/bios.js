import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Bio Page</h1>
    <div>
    <Link to="/">Home</Link> | <Link to="/bios">Bios</Link> |{" "}
      <Link to="/people-links">People Link</Link> |{" "}
      <Link to="/welcome-notes">Welcome Notes</Link> |{" "}
      <Link to="/reports">Reports</Link>
    </div>
    <p>Bio Page Content</p>
  </Layout>
)
