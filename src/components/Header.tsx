import Nav from "./Nav";
import useCart from "../hooks/useCart";

type HeaderProps = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ viewCart, setViewCart }: HeaderProps) => {
  const { totalPrice, totalItems } = useCart();

  return (
    <header className="header">
      <div className="header__title-bar">
          <h1>Shop Shop</h1>
          <div className="header__price-box">
              <p>Total Items: {totalPrice}</p>
              <p>Total Price: {totalItems}</p>
          </div>
        <Nav viewCart={viewCart} setViewCart={setViewCart} />
      </div>
    </header>
  )
}

export default Header