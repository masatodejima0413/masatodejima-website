import styles from "../styles/Layout.module.scss";
import { motion } from "framer-motion";

const Layout = ({ title, children }) => {
  return (
    <>
      <motion.div
        className={styles.background_back}
        animate={{ width: "100%" }}
      ></motion.div>
      <motion.div
        className={styles.background_front}
        animate={{ width: "100%" }}
        transition={{ delay: 0.3 }}
      >
        <motion.h1
          className={styles.title}
          animate={{ fontSize: "64px" }}
          transition={{ delay: 0.6 }}
        >
          {title}
        </motion.h1>
        <motion.div
          className={styles.children}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Layout;
