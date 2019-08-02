$(document).ready(function(){             //jQuery
    $("#load").hide();
    $("#tp1,#cat li").click(function(){
        var cat = $(this).text();
        console.log(cat);
        
        $.ajax({                        //AJAX format
            type:"GET",                 //type mentions the method to be used 
            url :"librarydata.json",         //can provide API link
            beforeSend : function(){
                $("#load").show();
            },
            success : function(data){
                $("#load").hide();
                /* console.log(data); */
                var card="<div class='card-deck'>";
                for (var j in data){
                    if (cat == data[j].genre || cat == 'Books')
                    {
                        card+="<div class='col-4 col-sm-4 col-md-4'> <div class='card'> <img class='card-img-top' src=" + data[j].urlToImage + ">";
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
    });
});