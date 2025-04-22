import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import BookCard, { Book } from "../components/BookCard";

describe("BookCard", () => {
  const book: Book = {
    id: "1",
    title: "Test Book",
    author: "Test Author",
    coverUrl: "/placeholder.png",
    description: "Test description.",
    genre: "Test"
  };
  it("renders book details", () => {
    render(<BookCard book={book} />);
    // Title
    expect(screen.getByText("Test Book")).toBeInTheDocument();
    // Author (standalone, not "by Test Author")
    expect(screen.getByText("Test Author")).toBeInTheDocument();
    // Genre badge
    expect(screen.getByText("TEST")).toBeInTheDocument();
    // Summary (allow for curly quotes)
    expect(screen.getByText(/Test description/)).toBeInTheDocument();
  });
});
