import React, {useState} from 'react';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Home from "./components/Home";
import {Navigation} from "./components/Navigation";
import {Footer} from "./components/Footer";
import {getRecipes} from "./api/getRecipes";
import SingleRecipe from "./components/SingleRecipe";

function App() {

    const [navDetails, setNavDetails] = useState<boolean>(false);

    function showNavigation() {
        setNavDetails(!navDetails);
    }

    getRecipes();

    return (
        <>
            <HashRouter>
                <Navigation showNavigation={showNavigation} details={navDetails}/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path="/recipe/:id" component={SingleRecipe} />
                </Switch>
                <Footer/>
            </HashRouter>
        </>
    );
}

export default App;
