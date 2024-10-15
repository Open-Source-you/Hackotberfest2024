import random

class MysteryAdventure:
    def __init__(self):
        self.location = "mansion"
        self.inventory = []
        self.game_over = False

    def start_game(self):
        print("Welcome to Mystery Adventure!")
        print("You are a detective trying to solve a mystery in an old mansion.")
        self.choose_path()

    def choose_path(self):
        while not self.game_over:
            print(f"\nYou are currently at the {self.location}.")
            print("Where would you like to go?")
            print("1. Explore the library")
            print("2. Go to the basement")
            print("3. Investigate the garden")
            print("4. Check your inventory")
            print("5. Exit the game")

            choice = input("Enter the number of your choice: ")

            if choice == "1":
                self.explore_library()
            elif choice == "2":
                self.go_basement()
            elif choice == "3":
                self.investigate_garden()
            elif choice == "4":
                self.check_inventory()
            elif choice == "5":
                self.end_game()
            else:
                print("Invalid choice. Please try again.")

    def explore_library(self):
        print("You enter the library filled with dusty books.")
        found_item = random.choice(["a key", "a mysterious book", "nothing"])
        if found_item != "nothing":
            print(f"You found {found_item}!")
            self.inventory.append(found_item)
        else:
            print("You found nothing of interest.")
    
    def go_basement(self):
        print("You descend into the dark basement.")
        if "a key" in self.inventory:
            print("You use the key to unlock a hidden door. You've discovered a secret room!")
            self.game_over = True
            print("Congratulations! You solved the mystery!")
        else:
            print("The door is locked. You need to find a key to proceed.")

    def investigate_garden(self):
        print("You stroll through the garden and discover some clues.")
        clue_found = random.choice(["a footprint", "a piece of fabric", "nothing"])
        if clue_found != "nothing":
            print(f"You found {clue_found}!")
            self.inventory.append(clue_found)
        else:
            print("You found nothing unusual in the garden.")

    def check_inventory(self):
        if self.inventory:
            print("Your inventory contains: " + ", ".join(self.inventory))
        else:
            print("Your inventory is empty.")

    def end_game(self):
        print("Thank you for playing! Goodbye!")
        self.game_over = True

if __name__ == "__main__":
    game = MysteryAdventure()
    game.start_game()
