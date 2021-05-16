import styles from '../styles/Section.module.scss'

const Section = ({ children, backgroundColor, id }) => {
  return (
    <div id={id} className={styles.container} style={{ backgroundColor: `${backgroundColor}` }}>
      {children}
    </div>
  )
}

export default Section
