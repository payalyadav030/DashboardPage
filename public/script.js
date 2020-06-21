$(document).ready(function(){
    
    $('.add').on('click', function(){
        //var imgArray =[];
        console.log("clicked")
        var productName = $('.productName').val();
        var price = $('.price').val();
        var mrp = $('.mrp').val();
        //console.log("mrp", mrp);
        var weight = $('.weight').val();
        var url = $('.url').val();
        //console.log("link", url)
       // imgArray.push(url);
        
    
        $.ajax({
            url : "http://localhost:6789/product-add",
            method: "POST",
            data : {
                productName: productName,
                price:price,
                mrp:mrp,
                weight : weight,
                url:url
              
            },
            success : function(response){
                
                console.log( response)
                alert("added successfully")
            }
        })
    })

    



});
