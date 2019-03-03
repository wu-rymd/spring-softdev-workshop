# Team ScandalousFriedChicken (Raymond Wu, Jerry Ye)
# SoftDev2 pd7
# K07 -- Import/Export Bank
# 2019-03-02

import pymongo

SERVER_ADDR = "159.89.179.201"

connection = pymongo.MongoClient( SERVER_ADDR )
db = connection.ScandalousFriedChicken
collection = db.HouseOfReps

def find_by_state( state ):
    retList = []
    docs = db.HouseOfReps.find( {'state':state} )
    for doc in docs:
        retList.append( doc )
    return retList

print( find_by_state("RI") )
