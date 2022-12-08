#!/usr/bin/env python3

def pathname(path):
    return "/".join(path)

def process(separator):
    files = {"Test" : "input_test.txt",
        #  "Real" : "input_real.txt"
}

    for key in files.keys():
        print(key)
        with open(files[key], "r") as f:
            data = f.readlines()
        lines = [a.replace("\n","").split(separator) for a in data]
        parse(lines)

def parse(data):       
    print(data)

if __name__ == "__main__":
    process(" ")
