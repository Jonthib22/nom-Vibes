$(document).ready(function() {
    // Handler for .ready() called.
    //the key will be the recipe country, and the value will be the last.fm country
    var countries = {
        "American":"united%20states%20of%america",
        "British":"united%20kingdom%20of%20great%20britain%20and%20northern%20ireland",
        "Canadian":"canada",
        "Chinese":"china",
        "Dutch":"sint%20maarten",
        "Egyptian":"egypt",
        "French":"france",
        "Greek":"greece",
        "Indian":"india",
        "Irish":"ireland",
        "Italian":"italy",
        "Jamaican":"jamaica",
        "Japanese":"japan",
        "Kenyan":"kenya",
        "Malaysian":"malaysia",
        "Mexican":"mexico",
        "Moroccan":"morocco",
        "Polish":"poland",
        "Russian":"russia",
        "Spanish":"spain",
        "Thai":"thailand",
        "Tunisian":"tunisia",
        "Turkish":"turkey",
        "Unknown":"n/a",
        "Vietnamese":"vietnam"
    };
    
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

    //starting to use the last fm
    function generateMusic(country){
        
    }

    $.ajax({
        url: "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=canada&api_key=8bd98ee5d6bf7bf16e0c41730330e56d&format=json",
        method: "GET"}).then(function(response){
            console.log(response);
            console.log(response.tracks.track[0].name);
            console.log(response.tracks.track[0].artist.name);            
            
    });
    

});



