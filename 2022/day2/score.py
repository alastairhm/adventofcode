elf = []

f = open("input2.txt","r")
lines = f.readlines()

total = 0
for line in lines:
    game = line.replace("A","R").replace("B","P").replace("C","S").replace("\n","")
    game = game.replace("X","R").replace("Y","P").replace("Z","S").replace(" ","")
    print(game)
    elf.append(game)

print(elf)
score=0
for round in elf:
    if round == "RP":
        score += 2 + 6
    elif round == "PP":
        score += 2 + 3
    elif round == "SP":
        score += 2
    elif round == "RR":
        score += 1 + 3
    elif round == "PR":
        score += 1
    elif round == "SR":
        score += 1 + 6
    elif round == "RS":
        score += 3 
    elif round == "PS":
        score += 3 + 6
    elif round == "SS":
        score += 3 + 3

print(score)
