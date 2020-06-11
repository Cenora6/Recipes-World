import axios from "axios";
const searchTerm = "chicken";
const url1 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

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

export function searchRecipeById(id: number, setSingle: (data: any) => void) {
    axios
        .get<any>
        (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => {
            setSingle(response.data.meals);
        })
        .catch(err => {
            console.log(err);
        });
}

export function getAllCategories(setCategory: (data: any) => void) {
    axios
        .get<any>
        (`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(response => {
            setCategory(response.data.categories);
        })
        .catch(err => {
            console.log(err);
        });
}

export function getAllAreas(setArea: (data: any) => void) {
    axios
        .get<any>
        (`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        .then(response => {
            setArea(response.data.meals);
        })
        .catch(err => {
            console.log(err);
        });
}
export function getRecipeFromArea(setAreaRecipes: (data: any) => void, id: string) {
    axios
        .get<any>
        (`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`)
        .then(response => {
            setAreaRecipes(response.data.meals);
        })
        .catch(err => {
            console.log(err);
        });
}

export function getAllIngredients() {
    axios
        .get<any>
        (`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        .then(response => {
            // console.log(response.data.meals)
        })
        .catch(err => {
            console.log(err);
        });
}