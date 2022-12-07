#!/usr/bin/env python3

def pathname(path):
    return "/".join(path)

def process():
    files = {"Test" : "input_test.txt",
         "Real" : "input_real.txt"
}

    for key in files.keys():
        print(key)
        with open(files[key], "r") as f:
            data = f.readlines()
        commands = [a.replace("\n","").split(" ") for a in data]
        parse(commands)

def parse(commands):       
    path = []
    directory = {}
    current = ""
    for command in commands:
        if command[0] == "$":
            # print("Path ", pathname(path))
            # print("Command", command[1:])
            if command[1] == "cd":
                if command[2] == "/":
                    path = ["root"]
                elif command[2] == "..":
                    path.pop()
                else:
                    path.append(command[2])
            elif command[0] == "ls":
                print("ls")
        else:
            if command[0] == "dir":
                print(".", end="")
            else:
                current = pathname(path)
                if directory.get(current) is not None:
                    directory[current] += int(command[0])
                else:
                    directory[current] = int(command[0])
    print()
    for path in directory:
            print(path, directory[path])

if __name__ == "__main__":
    process()
