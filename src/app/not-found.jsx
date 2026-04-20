import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <p className="text-center font-bold text-3xl mt-30">
        The page is not found
      </p>
      <div className="flex items-center justify-center">
        <Link className="btn btn-primary mt-4" href={"/"}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
