import Head from "next/head";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Index() {
  const { scrollYProgress } = useViewportScroll();
  return (
    <div>
      <Head>
        <title>masatodejima.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
