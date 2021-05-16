import Link from 'next/link'
import styles from '../styles/Header.module.scss'
import LogoWithName from './LogoWithName'

const Header = () => {
  return (
    <div className={styles.header_container}>
      <Link href="/">
        <a>
          <LogoWithName />
        </a>
      </Link>
      <ul className={styles.header_linklist}>
        {/* <Link href="/">
          <a>
            <li>Home</li>
          </a>
        </Link> */}
        <Link href="/">
          <a>
            <li>About</li>
          </a>
        </Link>
        <Link href="#skills">
          <a>
            <li>Skills</li>
          </a>
        </Link>
        <Link href="#works">
          <a>
            <li>Works</li>
          </a>
        </Link>
        <Link href="#contact">
          <a>
            <li>Contact</li>
          </a>
        </Link>
      </ul>
    </div>
  )
}

export default Header
