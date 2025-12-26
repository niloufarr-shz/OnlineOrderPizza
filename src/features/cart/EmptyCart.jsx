import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <>
      <div className="py-6">
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      </div>
      <p className="font-bold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </>
  );
}

export default EmptyCart;
