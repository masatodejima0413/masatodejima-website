import React from 'react'
import styles from '../styles/Home.module.scss'
import Layout from './Layout'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Works from './Works'
import Contact from './Contact'
const Home = () => {
  return (
    <div className={styles.background}>
      <Header />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  )
}

export default Home
