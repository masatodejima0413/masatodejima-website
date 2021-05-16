import ProfileImage from './ProfileImage'
import ProfileText from './ProfileText'
import Section from '../components/Section'
import styles from '../styles/About.module.scss'

const About = () => {
  return (
    <Section id="about" backgroundColor="#ffffff">
      <div className={styles.container}>
        <ProfileText />
        <ProfileImage />
      </div>
    </Section>
  )
}

export default About
