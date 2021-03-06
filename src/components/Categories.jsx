import React, {useState} from "react";

function Categories({items,onClickItem}) {
    const [chooseItems, setChooseItems] = useState(0)
    const onClickItems = (index) => {
        setChooseItems(index)
        onClickItem(index)
    }

    return (
        <div className="categories">
            <ul>
                {items && items.map((el, index) => {
                    return <li onClick={() => onClickItems(index)}
                               key={`${el}_${index}`}
                               className={chooseItems === index ? 'active' : ''}>
                        {el}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Categories