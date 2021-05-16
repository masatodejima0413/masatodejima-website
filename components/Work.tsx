import styles from '../styles/Work.module.scss'

const Work = ({ title, src, skills }) => {
  return (
    <div className={styles.container}>
      <img src={src} className={styles.image} />
      <p className={styles.title}>{title}</p>
      <div className={styles.workContainer}>
        {skills.map((skill, index) => {
          return (
            <div key={index} className={styles.skill}>
              {skill}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work
