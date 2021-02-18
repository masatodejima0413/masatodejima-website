import Head from "next/head";
import Home from "../components/Home";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
