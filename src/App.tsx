import React, {useState} from 'react';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Home from "./components/Home";
import {Navigation} from "./components/Navigation";
import {Footer} from "./components/Footer";

function App() {

    const [navDetails, setNavDetails] = useState<boolean>(false);
    const [footerDetails, setFooterDetails] = useState<boolean>(false);

    function showNavigation() {
        setNavDetails(!navDetails);
    }

    function showFooter() {
        setFooterDetails(!footerDetails);
    }

    return (
        <>
            <HashRouter>
                <Navigation showNavigation={showNavigation} details={navDetails}/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
                <Footer showFooter={showFooter} details={footerDetails}/>
            </HashRouter>
        </>
    );
}

export default App;
