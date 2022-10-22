import CartIcon from "../Cart/CartIcon";
import Classes from './CartButton.module.css';
import { useContext,useEffect,useState } from "react";
import CartContext from "../Store/Cart-Context";
const CartButton=(props)=>{
    const [buttonishighlighted,setbuttonishighlighted]=useState(false);
    const cartCtx=useContext(CartContext);
    const numberofcartitems=cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
    },0)
const {items }=cartCtx
    const btnclasses=`${Classes.button} ${ buttonishighlighted ? Classes.bump: ''}`
    useEffect(()=>{
        if(cartCtx.items.length===0){
            return ;
        }
        setbuttonishighlighted(true)
const timer =        setTimeout(() => {
            setbuttonishighlighted(false);
            
        }, 300);
        return ()=>{
            clearTimeout(timer);

        
        }
    },[items])
    return <button className={btnclasses} onClick={props.onclick}>
        <span className={Classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={Classes.badge}>
            {numberofcartitems}
        </span>

    </button>
}

export default CartButton;