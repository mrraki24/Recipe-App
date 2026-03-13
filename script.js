async function searchRecipe(){

    let input = document.getElementById("searchInput").value;
    let container = document.getElementById("recipeContainer");

    container.innerHTML = "Loading...";

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;

    let response = await fetch(url);
    let data = await response.json();

    container.innerHTML = "";

    if(data.meals){
        data.meals.forEach(meal => {

            let recipe = `
            <div class="recipe-card">
                <img src="${meal.strMealThumb}">
                <h3>${meal.strMeal}</h3>
                <p>${meal.strArea} Food</p>
                <a href="${meal.strYoutube}" target="_blank">Watch Recipe</a>
            </div>
            `;

            container.innerHTML += recipe;
        });
    }else{
        container.innerHTML = "No recipe found";
    }
}