import React from "react"
// import "./navbar.css"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>I am a navbar</h1>
      <div className={styles.links}>i'm a navbar link</div>
    </div>
  )
}

export default Navbar
