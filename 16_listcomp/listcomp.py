# Raymond Wu (w/ Ray Onishi)
# SoftDev2 pd7
# K16 -- Do You Even List?
# 2019-04-11

def threshold_checker(password):
    UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LOWERCASE = UPPERCASE.lower()
    DIGITS = [str(i) for i in range(10)]
    SPECIAL = ".?!&#,;:-_*"
    
    upper = [char for char in password if char in UPPERCASE]
    lower = [char for char in password if char in LOWERCASE]
    numbers = [char for char in password if char in DIGITS]
    specials = [char for char in password if char in SPECIAL]

    return len(upper) > 1 and len(lower) > 1 and len(numbers) > 1

print( threshold_checker('SDLKAaasdal123213!!&:;;:,__-') ) #True
print( threshold_checker('SDLKAl123213!!&:;;:,__-') ) #False
print( threshold_checker('SDLKAaasdal!!&:;;:,__-') ) #False
print( threshold_checker('Ab1') ) #False
print( threshold_checker('AAbb11') ) #True
