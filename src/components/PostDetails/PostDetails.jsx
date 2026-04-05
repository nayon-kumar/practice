import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();

  const paramsInfo = useParams();
  console.log(paramsInfo);

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <p className="font-bold capitalize">
        Title {paramsInfo.postId}: {post.title}{" "}
      </p>
      <p>Description: {post.body} </p>
      <button onClick={handleClick} className="btn">
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
