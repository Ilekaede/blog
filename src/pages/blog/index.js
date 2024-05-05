import Container from "components/container";
import Hero from "components/hero";
import Meta from "components/meta";
import { getAllPosts } from "lib/api";
import Posts from "components/posts";

export default function Blog({ posts }) {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title={"Blog"} subtitle={"Recent Post"} />
      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
}
