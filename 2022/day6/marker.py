def find_mrk(packet, size):
    start = 0
    while start < len(packet):
        code = packet[start:start+size]
        res = {i: code.count(i) for i in set(code)}
        if len(res.keys()) == size:
            print(code)
            break
        start += 1
    return start+size




print('Test Packets')
f = open("input_test.txt","r")
packet = f.readlines()

for line in packet:
    packet = line.replace("\n","")
    print(find_mrk(packet,4))


print('Real Packet')
f = open("input_real.txt","r")
packet = f.readlines()

for line in packet:
    packet = line.replace("\n","")
    print(find_mrk(packet,4))
    print(find_mrk(packet,14))
    

