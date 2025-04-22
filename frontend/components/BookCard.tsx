import Image from "next/image";
import { FaInfoCircle, FaLightbulb } from "react-icons/fa";

export type Book = {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
  description?: string;
  genre?: string;
  reason?: string;
};

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 rounded-2xl shadow-lg border border-violet-100 overflow-hidden my-6 min-h-[160px] transition-transform hover:scale-[1.025] hover:shadow-2xl hover:border-pink-200">
      {/* Left: Book Info Box with light accent and genre badge */}
      <div className="flex flex-col justify-between items-center bg-gradient-to-br from-violet-100 via-blue-100 to-pink-100 px-6 py-6" style={{ width: 240, minWidth: 240, minHeight: 160, height: '100%' }}>
        <div className="w-full flex flex-col items-center">
          <div className="text-2xl mb-2 text-center break-words w-full">📘 <span className="font-bold text-lg text-violet-700">{book.title}</span></div>
          <div className="text-md text-gray-700 text-center break-words w-full">✍️ <span className="font-semibold">{book.author}</span></div>
        </div>
        {/* Genre badge or book icon to fill space */}
        <div className="mt-4 flex items-center justify-center w-full min-h-[28px]">
          {book.genre ? (
            <span className="inline-block text-xs bg-violet-200 text-violet-700 rounded-full px-3 py-1 font-semibold uppercase tracking-wider">{book.genre}</span>
          ) : (
            <span className="text-2xl opacity-40">📚</span>
          )}
        </div>
      </div>
      {/* Right: Summary */}
      <div className="flex-1 flex flex-col justify-center px-8 py-8 h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="text-lg font-semibold mb-2 flex items-center gap-2 text-violet-700">
            <span role="img" aria-label="summary">📖</span> Summary of the book:
          </div>
          <div className="text-gray-700 text-base italic border-l-4 border-violet-300 pl-4 bg-white/60 rounded">
            “{book.description}”
          </div>
        </div>
      </div>
    </div>
  );
}
