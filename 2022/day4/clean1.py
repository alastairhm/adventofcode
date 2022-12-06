files = {"Test" : "input_test.txt",
         "Real" : "input_real.txt"}

for key in files.keys():
    print(key)
    with open(files[key], "r") as f:
        data = f.readlines()
    packet = [a.replace("\n","").split(",") for a in data]

    total = 0
    for a in packet:
        p1 = [int(x) for x in a[0].split("-")]
        p2 = [int(x) for x in a[1].split("-")]
        if ((p1[0] <= p2[0]) and (p1[1] >= p2[1])) or ((p2[0] <= p1[0]) and (p2[1] >= p1[1])):
            total += 1        
    print("Total contained : ", total)


