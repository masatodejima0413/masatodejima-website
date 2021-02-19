import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div className={styles.background}>
      {/* <motion.div
        animate={{ scale: 0.5 }}
        transition={{ duration: 2 }}
        className={styles.box}
      >
        BOX
      </motion.div> */}
      <Layout title="masatodejima.com">
        <ul>
          <li>
            <Link href="/About">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/Portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </Layout>
    </div>
  );
};

export default Home;
