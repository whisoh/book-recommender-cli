"use client";

import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { fetchBooks } from "../mocks/mockBooks";

export type Book = {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
  description?: string;
  genre?: string;
};

export default function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBooks()
      .then((data) => {
        setBooks(data);
      })
      .catch(() => setError("Failed to fetch books."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 bg-gradient-to-br from-blue-50 via-violet-100 to-purple-50">
      <h1 className="text-5xl font-extrabold mb-4 text-violet-700 drop-shadow">Book Recommender</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl text-center">
        Can’t decide what to read next? Get personalized book recommendations based on your preferences.
      </p>
      <BookList books={books} loading={loading} error={error} />
    </div>
  );
}
