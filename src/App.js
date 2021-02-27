import React from 'react';
import {Header} from "./components";
import Home from "./Pages/Home";
import {Route} from 'react-router-dom'
import Cart from "./Pages/Cart";

function App() {


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
             <Route path = "/" exact  component = {Home}/>
                <Route path = "/cart" exact  component = {Cart}/>
            </div>
        </div>
    );
}


export default App;
