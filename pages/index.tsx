import React from 'react'
import Head from 'next/head'
import Home from '../components/Home'

export default function Index() {
  return (
    <div>
      <Head>
        <title>masatodejima.com</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Home />
    </div>
  )
}
