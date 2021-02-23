import React from 'react'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Layout from '../components/Layout'
import Title from '../components/Title'
import PageLinks from '../components/PageLinks'

const Home = () => {
  return (
    <div className={styles.background}>
      <Layout>
        <Image src="/images/logo.svg" alt="logo" width={200} height={200} />
        <Title title="masatodejima.com" />
        <PageLinks />
      </Layout>
    </div>
  )
}

export default Home
