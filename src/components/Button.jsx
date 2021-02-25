import React, {Component} from "react";

function Button({children, outline, cart}) {
    return (
        <button className={`button ${outline ? 'button--outline' : cart ? 'button--cart' : ''}`}>
            {children}
        </button>
    )
}

export default Button