import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
  return (
    <div className="border-2 border-gray-300 rounded-2xl p-5 mt-5 capitalize">
      <p>{post.title}</p>
      <Link to={`/posts/${post.id}`} className="btn btn-primary mt-3">
        Show Details
      </Link>
    </div>
  );
};

export default Post;
