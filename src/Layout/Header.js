import React from 'react';
import CartButton from './CartButton';
import Classes from './Header.module.css';
import foodimage from './../food.jpg';

const Header=(props)=>{
    return <React.Fragment>
        <header className={Classes.header}>
            <h1>Meals.. </h1>
            <CartButton onclick={props.onshowcart}></CartButton>
        </header>
        <div className={Classes['main-image']}>
            <img src={foodimage}/>
        </div>
    </React.Fragment>

    
}

export default Header;