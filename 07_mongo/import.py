# Team ScandalousFriedChicken (Raymond Wu, Jerry Ye)
# SoftDev2 pd7
# K07 -- Import/Export Bank
# 2019-03-02

# Name of Dataset:  Current US Representatives
# Link to Raw Data: https://www.govtrack.us/api/v2/role?current=true&role_type=representative&limit=438

# Brief Summary of Import Mechanism:
#  - We can set variables `db` and `collection` to the database and collection we are creating
#  - MongoDB creates databases and collections "lazily": "Collections and databases are created when the first document is inserted into them." (http://api.mongodb.com/python/current/tutorial.html#getting-a-collection)
#  - Mr. Brown mentioned that we should look into the insert() method. A closer look at the documentation tells us that this method is deprecated. (http://api.mongodb.com/python/current/api/pymongo/collection.html#pymongo.collection.Collection.insert_many)
#  - We should use the insert_one() or insert_many() methods
#  - insert_many() takes a list of dictionaries, which will be our docs
#  - We use the json module to get a Python dictionary of the json data
#  - We index the json data for the list of dictionaries (representatives) we want, which conveniently can be the list we pass into the insert_many() method

import pymongo
import json

SERVER_ADDR = "159.89.179.201"

connection = pymongo.MongoClient( SERVER_ADDR )
db = connection.ScandalousFriedChicken
collection = db.HouseOfReps

with open('role.json') as fileObject:
    fileContent = fileObject.read()
    listOfDictionaries = json.loads(fileContent)['objects']

collection.insert_many( listOfDictionaries )

# Note that running this script multiple times will create duplicate docs
