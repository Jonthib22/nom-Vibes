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
                recipeEl.attr("class","recipeBtn");
                listEl.append(recipeEl);
                listEl.append($("<br>"));
            }

            mainIngredient="";
            //fixed issue of passing mealID
            $(".recipeBtn").on("click",function(){
                //make function that makes recipe card
                makeRecipeCard($(this).attr("mealID"));
            });
        });


        
        

         function makeRecipeCard(id){
            $.ajax({
            url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id,
            method: "GET"
            }).then(function(response){
                //here is where we will add the recipe information
                console.log("We were passed the Id:"+id);
                $("#foodPic").attr("src", response.meals[0].strMealThumb)
                let ingredientList = [response.meals[0].strIngredient1,response.meals[0].strIngredient2, response.meals[0].strIngredient3, response.meals[0].strIngredient4,response.meals[0].strIngredient5, response.meals[0].strIngredient6, response.meals[0].strIngredient7, response.meals[0].strIngredient8, response.meals[0].strIngredient9, response.meals[0].strIngredient10, response.meals[0].strIngredient11, response.meals[0].strIngredient12, response.meals[0].strIngredient13, response.meals[0].strIngredient14, response.meals[0].strIngredient15, response.meals[0].strIngredient16, response.meals[0].strIngredient17, response.meals[0].strIngredient18, response.meals[0].strIngredient19, response.meals[0].strIngredient20];    
                let measurementList = [response.meals[0].strMeasure1,response.meals[0].strMeasure2, response.meals[0].strMeasure3, response.meals[0].strMeasure4,response.meals[0].strMeasure5, response.meals[0].strMeasure6, response.meals[0].strMeasure7, response.meals[0].strMeasure8, response.meals[0].strMeasure9, response.meals[0].strMeasure10, response.meals[0].strMeasure11, response.meals[0].strMeasure12, response.meals[0].strMeasure13, response.meals[0].strMeasure14, response.meals[0].strMeasure15, response.meals[0].strMeasure16, response.meals[0].strMeasure17, response.meals[0].strMeasure18, response.meals[0].strMeasure19, response.meals[0].strMeasure20];

                
                console.log(ingredientList);
                console.log(measurementList);
                generateMusic(response.meals[0].strArea);
            });
        mainIngredient="";        
        }
    });


    //starting to use the last fm - aminadab
    function generateMusic(country){
        console.log("The meal is:" +country);
        console.log("Here are the top 25 songs from: "+ countries[country]);

        $.ajax({
            url: "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country="+countries[country]+"&api_key=8bd98ee5d6bf7bf16e0c41730330e56d&format=json",
            method: "GET"}).then(function(response){
    
                console.log(response);
                for(var i=0;i<25;i++){
                    console.log(response.tracks.track[i].name);
                    console.log(response.tracks.track[i].artist.name); 
                    console.log("");
                }            
                
        });
    }
});



