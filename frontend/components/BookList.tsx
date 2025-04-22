import BookCard, { Book } from "./BookCard";

interface BookListProps {
  books: Book[];
  loading?: boolean;
  error?: string | null;
}

export default function BookList({ books, loading, error }: BookListProps) {
  if (loading) {
    return <div className="w-full flex justify-center items-center py-10"><span className="loader" /></div>;
  }
  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }
  if (!books.length) {
    return <div className="text-gray-500 text-center py-4">No books found.</div>;
  }
  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
