# This entrypoint file to be used in development. Start by reading README.md
from RPS_game import play, mrugesh, abbey, quincy, kris, human, random_player
from RPS import player
from unittest import main

# play(player, quincy, 1000)
# play(player, abbey, 1000, verbose=True)
# play(player, kris, 1000)
# play(player, mrugesh, 500)

# Uncomment line below to play interactively against a bot:
# play(human, abbey, 20, verbose=True)

# Uncomment line below to play against a bot that plays randomly:
# play(human, random_player, num_games=1, verbose=True)


# Uncomment line below to run unit tests automatically
main(module='test_module', exit=False)
