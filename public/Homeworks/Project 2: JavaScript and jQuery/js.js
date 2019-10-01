$(document).ready(function() {

    $("button").on("click", buyNow);

    let q1Response = $("#quest1").val();



    function buyNow() {

        if (q1Response == "on"){
            $("#checkOut").html("correct one");
            $("#checkOut").attr("class", "bg-warning text-white");
        }
        else if (q1Response == "tw"){
            $("#checkOut").html("correct two");
            $("#checkOut").attr("class", "bg-warning text-white");
        }
        else{
            $("#checkOut").html("correct elsefinal");
            $("#checkOut").attr("class", "bg-warning text-white");
        }



    }

})