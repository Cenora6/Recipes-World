import axios from "axios";

export function getRecipes(setRecipeNames: (data: any) => void, searchTerm: string) {
    axios
        .get<any>
        (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(response => {
            setRecipeNames(response.data.meals)
        })
        .catch(err => {
            console.log(err);
        });
}

export function searchRecipeById(id: string, setSingle: (data: any) => void) {
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

export function getRecipesFromCategory (setCategoryRecipes: (data: any) => void, id: string) {
    axios
        .get<any>
        (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
        .then(response => {
            setCategoryRecipes(response.data.meals);
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

export function getAllIngredients(setIngredients: (data: any) => void) {
    axios
        .get<any>
        (`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        .then(response => {
            setIngredients(response.data.meals)
        })
        .catch(err => {
            console.log(err);
        });
}

export function getIngredientRecipes(setIngredientRecipe: (data: any) => void, id: string) {
    axios
        .get<any>
        (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`)
        .then(response => {
            setIngredientRecipe(response.data.meals)
        })
        .catch(err => {
            console.log(err);
        });
}

export const getTotalNumberOfRecipes = (areas: any, setRecipesNumber: (data: any) => void) => {
    let total: number = 0;
    let allRecipes: number[] = [];

    areas.forEach((area: any) => {
        axios
            .get<any>
            (`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area.strArea}`)
            .then(response => {
                allRecipes.push(response.data.meals.length);

                if (allRecipes.length === areas.length) {
                    total = allRecipes.reduce(
                        ( a, b ) => a + b,
                        0
                    )
                }

                total > 0 && setRecipesNumber(total)
            })
            .catch(err => {
                console.log(err);
            });
    })
}