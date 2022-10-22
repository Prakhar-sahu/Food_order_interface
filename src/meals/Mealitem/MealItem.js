import Classes from "./MealItem.module.css";
import MealItemForum from "./MealItemForum";
import { useContext } from "react";
import CartContext from "../../Store/Cart-Context";
const MealItem = (props) => {
  const cartctx= useContext(CartContext)

  const addtoCartHandler=amount=>{
    console.log('add to cart handler');
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount : amount ,
      price: props.price
    });

  };
  const paisa = `$${props.price.toFixed(2)}`;
  return (
    <li className={Classes.meal}>
      <div>
        <h2>{props.item}</h2>
        <div className={Classes.description}>{props.description}</div>
        <div className={Classes.price}>{paisa}</div>
      </div>
      {/* {console.log('betichod chal ja')} */}
      <div>
        <MealItemForum  onAddtoCart={addtoCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
