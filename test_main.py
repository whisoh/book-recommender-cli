import unittest
from unittest.mock import patch, MagicMock
from main import ask_user_preferences, fetch_book_recommendations_based_on_preferences

class TestBookRecommenderCLI(unittest.TestCase):

    @patch('builtins.input', side_effect=['happy', 'science fiction', 'fantasy'])
    def test_ask_user_preferences(self, mock_input):
        mood, interests, genre = ask_user_preferences()
        self.assertEqual(mood, 'happy')
        self.assertEqual(interests, 'science fiction')
        self.assertEqual(genre, 'fantasy')

    @patch('requests.get')
    def test_fetch_book_recommendations_based_on_preferences(self, mock_get):
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.text = '''
        <div class="book-item">
            <div class="title">Book Title 1</div>
            <div class="author">Author 1</div>
        </div>
        <div class="book-item">
            <div class="title">Book Title 2</div>
            <div class="author">Author 2</div>
        </div>
        '''
        mock_get.return_value = mock_response

        books = fetch_book_recommendations_based_on_preferences('happy', 'science fiction', 'fantasy')
        self.assertEqual(len(books), 2)
        self.assertIn("Book Title 1 by Author 1", books)
        self.assertIn("Book Title 2 by Author 2", books)

if __name__ == '__main__':
    unittest.main()