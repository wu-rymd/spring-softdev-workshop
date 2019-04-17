# team RayJay (Jeffrey Wu, Raymond Wu)
# SoftDev2 pd7
# K19 -- Ready, Set, Math!
# 2019-04-16

listA = [1, 2, 3]
listB = [2, 3, 4]

listC = [12,23,34]
listD = [34,45,56]

listE = []
listF = [1,2,3]

# add elements in listA by listcomp
# add elements in listB that are not in listA by listcomp
# add both lists
def union(A,B):
    return [x for x in A] + [x for x in B if x not in A]

print(union(listA,listB)) # [1, 2, 3, 4]
print(union(listC,listD)) # [12, 23, 34, 45, 56]
print(union(listE,listF)) # [1, 2, 3]

print("====================")

# look thru elem of one list
# if elem in both lists, add to final list
def intersection(A,B):
    return [x for x in A if x in A and x in B]

print(intersection(listA,listB)) # [2, 3]
print(intersection(listC,listD)) # [34]
print(intersection(listE,listF)) # []

print("====================")

# add the elems that are in A but not in B
def setDiff(A,B):
 return[x for x in A if x not in B]

print(setDiff(listA,listB)) # [1]
print(setDiff(listC,listD)) # [12, 23]
print(setDiff(listE,listF)) # []

print("====================")

# check all elem in both lists,
# if elem only in one list, add to final list
def symDiff(A,B):
    return [x for x in A+B if x not in A or x not in B]

print(symDiff(listA,listB)) # [1, 4]
print(symDiff(listC,listD)) # [12, 23, 45, 56]
print(symDiff(listE,listF)) # [1, 2, 3]

print("====================")

# match each elem in A with every elem in B
def cart(A,B):
    return [ (x,y) for x in A for y in B ]

print(cart(listA,listB)) # [(1, 2), (1, 3), (1, 4), (2, 2), (2, 3), (2, 4), (3, 2), (3, 3), (3, 4)]
print(cart(listC,listD)) # [(12, 34), (12, 45), (12, 56), (23, 34), (23, 45), (23, 56), (34, 34), (34, 45), (34, 56)]
print(cart(listE,listF)) # []

print("====================")

# mat
def dotProduct(A,B):
    if not len(A) == len(B):
        return "len of both lists not same!"
    else: 
        vector = [ A[i] * B[i] for i in range(len(A))]
        return sum(vector)

print(dotProduct(listA,listB)) # 20
print(dotProduct(listC,listD)) # 3347
print(dotProduct(listE,listF)) # len of both lists not same!
