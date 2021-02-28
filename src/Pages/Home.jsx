import React from 'react';
import {Categories, SortPopup} from "../components";
import PizzaBLock from "../components/PizzaBLock";


const Home = ({items}) => {

    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories items={['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}/>
                    <SortPopup items={['Популярности', 'Цена', 'Алфавит']}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {items.map(el => {
                        return <PizzaBLock key={el.id} {...el}/> //{...el} для того чтобы не писать в PizzaBlock el.id el.name
                    })}
                </div>
            </div>
        </div>
    );

}

export default Home;