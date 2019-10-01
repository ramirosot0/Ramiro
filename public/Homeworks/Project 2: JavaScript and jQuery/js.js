$(document).ready(function() {

    $("button").on("click", buyNow);

    let shirtPrice = 5.99;
    let jeansPrice = 10.99;
    let tax = 1.48;
    let totalPrice = 0;



    function buyNow() {
        let q1Response = $("#quest1").val();
        let q2Response = $("#quest2").val();

        if (q1Response == "1"){
           totalPrice += shirtPrice;
        }
        else if (q1Response == "2"){
            totalPrice = shirtPrice * 2;
        }
        else if (q1Response == "3"){
            totalPrice = shirtPrice * 3;
        }
        else if (q1Response == "4"){
            totalPrice = shirtPrice * 4
        }
        else {
            $("#tCero").html("No shirts were selected!");
            $("#tCero").attr("class", "bg-secondary text-black");
        }

        if (q2Response == "1"){
            totalPrice += jeansPrice;
        }
        else if (q2Response == "2"){
            totalPrice = jeansPrice * 2;
        }
        else if (q2Response == "3"){
            totalPrice = jeansPrice * 3;
        }
        else if (q2Response == "4"){
            totalPrice = jeansPrice * 4;
        }
        else {
            $("#jCero").html("No jeans were selected");
            $("#jCero").attr("class", "bg-secondary text-black");
        }

        if(totalPrice != 0){
            $("#checkOut").html("Order Summary");
            $("#checkOut1").html("Items:  $"+totalPrice);
            $("#checkOut2").html("Shipping & handling:$0.00");
            $("#checkOu3").html("Total before tax: " + tax);



        }






    }

});