$(document).ready(function() {

    $("button").on("click", buyNow);

    let q1Response = $("q1").val();
    let q2Response = $("q2").val();

    function buyNow() {
        if (q1Response == "" && q2Response == ""){
            $("#checkOut").html("correct");
            $("#checkOut").attr("class", "bg-warning text-white");
        }
        $("#checkOut").html("correct");
        $("#checkOut").attr("class", "bg-warning text-white");

    }

})