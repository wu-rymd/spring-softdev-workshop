# Ray Onishi & Raymond Wu
# SoftDev2 pd7
# K17 -- PPFTLCW
# 2019-04-13

a1 = ['00']
for i in range(4):
   a1.append(str(int(a1[-1])+22))

print(a1)
    
b1 = ["00" if i==0 else str(i*22) for i in range (0,5) ]
print (b1)

a2 = [7]
for i in range(4):
    a2.append( a2[-1] + 10 )
print(a2)

b2 = [7+10*i for i in range(0,5)]
print(b2)

a3 = [0,0,0]
for i in range(1,3):
    a3.append(0)
    a3.append(i)
    a3.append(i*2)

print(a3)

b3 = [ (i % 3) * (i//3) for i in range (9)]
print(b3)

def get_factors(n):
   factors = []
   for i in range(1, n+1):
      if n%i==0:
         factors.append(i)
   return factors


a6 = get_factors(100)
print(a6)

# b6 = [i for i in get_factors(100)]
def get_factors_listcomp(n):
   return [i for i in range(1, n+1) if n%i ==0] # get factors of 100

b6 = print(get_factors_listcomp(100))

a4 = []
for i in range (101):
   if len(get_factors_listcomp(i)) > 2:
      a4.append(i)

print(a4)

b4 = [ i for i in range(101) if len(get_factors_listcomp(i)) > 2 ]

print(b4)

a5 = []
for i in range(101):
   if len(get_factors_listcomp(i)) == 2:
      a5.append(i)

print(a5)

b5 = [ i for i in range(101) if len(get_factors_listcomp(i)) == 2 ]

print(b5)

"""
0 1 2
3 4 5
6 7 8

turns into

0 3 6
1 4 7
2 5 8 ??

-----

0 1 2
3 4 5

turns into

0 3
1 4
2 5

-------

0 3
1 4
2 5

turns into

0 1 2
3 4 5

"""

def transpose_matrix(matrix):
   transpose = []
   for i in range(len(matrix[0])):
      transpose.append([])
      for j in range(len(matrix)):
         transpose[i].append(matrix[j][i])
         
   return transpose

# secret sauce: range for i has to be length of each inner list (num columns)
# range for j has to be length of bigger list (num rows)
array = [[0,3],[1,4],[2,5]]
a7 = transpose_matrix(array)
print(a7)

def transpose_matrix_listcomp(matrix):
   transpose = [ [ matrix[j][i] for j in range(len(matrix)) ] for i in range(len(matrix[0])) ]
   return transpose

b7 = transpose_matrix_listcomp(array)
print(b7)
