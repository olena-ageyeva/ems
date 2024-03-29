import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Employee Management System</h1>
    <div>
      <Link to="/">Home</Link> | <Link to="/bios">Bios</Link> |{" "}
      <Link to="/people-link">People Link</Link> |{" "}
      <Link to="/welcome-notes">Welcome Notes</Link> |{" "}
      <Link to="/reports">Reports</Link>
    </div>
  </Layout>
)
