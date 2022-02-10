import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">
        Read{" "}
        <Link href="/posts/first-post">
          <a>this page</a>
        </Link>
      </h1>
      {/* <img src="/images/background.jpg" alt="background" /> */}
      <Image
        src="/images/background.jpg"
        height={1200}
        width={1600}
        alt="background"
      />
    </>
  );
};
export default Home;
