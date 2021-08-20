const CartItem = (props) => {
  return (
    <div className="cart-item">
      <p>{props.game}</p>
      <p>Price: {props.price}$</p>
      <p>Amount: {props.amount}</p>
      <button className="remove-item-btn">REMOVE</button>
    </div>
  );
};

export default CartItem;
