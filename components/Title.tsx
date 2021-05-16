import React from 'react'
import styles from '../styles/Title.module.scss'

const Title = ({ title, color }) => {
  return (
    <h1 className={styles.title} style={{ color: `${color}` }}>
      {title}
    </h1>
  )
}

export default Title
