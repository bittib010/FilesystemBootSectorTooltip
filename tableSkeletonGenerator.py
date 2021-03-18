# Dummy example
boot_sector = "0000000 eb 3f 90 49 42 4d 20 20 33 2e 33 00 02 01 01 00 \
0000020 02 e0 00 40 0b f0 09 00 12 00 02 00 00 00 00 00 \
0000040 00 00 00 00 00 00 00 00 00 00 70 00 ff ff 49 42 \
0000060 4d 42 49 4f 20 20 43 4f 4d 00 50 00 00 08 00 18"



beginning = "<!DOCTYPE html> \n<html> \n\t<head> \n\t</head> \n\t<body>\n"
ending = "\n\t</body> \n</html>"

counter = 0 # Tracks every loop
counter_rounds = 0 # To keep track of how many lines - also to make the <thead> and similar

print(beginning)

for i in boot_sector.split():
    if counter_rounds == 0 and counter == 0:  #print <thead> at beginning
        print("\t<thead>\n\t\t<tr>")
    if counter_rounds == 1 and counter == 0:
        print("\t</thead>\n\t\t")
    if counter == 0 and counter_rounds != 0:
            print("\t\t<tr>")
    print("\t\t\t<td><span class=\"tooltip\">", i, "<span class=\"tooltiptext\">Bytes: <br>Offset: 0x<br>Purpose: </span></span></td>")
    if counter == 16:
        counter = 0
        print("\t\t</tr>")
        counter_rounds += 1
        continue
    counter += 1
    
print(ending)
