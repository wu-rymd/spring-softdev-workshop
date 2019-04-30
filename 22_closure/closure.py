# Raymond Wu
# SoftDev2 pd7
# K22 -- Closure
# 2019-04-30

def repeat(word):
    def repeater(count):
        return word*count
    return repeater

r1 = repeat('hello') 
print( r1(2) ) #hellohello

r2 = repeat('goodbye')
print( r2(2) ) #goodbyegoodbye

print ( repeat('cool')(3) ) #coolcoolcool


def make_counter():
    x = 0
    def counter():
        nonlocal x
        x += 1
        return x
    def accessor():
        return x
    return counter, accessor #returns tuple

ctr1, acc1 = make_counter() #ctr1 is counter, acc1 is accessor
print( ctr1() ) #1
print( ctr1() ) #2
print( acc1() ) #2
ctr2, acc2 = make_counter() #ctr2 is counter, acc2 is accessor
print( acc2() ) #0
print( ctr2() ) #1
print( ctr1() ) #3
print( ctr2() ) #2
print( acc1() ) #3
print( acc2() ) #2
print( acc2() ) #2
