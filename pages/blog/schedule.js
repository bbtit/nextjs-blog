import { getPostBySlug } from "../../lib/api";
import PostHeader from "components/post-header";

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) {
  return (
    <article>
      <PostHeader title={title} subtitle="Blog Article" publish={publish} />
    </article>
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
