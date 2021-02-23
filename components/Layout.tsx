import React from 'react'
import styles from '../styles/Layout.module.scss'
import { motion } from 'framer-motion'

const Layout = ({ children }) => {
  return (
    <>
      <motion.div
        className={styles.background_back}
        animate={{
          width: '100%',
          transitionEnd: {
            display: 'none',
          },
        }}
      ></motion.div>
      <motion.div className={styles.background_front} animate={{ width: '100%' }} transition={{ delay: 0.3 }}>
        <motion.div className={styles.children} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          {children}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Layout
