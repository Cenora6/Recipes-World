import axios from "axios";
const searchTerm = "chicken";
const url1 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
const url2 = `https://www.themealdb.com/api/json/v1/1/random.php`;
const url3 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;

export function getRecipes() {
    axios
        .get<any>
        (url1)
        .then(response => {
            // console.log(response.data.meals)

        })
        .catch(err => {
            console.log(err);
        });
}

export function getRandomRecipes() {
    axios
        .get<any>
        (url2)
        .then(response => {
            // console.log(response.data.meals)
        //    strMeal, strMealThumb, idMeal
        })
        .catch(err => {
            console.log(err);
        });
}

export function searchRecipeById() {
    axios
        .get<any>
        (url3)
        .then(response => {
            // console.log(response.data.meals)

        })
        .catch(err => {
            console.log(err);
        });
}