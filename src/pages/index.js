import Container from "components/container";
import Hero from "../../components/hero";
import Meta from "components/meta";
import { getAllPosts } from "lib/api";
import Posts from "components/posts";
import Pagination from "components/pagination";
import { eyecatchLocal } from "lib/constants";

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero title={"MyPage"} subtitle={"ブログ型アウトプットサイト"} imageOn />
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(4);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  }

  return {
    props: {
      posts: posts,
    },
  };
}
