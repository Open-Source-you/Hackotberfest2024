import random

def generate_random_word():
    word_list = [
        "apple", "banana", "cherry", "date", "elderberry",
        "fig", "grape", "honeydew", "kiwi", "lemon"
    ]
    random_word = random.choice(word_list)  # Pick a random word
    return random_word

# Generate a random word
print(generate_random_word())
