import styles from '../styles/LogoWithName.module.scss'
import Image from 'next/image'


const LogoWithName = () => {
    return (
        <div className={styles.wrapper}>
            <Image src="/images/logo.svg" alt="logoWithName" width={70} height={70} />
            <p><span className={styles.irisblue}>masato</span><span className={styles.darkpink}>dejima</span></p>
        </div>
    )
}

export default LogoWithName