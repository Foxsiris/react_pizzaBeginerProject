import React, {useEffect, useState} from 'react';
import {Header} from "./components";
import Home from "./Pages/Home";
import {Route} from 'react-router-dom'
import Cart from "./Pages/Cart";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setPizzas} from "./Redux/actions/pizzas";

function App() {
    const dispatch = useDispatch()
    const items = useSelector(state => state.pizzas.items)

    useEffect(() => {
        axios.get("http://localhost:3000/db.json").then(({data}) => {
            dispatch(setPizzas(data.pizzas))
        })
    }, [])


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" exact render={() => <Home items={items}/>}/>
                <Route path="/cart" exact component={Cart}/>
            </div>
        </div>
    );
}


export default App;
