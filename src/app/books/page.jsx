import BookCard from "@/ui/BookCard";

const BooksPage = async () => {
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();
  return (
    <div>
      <p>Books: {books.length}</p>
      <div className="grid grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
