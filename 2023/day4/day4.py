import numpy as np
import re

output = 0

with open('input.txt', 'r') as f:

    all_games = f.readlines()

copies = np.ones(len(all_games))

for idx, game in enumerate(all_games):
    print(copies)
    game = game[game.find(':') + 2:].rstrip()

    set_of_nums = game.split('|')

    winning_nums = set(re.findall(r'\d+', set_of_nums[0]))

    my_nums = set(re.findall(r'\d+', set_of_nums[1]))

    matches = len(winning_nums.intersection(my_nums))

    for i in range(1, matches+1):

        copies[idx+i] += copies[idx]

print(int(sum(copies)))
