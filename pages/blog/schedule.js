import { client, getPostBySlug } from "../../lib/api";

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}

export async function getStaticProps() {
  const slug = "schedule";
  const post = await getPostBySlug(slug);
  console.log(`-- getPostBySlug --`);
  console.log(post);

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  };
}
