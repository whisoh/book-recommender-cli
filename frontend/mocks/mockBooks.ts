import { Book } from "../components/BookCard";

export type BookWithReason = Book & { reason: string };

export const mockBooks: BookWithReason[] = [
  {
    id: "1",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    coverUrl: "/placeholder.png",
    description: "A classic book on software engineering best practices.",
    genre: "Programming",
    reason: "Essential for anyone who wants to write better, maintainable code and grow as a developer."
  },
  {
    id: "2",
    title: "Clean Code",
    author: "Robert C. Martin",
    coverUrl: "/placeholder.png",
    description: "A handbook of agile software craftsmanship.",
    genre: "Programming",
    reason: "Teaches you how to write code that is easy to read, understand, and maintain."
  },
  {
    id: "3",
    title: "Atomic Habits",
    author: "James Clear",
    coverUrl: "/placeholder.png",
    description: "A guide to building good habits and breaking bad ones.",
    genre: "Self-help",
    reason: "Offers actionable strategies to build good habits and improve your life incrementally."
  }
];

export async function fetchBooks(): Promise<BookWithReason[]> {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 800));
  return mockBooks;
}
