import React from 'react';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
    return (
        <>
            <HashRouter>
                <Navigation/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </HashRouter>
        </>
    );
}

export default App;
