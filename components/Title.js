import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Title.module.scss'

const Title = ({ title }) => {
  return (
    <motion.h1 className={styles.title} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
      {title}
    </motion.h1>
  )
}

export default Title
