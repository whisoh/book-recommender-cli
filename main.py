import argparse
import requests
from bs4 import BeautifulSoup

RECOMMENDATION_SITES = [
    "https://www.goodreads.com/",
    "https://www.nytimes.com/books/best-sellers/",
    "https://bookriot.com/",
    "https://www.penguinrandomhouse.com/",
    "https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155"
]

def ask_user_preferences():
    print("Let's find the perfect book for you!")
    mood = input("What is your current mood? (e.g., happy, sad, adventurous): ")
    interests = input("What are your interests? (e.g., science fiction, history, romance): ")
    genre = input("Do you have a preferred genre? (e.g., fantasy, thriller, non-fiction): ")
    return mood, interests, genre

def fetch_book_recommendations_based_on_preferences(mood, interests, genre):
    url = "https://example-book-recommendations.com"  # Replace with a real URL
    params = {
        'mood': mood,
        'interests': interests,
        'genre': genre
    }

    response = requests.get(url, params=params)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        books = []
        for book in soup.select('.book-item')[:5]:  # Limit to 5 suggestions
            title = book.select_one('.title').text.strip()
            author = book.select_one('.author').text.strip()
            books.append(f"{title} by {author}")
        return books
    else:
        print("Failed to fetch recommendations. Please try again later.")
        return []

def fetch_book_recommendations(genre=None, author=None):
    url = "https://example-book-recommendations.com"  # Replace with a real URL
    params = {}
    if genre:
        params['genre'] = genre
    if author:
        params['author'] = author

    response = requests.get(url, params=params)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        books = []
        for book in soup.select('.book-item'):  # Update selector based on actual website structure
            title = book.select_one('.title').text.strip()
            author = book.select_one('.author').text.strip()
            books.append(f"{title} by {author}")
        return books
    else:
        print("Failed to fetch recommendations. Please try again later.")
        return []

def main():
    parser = argparse.ArgumentParser(description="Book Recommender CLI Tool")
    parser.add_argument("--genre", type=str, help="Preferred book genre")
    parser.add_argument("--author", type=str, help="Preferred author")
    args = parser.parse_args()

    print("Welcome to the Book Recommender CLI Tool!")
    mood, interests, genre = ask_user_preferences()
    print("Fetching recommendations based on your preferences...")
    print("Fetching recommendations from the following sites:")
    for site in RECOMMENDATION_SITES:
        print(f"- {site}")
    recommendations = fetch_book_recommendations_based_on_preferences(mood, interests, genre)
    if recommendations:
        print("Here are some book recommendations for you:")
        for book in recommendations:
            print(f"- {book}")
    else:
        print("No recommendations found.")

if __name__ == "__main__":
    main()