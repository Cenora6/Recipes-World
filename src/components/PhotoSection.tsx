import axios from 'axios';
import React, {useState} from 'react';

const API_KEY = '1FavNGGDNEiol0lspKANnpqyyBWdzLYvV5rVAlGw-Zg';
const url = 'https://api.unsplash.com/search/photos?page=3&query=dish&order_by=relevant&per_page=13';

interface Recipe {
    title: string
    image: string
}

interface RecipeResponse {
    recipes: Recipe[]
}
function PhotoSection() {
    const [recipes, setRecipes] = useState<string[]>([]);

    let recipesPhotos: any[] = [];
    axios
        .get<any>
        (`${url}&client_id=${API_KEY}`)
        .then(response => {
            response.data.results.map( (item: any) => {  return recipesPhotos.push(item.urls.regular) })
            setRecipes(recipesPhotos)
        })
        .catch(err => {
            console.log(err.message)
        })

    return (
        <div className='home__photo' id='photo'>
            <h2>Popular Dishes</h2>
            {
                recipes.map( (photo: string, index: number) => {
                    return (
                        <div key={index} className='home__photo__single'>
                            <img src={photo} alt={`dish${index}`}/>
                            <span>Lorem Ipsum {index + 1}</span>
                        </div>

                    )
                })
            }
        </div>
    );
}

export default PhotoSection;
