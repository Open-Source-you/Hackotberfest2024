import random

def number_guessing_game():
    # Generate a random number between 1 and 100
    number_to_guess = random.randint(1, 100)
    attempts = 0
    print("Welcome to the Number Guessing Game!")
    print("I have picked a number between 1 and 100.")
    print("Can you guess what it is?")

    while True:
        # Ask the player for a guess
        player_guess = input("Enter your guess: ")
        
        try:
            # Convert the guess to an integer
            player_guess = int(player_guess)
        except ValueError:
            print("Please enter a valid number.")
            continue

        attempts += 1
        
        # Check the player's guess
        if player_guess < number_to_guess:
            print("Too low! Try again.")
        elif player_guess > number_to_guess:
            print("Too high! Try again.")
        else:
            print(f"Congratulations! You've guessed the number in {attempts} attempts.")
            break

# Start the game
number_guessing_game()
