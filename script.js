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
                console.log("We were passed the Id:"+id);
                $("#foodPic").attr("src", response.meals[0].strMealThumb)
                let ingredientList = [response.meals[0].strIngredient1,response.meals[0].strIngredient2, response.meals[0].strIngredient3, response.meals[0].strIngredient4,response.meals[0].strIngredient5, response.meals[0].strIngredient6, response.meals[0].strIngredient7, response.meals[0].strIngredient8, response.meals[0].strIngredient9, response.meals[0].strIngredient10, response.meals[0].strIngredient11, response.meals[0].strIngredient12, response.meals[0].strIngredient13, response.meals[0].strIngredient14, response.meals[0].strIngredient15, response.meals[0].strIngredient16, response.meals[0].strIngredient17, response.meals[0].strIngredient18, response.meals[0].strIngredient19, response.meals[0].strIngredient20];    
                let measurementList = [response.meals[0].strMeasure1,response.meals[0].strMeasure2, response.meals[0].strMeasure3, response.meals[0].strMeasure4,response.meals[0].strMeasure5, response.meals[0].strMeasure6, response.meals[0].strMeasure7, response.meals[0].strMeasure8, response.meals[0].strMeasure9, response.meals[0].strMeasure10, response.meals[0].strMeasure11, response.meals[0].strMeasure12, response.meals[0].strMeasure13, response.meals[0].strMeasure14, response.meals[0].strMeasure15, response.meals[0].strMeasure16, response.meals[0].strMeasure17, response.meals[0].strMeasure18, response.meals[0].strMeasure19, response.meals[0].strMeasure20];
                
                generateMusic(response.meals[0].strArea);
                console.log(ingredientList);
                console.log(measurementList);
            });
=======
        mainIngredient="";        


        
        

        
       

        function makeRecipeCard(id){
        $.ajax({
           url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id,
           method: "GET"
           
        }).then(function(response){
            $("#foodPic").attr("src", response.meals[0].strMealThumb)
            console.log(response);
            let ingredientList = [response.meals[0].strIngredient1,response.meals[0].strIngredient2, response.meals[0].strIngredient3, response.meals[0].strIngredient4,response.meals[0].strIngredient5, response.meals[0].strIngredient6, response.meals[0].strIngredient7, response.meals[0].strIngredient8, response.meals[0].strIngredient9, response.meals[0].strIngredient10, response.meals[0].strIngredient11, response.meals[0].strIngredient12, response.meals[0].strIngredient13, response.meals[0].strIngredient14, response.meals[0].strIngredient15, response.meals[0].strIngredient16, response.meals[0].strIngredient17, response.meals[0].strIngredient18, response.meals[0].strIngredient19, response.meals[0].strIngredient20]
            
        
            let measurementList = [response.meals[0].strMeasure1,response.meals[0].strMeasure2, response.meals[0].strMeasure3, response.meals[0].strMeasure4,response.meals[0].strMeasure5, response.meals[0].strMeasure6, response.meals[0].strMeasure7, response.meals[0].strMeasure8, response.meals[0].strMeasure9, response.meals[0].strMeasure10, response.meals[0].strMeasure11, response.meals[0].strMeasure12, response.meals[0].strMeasure13, response.meals[0].strMeasure14, response.meals[0].strMeasure15, response.meals[0].strMeasure16, response.meals[0].strMeasure17, response.meals[0].strMeasure18, response.meals[0].strMeasure19, response.meals[0].strMeasure20]
            
            console.log(response.meals[0].strArea);
            console.log(response.meals[0].strInstructions);
            console.log(ingredientList);
            console.log(measurementList);
            
            

            //going to go the long route and just type each one out one at a time since you can't access them in the array meals. 
            //var ingredientList = [response.meals.strIngredient1, response.meals.strIngredient2, response.meals.strIngredient3, response.meals.strIngriedient4, response.meals.strIngredient5, response.meals.strIngredient6, response.meals.strIngriedient7, response.meals.strIngredient8, response.meals.strIngredient9, response.meals.strIngriedient10, response.meals.strIngriedient11, response.meals.strIngredient12, response.meals.strIngredient13, response.meals.strIngriedient14, response.meals.response.meals.strIngredient15, response.meals.strIngredient16, response.meals.strIngriedient17, response.meals.strIngredient18, response.meals.strIngredient19, response.meals.strIngriedient20];
            for (var i=0; i<ingredientList.length; i++){
                //console.log(ingrediendtList[i]);
                
                
            }
            
            

        });
        //this function will make the recipe card 
        // use id number w/ ajax w/ url 
        //https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealIDgoesHere}
        //link to card-content
        //strInstructions has info for how to make

        }
    });


    //starting to use the last fm
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



