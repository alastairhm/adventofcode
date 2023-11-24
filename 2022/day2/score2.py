elf = []

f = open("input2.txt","r")
lines = f.readlines()

total = 0
for line in lines:
    game = line.replace("A","R").replace("B","P").replace("C","S").replace("\n","").replace(" ","")
    elf.append(game)

fixed=[]
for round in elf:
    if round[1] == "X": #Lose
        if round[0] == "R":
            fix = round[0] + "S"
        elif round[0] == "P":
            fix = round[0] + "R"
        elif round[0] == "S":
            fix = round[0] + "P"
    elif round[1] == "Y": #Draw
        if round[0] == "R":
            fix = round[0] + "R"
        elif round[0] == "P":
            fix = round[0] + "P"
        elif round[0] == "S":
            fix = round[0] + "S"
    elif round[1] == "Z": #Win
        if round[0] == "R":
            fix = round[0] + "P"
        elif round[0] == "P":
            fix = round[0] + "S"
        elif round[0] == "S":
            fix = round[0] + "R"
    fixed.append(fix)

score=0
for round in fixed:
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
