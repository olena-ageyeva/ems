import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

//HeaderLink component
const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>
    {props.text}
  </Link>
)

const SocialButton = props => {
  let style = ""
  let url = ""

  if (props.site === "twitter") {
    style = styles.buttonTwitter
    url = "https://twitter.com/" + props.username
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={style}>{props.children}&nbsp;</div>
    </a>
  )
}

export default () => (
  <header className={styles.container}>
    <div className={styles.row}>
      <Link to="/">Home</Link>
      <SocialButton site="twitter" username="olena"/>
    </div>
    <div className={styles.row}>
      <HeaderLink to="/" text="Home" /> <HeaderLink to="/bios" text="Bios" />
      <HeaderLink to="/people-links" text="People Link" />
      <HeaderLink to="/welcome-notes" text="Welcome Notes" />
      <HeaderLink to="/reports" text="Reports" />
    </div>
  </header>
)
