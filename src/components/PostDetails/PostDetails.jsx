import React from "react";
import { useLoaderData } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  return (
    <div>
      <p className="font-bold capitalize">Title: {post.title} </p>
      <p>Description: {post.body} </p>
    </div>
  );
};

export default PostDetails;
