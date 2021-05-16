import styles from '../styles/Works.module.scss'
import Section from './Section'
import Title from './Title'
import Work from './Work'

const workInfos = [
  {
    key: '001',
    title: 'ポートフォリオサイト',
    src: '/images/portfolioImage.png',
    skills: ['React.js', 'Next.js'],
  },
  {
    key: '002',
    title: '口座開設サイト構築案件',
    src: '/images/noimage.png',
    skills: ['Salesforce', 'Visualforce', 'Apex'],
  },
  {
    key: '003',
    title: '業務用ポータルサイト構築案件',
    src: '/images/noimage.png',
    skills: ['Salesforce', 'Lightning Web Component', 'Apex'],
  },
]

const Works = () => {
  return (
    <Section backgroundColor="#ffffff" id="works">
      <Title title="Works" color="#00adb5" />
      <div className={styles.container}>
        {workInfos.map((workInfo) => {
          return <Work key={workInfo.key} title={workInfo.title} src={workInfo.src} skills={workInfo.skills} />
        })}
      </div>
    </Section>
  )
}

export default Works
