$(document).ready(function(){             //jQuery
    $("#load,#card2").hide();
    $("#tp1,#tp2,#cat li").click(function(){
        var cat = $(this).text();
        console.log(cat);
        if(cat=="LOGIN"){
            $("#card1").show();
            $("#card2,.results").hide();
        }
        else if(cat=="REGISTER"){
            $("#card2").show();
            $("#card1,.results").hide();
        } 
        else{
            $(".results").show();
            $.ajax({                        //AJAX format
                type:"GET",                 //type mentions the method to be used 
                url :"librarydata.json",         //can provide API link
                beforeSend : function(){
                    $("#load").show();
                },
                success : function(data){
                    $("#load,#card1,#card2").hide();
                    /* console.log(data); */
                    var card="<div class='card-deck'>";
                    for (var j in data){
                        if (cat == data[j].genre || cat == 'View All')
                        {
                            card+="<div class='col-4 col-sm-4 col-md-4'> <div class='card'> <img class='card-img-top' src=" + data[j].urlToImage + " height='400px' width='150px'>";
                            card+="<div class='card-body'> <h5 class='card-title'>"+ data[j].bookTitle +"</h5>";
                            card+="<h6 class='card-subtitle mb-2 text-muted'>" + data[j].author +"</h6> ";
                            card+="<p class='card-text text-justify'>"+ data[j].description + "</p> </div>";
                            card+="<div class='card-footer text-center'> &#x20b9; "+ data[j].price+"</div></div></div> <br>";
                        }
                    }
                    card+="</div>";
                    $(".results").html(card);
                }         
            });
        }
    });
});