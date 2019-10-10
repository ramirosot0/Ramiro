
$(document).ready(function() {

    $("#seeComments").on("click", function () {
        $.ajax({
            method: "GET",
            url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=xyz&action=comments",
            dataType: "json",
            data:{"comments" :$("#seeComments").val()},
            success: function(result,status) {
               // for (let i=0; i < result.length; i++) {
                    $("#commAuthor").append(result[0].author +" \n\n" + result[0].date);
                    $("#displayComments").append(result[0].comment);
                    $("#displayRatings").append("  "+result[0].rating +" Stars");
                    //$("#displayComments").append("<option>" + result[i].comment + "</option>");

               // }


            }
        });//ajax

    });

    $("#answerQ").on("click", function () {
        $.ajax({
            method: "GET",
            url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=xyz&action=action",
            dataType: "json",
            data:{"comments" :$("#answerQ").val()},
            success: function(result,status) {
                $("#likes").html(result.likes);

            }
        });//ajax

    });




});
