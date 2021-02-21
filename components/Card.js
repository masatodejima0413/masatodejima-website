import React, { Children } from 'react'
import styles from '../styles/Card.module.scss'

const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>
}

export default Card
