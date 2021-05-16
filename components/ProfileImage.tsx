import styles from '../styles/ProfileImage.module.scss'

const ProfileImage = () => {
  return (
    <div className={styles.profileimage_container}>
      <img src="/images/profile.jpg" className={styles.profileimage} />
    </div>
  )
}

export default ProfileImage
