$( document ).ready(function() {
    // Handler for .ready() called.
    

    $("#searchBtn").on("click",function(){
        //save input from user
        var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
        var mainIngredient = $("#recipe-input").val();
        queryURL=queryURL+mainIngredient;
        console.log(queryURL);
        query(queryURL);
        
    });
    function query(address){
        $.ajax({
            url: address,
            method: "GET"
            }).then(function(response){
                console.log(queryURL);
                console.log("This is working");
                console.log(response);
                //returns an array where each index is a meal
                //response.meals[i].strMeal returns the title of recipe 
                var listEl = $("#recipe-list");
                //go through array of meals and add recipe title to list 
                for(var i=0; i<response.meals.length;i++){
                    var recipeEl = $("<li>");
                    recipeEl.attr("class","collection-item");
                    recipeEl.text(response.meals[i].strMeal);
                    listEl.append(recipeEl);
                }
        });

    }
});



