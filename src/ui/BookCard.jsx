import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  console.log(book);
  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p>{book.description}</p>
        <p>${book.price}</p>
        <p>{book.publishedYear}</p>
        <div className="justify-end card-actions">
          <Link href={`/books/${book.id}`} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
