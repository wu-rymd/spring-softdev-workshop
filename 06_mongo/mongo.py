# Team ?? (Bo Hui Lu, Raymond Wu)
# SoftDev2 pd7
# K06 -- Yummy Mango Py
# 2019-02-27

import pymongo

# connect to mongoDB-serving Simpson
client = pymongo.MongoClient('159.89.179.201')

# work with 'test' database
db = client.test

# test run on something that works...
# docs = db.restaurants.find( {"address.zipcode" : "10282"} )
# print( "========== test run ==========" )
# for doc in docs:
#     print(doc)
# print( "==============================" )

# find all restaurants in a specified borough
# borough must be a string
def find_by_borough( borough ):
    borough = borough.capitalize() # necessary? social contract?
    docs = db.restaurants.find( {"borough":borough} )
    print( "========== borough: {} ==========".format(borough) )
    for doc in docs:
        print(doc)
    print( "==============================" )

# find all restaurants in a specified zip code
# zip_code must be a string
def find_by_zip( zip_code ):
    zip_code = str(zip_code) # necessary? social contract?
    docs = db.restaurants.find( {"address.zipcode":zip_code} )
    print( "========== zip code: {} ==========".format(zip_code) )
    for doc in docs:
        print(doc)
    print( "==============================" )

# find all restaurants in a specified zip code with a specified grade
# zip_code and grade must both be strings
def find_by_zip_and_grade( zip_code , grade ):
    zip_code = str(zip_code) # necessary? social contract?
    grade = str(grade)       # necessary? social contract?
    docs = db.restaurants.find( {'$and' : [{"address.zipcode":zip_code},
                                           {"grades.grade":grade}] } )
    print( "========== zip code: {} , grade: {} ==========".format(zip_code,grade) )
    for doc in docs:
        print(doc)
    print( "==============================" )    

# find all restaurants in a specified zip code with a score below a specified threshold
# zip_code and grade must both be strings
def find_by_zip_below_grade( zip_code , grade ):
    zip_code = str(zip_code) # necessary? social contract?
    grade = str(grade)       # necessary? social contract?
    docs = db.restaurants.find( {"$and" : [{"address.zipcode":zip_code},
                                           {"grades.score" : {'$lt':grade}} ]})
    print( "========== zip code: {} , grade < {} ==========".format(zip_code,grade) )
    for doc in docs:
        print(doc)
    print( "==============================" ) 

# find all restaurants in a specified cuisine
# zip_code and cuisine must both be strings
def find_by_zip_and_cuisine( zip_code , cuisine ):
    zip_code = str(zip_code) # necessary? social contract?
    cuisine = cuisine.capitalize() # necessary? social contract?
    docs = db.restaurants.find( {"$and" : [{"address.zipcode":zip_code},
                                           {"cuisine" : cuisine} ]})
    print( "========== zip code: {} , cuisine: {} ==========".format(zip_code,cuisine) )
    for doc in docs:
        print(doc)
    print( "==============================" ) 
    
# ========== test calls ==========
find_by_borough( "queens" )
# find_by_borough( "queens" ) #should do same, no?
# find_by_borough( "queens" ) #should do same, no?

# find_by_zip( "10282" ) #should be same as test call before fxn defs
# find_by_zip(  10282  ) #should do same, no?

# find_by_zip_and_grade( "10282", "30" )
# find_by_zip_and_grade( 10282, 30 ) #should do same, no?

# find_by_zip_below_grade( "10282", "30" )
# find_by_zip_below_grade( 10282, 100 ) #should do same, no?

# find_by_zip_and_cuisine( "10282", "Italian" )

# ========== RESOURCES ==========
# http://api.mongodb.com/python/current/tutorial.html
# http://api.mongodb.com/python/current/tutorial.html#querying-for-more-than-one-document
# http://api.mongodb.com/python/current/api/pymongo/collection.html#pymongo.collection.Collection.find

# PyMongo API: Tutorial
# PyMongo API: collection – Collection level operations
