import styles from "src/styles/posts.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Posts({ posts }) {
  console.log(posts);
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                src={eyecatch.url}
                alt=""
                layout="responsive"
                width={eyecatch.width}
                height={eyecatch.height}
                sizes="(min-width: 100px) 100px, 100vw"
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  );
}
