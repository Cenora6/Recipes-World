import React, {useEffect, useState} from 'react';
import {
    Route,
    BrowserRouter
} from 'react-router-dom';
import Home from "./components/Home";
import SingleRecipe from "./components/SingleRecipe";
import Category from "./components/Category";
import Area from "./components/Area";
import Ingredients from "./components/Ingredients";
import Names from "./components/Name";
import BlogPost from "./components/BlogPost";
import { AnimatedSwitch } from "react-router-transition";

const App = () => {

    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const updateSize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);

    }, []);

    return (
        <BrowserRouter basename={window.location.pathname || ''}>
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
                <Route exact path='/' component={() => <Home width={width} /> } />
                <Route exact path="/recipe/:id" component={SingleRecipe} />
                <Route exact path="/category" component={Category} />
                <Route exact path="/area" component={Area}/>
                <Route exact path="/ingredients" component={Ingredients}/>
                <Route exact path="/names" component={Names}/>
                <Route exact path="/blog/:id" component={BlogPost}/>
            </AnimatedSwitch>
        </BrowserRouter>
    );
}

export default App;
