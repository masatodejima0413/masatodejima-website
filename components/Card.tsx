import { useState } from 'react'
import styles from '../styles/Card.module.scss'
import { motion } from 'framer-motion'
import { ArrowheadDownOutline } from '@styled-icons/evaicons-outline/ArrowheadDownOutline'
import { ArrowheadUpOutline } from '@styled-icons/evaicons-outline/ArrowheadUpOutline'

const Card = ({ borderColor, title, experience, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.card} style={{ borderColor: `${borderColor}` }}>
      <h2 className={styles.title}>{title}</h2>
      {experience && <div className={styles.isExperienced}>業務経験あり</div>}
      {!experience && <div className={styles.isNotExperienced}>業務経験なし</div>}
      {isOpen && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          {children}
        </motion.div>
      )}
      {isOpen ? (
        <motion.div animate={{ y: 10 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.5 }}>
          <ArrowheadUpOutline className={styles.arrow} onClick={() => setIsOpen(false)} />
        </motion.div>
      ) : (
        <motion.div animate={{ y: 10 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.5 }}>
          <ArrowheadDownOutline className={styles.arrow} onClick={() => setIsOpen(true)} />
        </motion.div>
      )}
    </div>
  )
}

export default Card
