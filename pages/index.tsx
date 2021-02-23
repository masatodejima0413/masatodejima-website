import React from 'react'
import Head from 'next/head'
import Home from './Home'

export default function Index() {
  return (
    <div>
      <Head>
        <title>masatodejima.com</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Home />
    </div>
  )
}
