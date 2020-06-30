import React, {useState} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Home from "./components/Home";
import {Footer} from "./components/Footer";
import SingleRecipe from "./components/SingleRecipe";
import Category from "./components/Category";
import Area from "./components/Area";
import Ingredients from "./components/Ingredients";
import Names from "./components/Name";
import BlogPost from "./components/BlogPost";
import posed, { PoseGroup } from 'react-pose';

const App = () => {
    console.log(window.location.pathname)

    return (
        <>
            <BrowserRouter>
                    <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path="/recipe/:id" component={SingleRecipe} />
                    <Route path="/category" component={Category} />
                    <Route path="/area" component={Area}/>
                    <Route path="/ingredients" component={Ingredients}/>
                    <Route path="/names" component={Names}/>
                    <Route path="/blog/:id" component={BlogPost}/>
                    </Switch>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
