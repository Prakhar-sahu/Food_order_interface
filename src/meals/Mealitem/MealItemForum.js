import classes from "./MealItemForum.module.css";
import Input from "../../UI/Input";
import { useRef,useState } from "react";
// const MealItemForum = (props) => {
// const [amountisvalid,setamountisvalid]=useState(true)
//     const amountInputRef=useRef();

//   const submitHandler = (event) => {
//     event.preventdefault();
//     const enteredAmount=amountInputRef.current.value ;
//     const enteredAmoutNumber=+enteredAmount ;
//     {console.log(2)}
//     if (enteredAmount.trim().length===0 || enteredAmoutNumber<1) {
//         setamountisvalid(false)
//         return ;
//     }
//     props.onAddtoCart(enteredAmoutNumber);
//   };

//   return (
//     <form className={Classes.form} onSubmit={submitHandler} >
//       <Input
//         ref={amountInputRef}
//         label="Amount"
//         input={{
//           id: "amount_" + props.id,
//           type: "number",
//           min: "1",
//           max: "1000",
//           step: "1",
//           defaultValue: "1",
//         }}
//       />
//       <button   >+Add</button>
//       {!amountisvalid && <p>Please entere a proper value </p>}
//     </form>
//   );
// };

// export default MealItemForum;

// import { useRef, useState } from 'react';

// import Input from '../../UI/Input';
// import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    console.log('on add to cart')
    props.onAddtoCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;