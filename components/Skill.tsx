import Section from '../components/Section'
import Title from '../components/Title'
import Card from '../components/Card'
import styles from '../styles/Skill.module.scss'
import { Html5 } from '@styled-icons/boxicons-logos/Html5'
import { Css3 } from '@styled-icons/boxicons-logos/Css3'
import { Javascript } from '@styled-icons/boxicons-logos/Javascript'
import { Wordpress } from '@styled-icons/fa-brands/Wordpress'
import { Devices } from '@styled-icons/material-twotone/Devices'
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import { NextDotJs } from '@styled-icons/simple-icons/NextDotJs'
import { Firebase } from '@styled-icons/boxicons-logos/Firebase'
import { Salesforce } from '@styled-icons/fa-brands/Salesforce'
import { Certificate } from '@styled-icons/fa-solid/Certificate'

const Skill = () => {
  return (
    <Section id="skills" backgroundColor="#f7f7f7">
      <Title title="Skills" color="#ef476f" />
      <div className={styles.cardContainer}>
        <Card borderColor="#ef476f" title="web制作" experience={true}>
          <div className={styles.skill}>
            <Html5 size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            HTML
          </div>
          <div className={styles.skill}>
            <Css3 size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            CSS
          </div>
          <div className={styles.skill}>
            <Javascript size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            Javascript
          </div>
          <div className={styles.skill}>
            <Wordpress size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            Wordpress
          </div>
          <div className={styles.skill}>
            <Devices size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            Responsive
          </div>
        </Card>
        <Card borderColor="#ef476f" title="web開発" experience={false}>
          <div className={styles.skill}>
            <Javascript size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            Javascript
          </div>
          <div className={styles.skill}>
            <ReactLogo size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            React.js
          </div>
          <div className={styles.skill}>
            <NextDotJs size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            Next.js
          </div>
          <div className={styles.skill}>
            <Firebase size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            Firebase
          </div>
        </Card>
        <Card borderColor="#ef476f" title="salesforce開発" experience={true}>
          <div className={styles.skill}>
            <Salesforce size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            NoCode開発
          </div>
          <div className={styles.skill}>
            <Salesforce size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            Apex
          </div>
          <div className={styles.skill}>
            <Salesforce size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            Lightning Web Component
          </div>
          <div className={styles.skill}>
            <Salesforce size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            Visualforce
          </div>
          <div className={styles.skill}>
            <Certificate size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            認定アドミニストレーター
          </div>
          <div className={styles.skill}>
            <Certificate size={30} style={{ color: '#ef476f', marginRight: '5px' }} />
            認定 Experience Cloud コンサルタント
          </div>
        </Card>
      </div>
    </Section>
  )
}

export default Skill
