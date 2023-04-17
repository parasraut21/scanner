

// proper code
import React, { useState } from 'react';
import { actionCreator } from "../state/index";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../state/action_creater/action_creater';
import Payment from './Payment';

export default function Cart() {
  const cartItems = useSelector(state => state.cartItems);
  const [showPayment, setShowPayment] = useState(false);

  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreator, dispatch);

  const handleCheckout = () => {
    // Perform some actions before checkout
    // actions.withdrawMoney(totalPrice); // Subtract the total price from the user's account

    // Show the payment component
    setShowPayment(true);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cartItems.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }

  if (showPayment) {
    return <Payment totalPrice={totalPrice} />;
  }

  return (
    <div>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md' style={{ "color": "white" }}>
        <table className='table table-hover'>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Total Price</th>
              <th scope='col'>Remove</th>
            </tr>
          </thead>
          <tbody className='text-light'>
            {cartItems.map((item, index) => (
              <tr key={item.code}>
                <th scope='row'>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => {
                    dispatch(removeFromCart({ index }));
                    actions.withdrawMoney(1);
                  }}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div><h2 className='fs-2'>Total Price: ₹ {totalPrice}</h2></div>
        <div>
          <button className='btn bg-success mt-5' onClick={handleCheckout}> Check Out </button>
        </div>
      </div>
    </div>
  )
}