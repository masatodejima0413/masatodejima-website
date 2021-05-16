import styles from '../styles/ProfileText.module.scss'

const ProfileText = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>出島 賢人 / Masato Dejima</div>
      <div>
        都内システム開発会社勤務/24歳/慶應義塾大学卒
        <br />
        大学在学中にweb制作を独学、複数社とパートナー関係を結びweb制作に関する仕事をお手伝いさせて頂きました。
        <br />
        現在は勤務先にて、主にSalesforce開発の業務を行っています。
      </div>
    </div>
  )
}

export default ProfileText
