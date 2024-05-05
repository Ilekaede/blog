export function prevNextPost(allSlugs, currentSlug) {
  const numberOfPosts = allSlugs.length;
  const index = allSlugs.findIndex(({ slug }) => slug === currentSlug);

  const prevPost =
    index + 1 === numberOfPosts ? { title: "", slug: "" } : allSlugs[index + 1]; //1つ前の記事が見つからない場合は無を返す
  const nextPost = index === 0 ? { title: "", slug: "" } : allSlugs[index - 1]; //1つ先の記事が見つからない場合は無を返す

  return [prevPost, nextPost];
}
