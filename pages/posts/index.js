import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs1",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is a the most popular framework for React - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs2",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is a the most popular framework for React - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs3",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is a the most popular framework for React - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs4",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is a the most popular framework for React - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs5",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is a the most popular framework for React - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
//     date: "2022-02-10",
//   },
// ];

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All My Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export default AllPostsPage;

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    // revalidate: 600,
  };
};
