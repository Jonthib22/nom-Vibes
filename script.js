$(document).ready(function() {
    // Handler for .ready() called.
    
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
    //when search button is clicked we update the url
    $("#searchBtn").on("click",function(event){
        //save input from user
        var mainIngredient = $("#recipe-input").val();
        console.log(queryURL);
        event.preventDefault();
        $.ajax({
            url: queryURL+mainIngredient,
            method: "GET"
            }).then(function(response){
                //returns an array where each index is a meal
                //response.meals[i].strMeal returns the title of recipe 
                var listEl = $("#recipe-list");
                //go through array of meals and add recipe title to list 
                for(var i=0; i<response.meals.length;i++){
                    var recipeEl = $("<button>"+response.meals[i].strMeal+"</button>");
                    //recipeEl.attr("class","collection-item");
                    recipeEl.attr("mealID",response.meals[i].idMeal);
                    recipeEl.attr("id",)
                    listEl.append(recipeEl);
                    listEl.append($("<br>"));
                    recipeEl.on("click",function(){
                        //make function that makes recipe card
                        makeRecipeCard(recipeEl.attr('mealID'));
                        console.log("You clicked on the mealID#: "+recipeEl.attr('mealID'));
                    });

                }
        });
        mainIngredient="";

        function makeRecipeCard(id){
        //this function will make the recipe card 
        // use id number w/ ajax w/ url 
        //https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealIDgoesHere}
        }
    });

    
    

});



