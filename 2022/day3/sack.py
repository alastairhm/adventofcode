#!/usr/bin/env python3

def process():
    files = {"Test" : "input_test.txt",
         "Real" : "input_real.txt"}

    for key in files.keys():
        print(key)
        with open(files[key], "r") as f:
            data = f.readlines()
        packet = [a.replace("\n","").split(",") for a in data]
        total = 0
        for pack in packet:
            p = pack[0]
            p1 = p[0:len(p)//2]
            p2 = p[len(p)//2:]
            duplicate = {}
            for c in p1:
                if c in p2:
                    duplicate[c] = 1
            for key in duplicate.keys():
                value = 0
                if key.islower():
                    value = ord(key)-96
                else:
                    value = ord(key)-38
                total += value
        print(total)




if __name__ == "__main__":
    process()
