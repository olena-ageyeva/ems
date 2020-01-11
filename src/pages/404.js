import React from "react"
import styles from "./404.module.scss"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div className={styles.content}>
      <h1 className={styles.header}>404 Page</h1>
      <Link to="/">Home</Link>
      <p className={styles.errorMessage}>404 Page Content</p>
    </div>
  </Layout>
)
