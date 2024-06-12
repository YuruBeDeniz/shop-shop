import useCart from "../hooks/useCart";

const Footer = () => {
  const { totalPrice, totalItems } = useCart();

  return (
    <footer className="footer">
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
    </footer>
  )
}

export default Footer