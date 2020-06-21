const productController = require('../routes/Dash');
const { ObjectID, ObjectId } = require('mongodb');

const product = {};

const MongoClient = require('mongodb').MongoClient;
var db = null;

var url = 'mongodb://localhost:27017';
MongoClient.connect(url, function(error, client){
    if(error){
        throw error;
    }
     db = client.db('payal-dashboard')
});

product.add = function(productName, price,mrp, weight, url, callback){
   
    var collection = db.collection('list');
    var discount = parseInt(((mrp-price)/mrp) *100);
    console.log("discunt", discount)
    collection.insertOne({
        productName:productName,
        price:price,
        mrp:mrp,
        discount:discount,
        weight:weight,
        url:url,
        
    }, function(error, success){
        if(error){
            throw error;
        }
        return callback(null, "added successfully")
    })
}
product.retrieve = function(callback){
    var collection = db.collection('list');
    collection.find({}).toArray(function(error, response){
        if(error){
            return callback(error)
        }
        console.log("response",response)
        return callback(null, response)

    })
}
product.viewlist = function(callback){
    var collection = db.collection('list');
    collection.find({}).toArray(function(error, response){
        if(error){
            return callback(error);
        }
        return callback(null, response)
    })
}
product.productpage = function(id, callback){
    console.log("id->>>>", id)
    var collection = db.collection('list');
    collection.find({
       _id : new ObjectId(id)
    }).toArray(function(error, response){
        if(error){
            return callback(error);
        }
        
        console.log("response", response)
        return callback(null, response)
    })
    
}

module.exports = product