import java.util.*;

class Main {
    public static void main(String args[]) {
        Hang hm = new Hang();
        hm.Generate();
    }
}

class Hang {
    Random rd = new Random();
    Scanner sc = new Scanner(System.in);
    String s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    int n = s.length();
    char[] c = new char[6]; // Array for random letters
    char[] c1 = {'_', '_', '_', '_', '_', '_'}; // Array to display guessed letters
    int maxAttempts = 6; // Maximum allowed attempts

    void Generate() {
        // Generate a random 6-letter word
        for (int i = 0; i < 6; i++) {
            c[i] = s.charAt(rd.nextInt(n));
        }

        System.out.println("Guess the 6-letter word:");
        displayWord();
        Function();
    }

    void displayWord() {
        // Display the current state of the guessed word
        for (int i = 0; i < 6; i++) {
            System.out.print(c1[i] + " ");
        }
        System.out.println();
    }

    void Function() {
        int attempts = 0;

        // Loop until the word is guessed or attempts are exhausted
        while (attempts < maxAttempts && !isWordGuessed()) {
            System.out.println("Enter your guess (a single letter): ");
            char guess = sc.nextLine().toUpperCase().charAt(0);

            boolean correctGuess = false;

            // Check if the guessed letter is in the word
            for (int i = 0; i < 6; i++) {
                if (c[i] == guess && c1[i] == '_') {
                    c1[i] = guess;
                    correctGuess = true;
                }
            }

            // If the guess was incorrect, increment attempts
            if (!correctGuess) {
                attempts++;
                System.out.println("Wrong guess! Attempts left: " + (maxAttempts - attempts));
            }

            // Display the current state of the word
            displayWord();
        }

        // Check if the word was fully guessed
        if (isWordGuessed()) {
            System.out.println("You've guessed the word correctly.");
        } else {
            System.out.println("You've run out of attempts. The word was: " + Arrays.toString(c));
        }
    }

    boolean isWordGuessed() {
        for (char ch : c1) {
            if (ch == '_') {
                return false;
            }
        }
        return true;
    }
}
