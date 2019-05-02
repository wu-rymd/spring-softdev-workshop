# Raymond Wu
# SoftDev2 pd7
# K23 -- Memoization
# 2019-05-02

import random

def make_HTML_heading(f):
    text = f()
    def inner():
        return '<h1>' + text + '</h1>'
    return inner

def greet():
    greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word up']
    return random.choice(greetings)

greet_heading = make_HTML_heading(greet)
print( greet_heading() )
# print( greet_heading() ) #same greet in <h1>
# print( greet_heading() )
# print( greet_heading() )
# print( greet_heading() )


##############################
# DECORATORS

def make_HTML_heading(f):
    text = f()
    def inner():
        return '<h1>' + text + '</h1>'
    return inner

@make_HTML_heading
def greet():
    greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word up']
    return random.choice(greetings)

print( greet() )  # equiv to greet_heading = make_HTML_heading(greet) line...
# except now greet_handing is replaced by calling greet() directly


##############################
# FIB(n) USING CLOSURE/MEMOIZATION

def memoize(f): #f=fib (not ret val)
    memo = {}
    def helper(x): #x=40
        print("called helper", x)
        nonlocal memo
        if x not in memo.keys():
            print("going to fib to find", x)
            memo[x] = f(x)
        else: print("found", x, "in memo")
        return memo[x]
    return helper

def fib(n):
    print("called fib", n)
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

fib = memoize(fib)
# print( fib )
print( fib(5) )
print("--------------------")
print( fib(1) )
print("--------------------")
print( fib(2) )
print("--------------------")
print( fib(3) )
print("--------------------")
print( fib(4) )
print("--------------------")
print( fib(5) )

