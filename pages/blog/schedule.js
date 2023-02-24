import { getPostBySlug } from "../../lib/api";
import PostHeader from "components/post-header";
import Image from "next/legacy/image";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "../../components/two-column";
import PostBody from "../../components/post-body";
import ConvertBody from "../../components/convert-body";

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
        <TwoColumnSidebar></TwoColumnSidebar>
      </TwoColumn>
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
