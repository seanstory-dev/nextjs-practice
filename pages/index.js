import Link from "next/link"; /* a 태그는 새로고침 발생 */

const Home = () => {
  return (
    <h1 className="title">
      Read{" "}
      <Link href="/posts/first-post">
        <a>this page</a>
      </Link>
    </h1>
  );
};
export default Home;
