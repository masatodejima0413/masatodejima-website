import styles from '../styles/Portfolio.module.scss'
import React from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title'

const Portfolio = () => {
  return (
    <Layout>
      <Title title="Portfolio" />
      <div>this is my portfolio</div>
    </Layout>
  )
}

export default Portfolio