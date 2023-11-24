import numpy as np

elf = np.array([])

f = open("input2.txt","r")
lines = f.readlines()

total = 0
for line in lines:
    if line == "\n":
        elf = np.append(elf, total)
        total = 0
    else:
        total += int(line.replace("\n",""))

print(elf)
print(np.max(elf))
nps = np.sort(elf)[::-1]
print (nps[0]+nps[1]+nps[2])
