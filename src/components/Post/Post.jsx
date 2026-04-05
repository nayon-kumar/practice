import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="border-2 border-gray-300 rounded-2xl p-5 mt-5 capitalize">
      <p>{post.title}</p>
      <Link to={`/posts/${post.id}`} className="btn btn-primary mt-3">
        Show Details
      </Link>
      <button onClick={() => handleClick(post.id)} className="btn ml-4">
        Details of {post.id}
      </button>
    </div>
  );
};

export default Post;
