import React, {useEffect, useState} from 'react';
import {Header} from "./components";
import Home from "./Pages/Home";
import {Route} from 'react-router-dom'
import Cart from "./Pages/Cart";
import axios from "axios";

function App() {
    const [pizzas, setPizzas] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/db.json").then(({data}) => {
            setPizzas(data.pizzas)
        })
        axios.post("http://localhost:3000/db.json",{data:'text Data'})
    }, [])


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" exact render={() => <Home items={pizzas}/>}/>
                <Route path="/cart" exact component={Cart}/>
            </div>
        </div>
    );
}


export default App;
