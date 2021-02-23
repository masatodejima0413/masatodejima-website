import React from 'react'
import Link from 'next/link'
import Card from './Card'
import styles from '../styles/PageLinks.module.scss'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'
import { motion } from 'framer-motion'

const PageLinks = () => {
  return (
    <ul className={styles.pagelinks_container}>
      <motion.li
        className={styles.pagelink}
        whileHover={{
          scale: 1.2,
          color: 'var(--c-darkpink)',
        }}
      >
        <Link href="/About">
          <a>
            <Card>
              <p className={styles.card_title}>about</p>
              <ArrowRight size={30} />
            </Card>
          </a>
        </Link>
      </motion.li>
      <li className={styles.pagelink}>
        <Link href="/Portfolio">
          <a>Portfolio</a>
        </Link>
      </li>
      <li className={styles.pagelink}>
        <Link href="/Contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  )
}

export default PageLinks
