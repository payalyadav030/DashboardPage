const productController = {}

const Model = require('./../models/dash.js');

productController.add = function(req, res){
    var productName = req.body.productName;
    var price = req.body.price;
    var mrp = req.body.mrp;
    //console.log("mrp", mrp);
    var weight = req.body.weight;
    var url = req.body.url;
    //console.log("url", url)
    console.log(req.body);
    
    Model.add(productName, price,mrp, weight, url, function(error, data){
        if(error){
            throw error;    
        }
        
        return res.send(data)
    })
}

productController.retrieve = function(req, res){
    Model.retrieve(function(error, data){
        console.log("data", data)
        if(error){
            throw error
        }
        res.render('homepage',{
            data:data
        })
    })
}
productController.viewlist = function(req, res){
    Model.viewlist(function(error, data){

        if(error){
            throw error;
        }
        //console.log("data", data)
        res.render('view',{
            data : data
        })
    })
}
productController.productpage = function(req, res){
    var id= req.params.id;
    console.log("id params ", id)
    Model.productpage(id, function(error, data){
        console.log("iddd", id)
        if(error){
            throw error;
        }
        console.log("productdata", data);
       
        res.render('product',{
            data:data,
           
            test:123
        })
    })
}


module.exports = productController;