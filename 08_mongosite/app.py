# azrael -- Jason Tung, Raymond Wu, and KENNY!!!!!!!
#
# SoftDev2 pd7
#
# K #08: Ay Mon, Go Git It From Yer Flask
#
# 2019-03-08

import os

import pymongo
from flask import Flask, render_template, request, flash, redirect, url_for

import util.json_setup as parser
import util.find as find

app = Flask(__name__)
app.secret_key = os.urandom(32)

db_pointer = None

@app.route("/")
def hello_world():
    if db_pointer != None:
        return render_template("land.html", pointed = True)
    return render_template("land.html")

@app.route("/auth", methods=['POST'])
def auth():
    try:
        maxSevSelDelay = 2
        connection = pymongo.MongoClient(request.form['droplet'],
                                     serverSelectionTimeoutMS=maxSevSelDelay)
        connection.server_info()
        db = connection.test
        global db_pointer
        db_pointer = db
        print(db_pointer)
        print("DFSFDSFDSF")
        parser.setup(db)
        flash("droplet tested and set up")
        return redirect(url_for("search", category="success", flash=True), code=307)
    except Exception as e:
        print(e)
        db_pointer = None
        flash("droplet tested and not working")
        #print("DSFJDSKFJLKDFJKLSDJFKLSJDKLFDSKLFJKDSLFJDLKSFJKLDSFJLKSJFLK")
        return render_template("land.html", category="error", flash=True)

@app.route("/search", methods=['POST', "GET"])
def search():
    #print(db_pointer)
    return render_template("search_form.html", category=request.args.get('category'), flash=request.args.get('flash'))

@app.route("/doit", methods=['POST', "GET"])
def doit():
    # POSSIBLE ARGS: num, name, type, height, height_updown, weight, weight_updown, weaknesses, evolutions
    args = {"num": None, "name": None, "type": None, "height": None,
            "weight": None, "weaknesses": None, "evolutions": None}
    for k in args:
        hey = request.form[k]
        if hey.strip() != '':
            args[k] = hey

    #print(db_pointer)
    results = find.find_pokemans(db_pointer, args)
    print("-----")
    print("-----")
    return render_template("display.html", hey = results)

if __name__ == "__main__":
    app.debug = True
    app.run()