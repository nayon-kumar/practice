import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();
  return books.slice(0, 3).map((book) => ({ id: book.id }));
};

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/books/${id}`);
  const book = await res.json();
  console.log(book);
  return (
    <div>
      <p>Book details: {id}</p>
      <p>{book.title}</p>
      <p>${book.price}</p>
      <p>{book.rating}</p>
      <p>{book.publishedYear}</p>
    </div>
  );
};

export default BookDetailsPage;
