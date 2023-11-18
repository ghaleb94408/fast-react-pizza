import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetTotalCartPrice, GetTotalCartQuantity } from './cartSlice';
function CartOverview() {
  const totalCartQuantity = useSelector(GetTotalCartQuantity);
  const totalPrice = useSelector(GetTotalCartPrice);
  // const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);
  // const stats = {
  //   count: 0,
  //   totalPrice: 0,
  // };
  // cart.map((item) => {
  //   stats.count += item.quantity;
  //   stats.totalPrice += item.totalPrice;
  // });
  if (!totalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
