import React, {useCallback} from 'react';
import {Categories, SortPopup} from "../components";
import PizzaBLock from "../components/PizzaBLock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../Redux/actions/filters";

const categoryNames = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    {name: 'Популярности', type: 'popylar'},
    {name: 'Цена', type: 'price'},
    {name: 'Алфавит', type: 'alphabet'}

]
const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items)
    const onSelectCategoty = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])
    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories
                        onClickItem={onSelectCategoty}
                        items={categoryNames}/>
                    <SortPopup items={sortItems}/>
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