import React from 'react'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import Header from '../components/Header'
import About from '../components/About'
import Skill from '../components/Skill'
import Works from '../components/Works'
import Contact from './Contact'
const Home = () => {
  return (
    <div className={styles.background}>
      <Header />
      <About />
      <Skill />
      <Works />
      <Contact />
    </div>
  )
}

export default Home
