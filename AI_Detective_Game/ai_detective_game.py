import random

class AIDetective:
    def __init__(self):
        self.case_solved = False
        self.clues = []
        self.suspects = ["Mr. Green", "Mrs. White", "Colonel Mustard", "Miss Scarlet"]
        self.weapons = ["Candlestick", "Knife", "Lead Pipe", "Revolver"]
        self.rooms = ["Library", "Kitchen", "Ballroom", "Conservatory"]
        self.solution = {
            "culprit": random.choice(self.suspects),
            "weapon": random.choice(self.weapons),
            "room": random.choice(self.rooms)
        }

    def introduce_game(self):
        print("Welcome, detective! I'm your AI assistant, here to help you solve a mysterious crime.")
        print("A murder has occurred at the mansion, and it's up to us to find the culprit, the murder weapon, and the room where it happened.")
        print("You can ask me questions, and I'll provide you with clues. When you're ready to make an accusation, just say 'Solve'.")
        print("Let's begin our investigation!\n")

    def get_clue(self):
        if len(self.clues) < 5:
            new_clue = random.choice([
                f"I found traces of {self.solution['weapon'].lower()} in the {self.solution['room'].lower()}.",
                f"{self.solution['culprit']} was seen near the {self.solution['room'].lower()} earlier.",
                f"A witness heard a commotion in the {self.solution['room'].lower()}.",
                f"{self.solution['culprit']} had a motive for the crime.",
                f"The {self.solution['weapon'].lower()} seems to be missing from its usual place."
            ])
            if new_clue not in self.clues:
                self.clues.append(new_clue)
                return new_clue
            else:
                return self.get_clue()
        else:
            return random.choice(self.clues)

    def solve_case(self, culprit, weapon, room):
        if (culprit == self.solution["culprit"] and
            weapon == self.solution["weapon"] and
            room == self.solution["room"]):
            self.case_solved = True
            return "Congratulations! You've solved the case!"
        else:
            return "I'm afraid that's not correct. Let's continue our investigation."

    def play(self):
        self.introduce_game()
        while not self.case_solved:
            user_input = input("What would you like to do? ").strip().lower()
            if user_input == "solve":
                culprit = input("Who is the culprit? ")
                weapon = input("What is the murder weapon? ")
                room = input("In which room did the murder occur? ")
                print(self.solve_case(culprit, weapon, room))
            elif user_input == "quit":
                print("Thank you for playing. The case remains unsolved.")
                break
            else:
                print(self.get_clue())

if __name__ == "__main__":
    game = AIDetective()
    game.play()