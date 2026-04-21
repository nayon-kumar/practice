import React from "react";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  return res.json();
};

const PostPage = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await res.json();
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      <p>Total posts: {posts.length}</p>
    </div>
  );
};

export default PostPage;
