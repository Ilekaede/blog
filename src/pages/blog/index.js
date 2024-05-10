import Container from "components/container";
import Hero from "components/hero";
import Meta from "components/meta";
import { getAllPosts } from "lib/api";
import Posts from "components/posts";
import { eyecatchLocal } from "lib/constants";

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
  console.log(posts);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  }
  // console.log(posts);

  return {
    props: {
      posts: posts,
    },
  };
}
