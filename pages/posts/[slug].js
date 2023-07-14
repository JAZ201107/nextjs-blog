import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-util";

const PostDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent
        slug={props.post.slug}
        image={props.post.image}
        title={props.post.title}
        content={props.post.content}
      />
    </>
  );
};

export default PostDetailPage;

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
  };
};

export const getStaticPaths = async () => {
  const postFilenames = getPostFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  const params = slugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths: params,
    fallback: "blocking",
  };
};
