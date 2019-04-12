# Raymond Wu (w/ Ray Onishi)
# SoftDev2 pd7
# K16 -- Do You Even List?
# 2019-04-11

def threshold_checker(password):
    UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LOWERCASE = UPPERCASE.lower()
    DIGITS = [str(i) for i in range(10)]
    
    upper = [char for char in password if char in UPPERCASE]
    lower = [char for char in password if char in LOWERCASE]
    numbers = [char for char in password if char in DIGITS]

    return len(upper) > 1 and len(lower) > 1 and len(numbers) > 1

def password_strength(password):
    strength = 0

    if not threshold_checker(password):
        return strength
    
    UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LOWERCASE = UPPERCASE.lower()
    DIGITS = [str(i) for i in range(10)]
    SPECIAL = ".?!&#,;:-_*"
    
    upper = [char for char in password if char in UPPERCASE]
    lower = [char for char in password if char in LOWERCASE]
    numbers = [char for char in password if char in DIGITS]
    specials = [char for char in password if char in SPECIAL]

    if len(upper) >= 2: strength += 1
    if len(upper) > 5: strength += 1
    if len(lower) >= 2: strength += 1
    if len(lower) > 5: strength += 1
    if len(numbers) >= 2: strength += 1
    if len(numbers) > 5: strength += 1
    if len(specials) >= 2: strength += 1
    if len(specials) > 5: strength += 1
    if len(password) >= 8: strength += 1
    if len(password) > 12: strength += 1

    return strength

print( threshold_checker('SDLKASaasdal123213!!&:;;:,__-') ) #True
print( threshold_checker('SDLKAl123213!!&:;;:,__-') ) #False
print( threshold_checker('SDLKAaasdal!!&:;;:,__-') ) #False
print( threshold_checker('Ab1') ) #False
print( threshold_checker('AAbb11') ) #True

print( "--------------------" )

print( password_strength('SDLKAl123213!!&:;;:,__-') ) #0
print( password_strength('SDLKAaasdal!!&:;;:,__-') ) #0
print( password_strength('Ab1') ) #0
print( password_strength('AAbb11') ) #3
print( password_strength('SDLKASaasdal123213!!&:;;:,__-') ) #10
