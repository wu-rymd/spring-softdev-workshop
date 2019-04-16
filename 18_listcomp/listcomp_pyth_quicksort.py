# Ray Onishi & Raymond Wu
# SoftDev2 pd7
# K18 -- ????
# 2019-04-15

n=100
pyth_triples = [(x,y,z) for x in range(1,n) for y in range(x,n) for z in range(y,n) if z*z == x*x + y*y]

print(pyth_triples)

list_to_sort  = [8, 6, 10, 5, 1, 9, 7, 3, 2, 4]
# should be 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
list_to_sort_2  = [64,654687,13651,32132,4,1365,1221,54,31,58]
list_to_sort_3  = [64,654687,13651,32132,4,1365,1221,54,31,31]

def quicksort(l):
    #base case
    if len(l) <= 1: return l

    pivot = l[ len(l) // 2 ]
    less = quicksort( [i for i in l if i < pivot] )
    more = quicksort( [i for i in l[0:len(l)//2] + l[len(l)//2+1:] if i >= pivot] )
    # skip index of pivot but include those that have same value as pivot
    # good for lists w/ duplicate values

    return less + [pivot] + more


print( quicksort(list_to_sort) )
print( quicksort(list_to_sort_2) )
print( quicksort(list_to_sort_3) )
