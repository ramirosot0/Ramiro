//populate product name, price and quantity

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}
let ran = getRandomInt(5);
let qty1Price = 0;
let subtot = 0;
let tax = 0;
let total = 0;
let deliverPrice = 0;
var discount = 0;
let qtychange =0;

$(document).ready(function() {

    let shippingCost = $("#shipping").val();
    //alert($("#qty_item1").val());
    if (shippingCost == "nextDayDelivery"){
        deliverPrice  = 25;
    }
    else if (shippingCost == "threeDayDelivery"){
        deliverPrice = 20;
    }
    else if (shippingCost == "regularDelivery"){
        deliverPrice = 7;
    }

    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/promo_products.php",
        dataType: "JSON",
        data: { "Qty1_name" :$("#qty1_name").val()},
        success: function (result,status) {
           // alert(result[0].productName);
            // alert(ran);
            $("#subtotal").html("<option> Next-day Delivery: $25.00 </option>");
            $("#qty1_name").html(result[ran].productName);
            $("#qty1_price").html("$"+result[ran].price);
            qty1Price = result[ran].price;
            $("#totalItem1").html("$"+result[ran].price);
            $("#shippingTotal").html("$"+(deliverPrice));
            subtot = qty1Price + deliverPrice;
            $("#subtotal").html("$"+subtot);
            tax = Math.floor(subtot * 0.10);
            $("#taxx").html("$"+tax);
            total = subtot + tax;
            $("#total").html("$"+(subtot+tax));
        }

    });//ajax

    $("#qty_item1").on("change", function() {
        qtychange = qty1Price * $("#qty_item1").val();
        $("#totalItem1").html("$"+(qtychange));
        subtot = qtychange + deliverPrice;
        $("#subtotal").html(subtot);
        let thistax = Math.floor(subtot * 0.10);
        $("#taxx").html(thistax);
        let thisTotal = subtot + thistax;
        $("#total").html(thisTotal);

    });

    $("#boton").on("click", function() {

        $.ajax({
            method: "GET",
            url: "https://cst336.herokuapp.com/projects/api/promo_codes.php",
            dataType: "json",
            data: { "promoCode": $("#promoCode").val()},
            success: function(result,status) {
                discount = result.discount;
                if (!discount) {
                    $("#promoError").html("Promo code doesn't exist!");
                    $("#discount").html("")
                    discount = 0;
                }
                else{
                    if (qtychange == 0){
                        $("#discount").html(result.discount + "%");
                        $("#discounted").html("$-"+((discount/100)*qty1Price));
                    }
                    else {
                        $("#discount").html(result.discount + "%");
                        $("#discounted").html("$-"+((discount/100)*qtychange));
                    }
                }
                //calculateTotal();
            }

        });//ajax

    });

});//qty

/*
    - document ready
    - event listeners --.change .on. click
    -variables var/let
    -ajax to populate
    -lestener functions
    -add function after every ajax
 */

