import argparse
import requests
from bs4 import BeautifulSoup
import json

RECOMMENDATION_SITES = [
    "https://www.goodreads.com/",
    "https://www.nytimes.com/books/best-sellers/",
    "https://bookriot.com/",
    "https://www.penguinrandomhouse.com/",
    "https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155"
]

GENRES = [
    "Romance",
    "Fantasy",
    "Romantasy (Romantic Fantasy)",
    "Mystery & Psychological Thrillers",
    "Historical Fiction",
    "Science Fiction",
    "Climate Fiction (Cli-Fi)",
    "Literary Fiction",
    "Young Adult (YA) Fantasy",
    "Horror Romance",
    "Afrofuturism",
    "Techno-Thrillers",
    "Speculative Non-Fiction",
    "Cozy Fantasy",
    "Gothic Literature",
    "Nostalgia-Driven Mysteries",
    "Memoirs & Literary Non-Fiction",
    "Dark Romance",
    "Urban Fantasy",
    "Interactive & Multimedia Storytelling"
]

INTERESTS = [
    "Love stories",
    "Magical worlds",
    "Romantic adventures",
    "Suspenseful mysteries",
    "Historical events",
    "Futuristic technology",
    "Environmental themes",
    "Character-driven narratives",
    "Coming-of-age tales",
    "Spooky romances",
    "African culture and history",
    "Cyber warfare",
    "Hypothetical scenarios",
    "Comfort and community",
    "Eerie settings",
    "Nostalgic whodunits",
    "Personal experiences",
    "Dark and complex relationships",
    "Urban magic",
    "Interactive storytelling"
]

MOODS = [
    "Happy",
    "Sad",
    "Adventurous",
    "Relaxed",
    "Excited",
    "Nostalgic",
    "Curious",
    "Romantic",
    "Thrilled",
    "Reflective",
    "Spooky",
    "Empowered",
    "Hopeful",
    "Melancholic",
    "Inspired",
    "Playful",
    "Mysterious",
    "Challenged",
    "Comforted",
    "Intrigued"
]

def display_genres():
    print("Here are some popular book genres to choose from:")
    for i, genre in enumerate(GENRES, start=1):
        print(f"{i}. {genre}")

def display_interests():
    print("Here are some popular interests to choose from:")
    for i, interest in enumerate(INTERESTS, start=1):
        print(f"{i}. {interest}")

def display_moods():
    print("Here are some common moods to choose from:")
    for i, mood in enumerate(MOODS, start=1):
        print(f"{i}. {mood}")

def ask_user_preferences():
    print("Let's find the perfect book for you!")
    display_genres()
    display_moods()
    mood_choice = input("Choose a mood by number or name from the list above: ")
    mood = MOODS[int(mood_choice) - 1] if mood_choice.isdigit() else mood_choice
    display_interests()
    interests_choice = input("Choose an interest by number or name from the list above: ")
    interests = INTERESTS[int(interests_choice) - 1] if interests_choice.isdigit() else interests_choice
    genre_choice = input("Choose a genre by number or name from the list above: ")
    genre = GENRES[int(genre_choice) - 1] if genre_choice.isdigit() else genre_choice
    return mood, interests, genre

def fetch_book_recommendations_based_on_preferences(mood, interests, genre):
    url = "https://www.googleapis.com/books/v1/volumes"
    query = f"{mood} {interests} {genre}".strip()
    params = {
        'q': query,
        'maxResults': 5
    }

    response = requests.get(url, params=params)
    if response.status_code == 200:
        data = response.json()
        books = []
        for item in data.get('items', []):
            title = item['volumeInfo'].get('title', 'Unknown Title')
            authors = item['volumeInfo'].get('authors', ['Unknown Author'])
            books.append(f"{title} by {', '.join(authors)}")
        return books
    else:
        print("Failed to fetch recommendations. Please try again later.")
        return []

def fetch_book_recommendations(genre=None, author=None):
    url = "https://www.googleapis.com/books/v1/volumes"
    query = f"{genre} {author}".strip()
    params = {
        'q': query,
        'maxResults': 5
    }

    response = requests.get(url, params=params)
    if response.status_code == 200:
        data = response.json()
        books = []
        for item in data.get('items', []):
            title = item['volumeInfo'].get('title', 'Unknown Title')
            authors = item['volumeInfo'].get('authors', ['Unknown Author'])
            books.append(f"{title} by {', '.join(authors)}")
        return books
    else:
        print("Failed to fetch recommendations. Please try again later.")
        return []

def fetch_openlibrary_recommendations(query):
    url = f"https://openlibrary.org/search.json?q={query}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        books = []
        for doc in data.get('docs', [])[:5]:
            title = doc.get('title', 'Unknown Title')
            author = doc.get('author_name', ['Unknown Author'])[0]
            books.append(f"{title} by {author}")
        return books
    else:
        print("Failed to fetch recommendations from OpenLibrary. Please try again later.")
        return []

def fetch_nytimes_recommendations(list_name):
    api_key = "your-nytimes-api-key"  # Replace with your NYT API key
    url = f"https://api.nytimes.com/svc/books/v3/lists/current/{list_name}.json?api-key={api_key}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        books = []
        for book in data.get('results', {}).get('books', []):
            title = book.get('title', 'Unknown Title')
            author = book.get('author', 'Unknown Author')
            books.append(f"{title} by {author}")
        return books
    else:
        print("Failed to fetch recommendations from NYTimes. Please try again later.")
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