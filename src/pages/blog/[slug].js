import { getPostBySlug, getAllSlugs } from "lib/api";
import Container from "components/container";
import PostHeader from "components/post-header";
import PostBody from "components/post-body";
import ConvertBody from "components/convert-body";
import PostCategories from "components/post-categories";
import { extractText } from "lib/extract-text";
import Meta from "components/meta";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";
import { eyecatchLocal } from "lib/constants";
import { prevNextPost } from "lib/prev-next-post";
import Pagination from "components/pagination";
import Image from "next/image";

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}) {
  return (
    <Container>
      <Meta pageTitle={title} pageDesc={description} />
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs();
  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug; // urlの一番後ろを取得
  // console.log(slug);
  const post = await getPostBySlug(slug); //slugでapi叩いてデータを取得
  // console.log(post);

  const description = extractText(post.content);
  const eyecatch = post.eyecatch ?? eyecatchLocal;

  const allSlugs = await getAllSlugs();
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug);
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  };
}
