import React,{useState} from "react";
import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [CartIsShown,setCartIsShown]=useState(false);

  const showcarthandler=()=>{
    setCartIsShown(true) ;
  }

  const hidecarthandler=()=>{
    setCartIsShown(false)
  }
  return (

    <CartProvider>
      { CartIsShown && <Cart onClose={hidecarthandler} />}
      <Header onshowcart={showcarthandler}/>
      <Meals/>
      </CartProvider>
  );
}

export default App;
