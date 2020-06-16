import React, {useState} from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Home from "./components/Home";
import {Navigation} from "./components/Navigation";
import {Footer} from "./components/Footer";
import {getRecipes} from "./api/getRecipes";
import SingleRecipe from "./components/SingleRecipe";
import Category from "./components/Category";
import Area from "./components/Area";
import Ingredients from "./components/Ingredients";

const App = () => {

    const [navDetails, setNavDetails] = useState<boolean>(false);

    function showNavigation() {
        setNavDetails(!navDetails);
    }

    getRecipes();

    return (
        <>
            <BrowserRouter>
                <Navigation showNavigation={showNavigation} details={navDetails}/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path="/recipe/:id" component={SingleRecipe} />
                    <Route path="/category" component={Category} />
                    <Route path="/area" component={Area}/>
                    <Route path="/ingredients" component={Ingredients}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
