import styles from '../styles/Contact.module.scss'
import Title from '../components/Title'
import Section from '../components/Section'
import { MailSend } from '@styled-icons/boxicons-regular/MailSend'

const Contact = () => {
  return (
    <Section id="contact" backgroundColor="#f7f7f7">
      <Title title="Contact" color="#ef476f" />
      <MailSend className={styles.mailLogo} />
      <a href="mailto:masatodejima@gmail.com" className={styles.mailaddress}>
        masatodejima@gmail.com
      </a>
    </Section>
  )
}

export default Contact
