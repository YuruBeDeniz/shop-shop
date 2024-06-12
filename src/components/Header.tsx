import Nav from "./Nav"

type HeaderProps = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ viewCart, setViewCart }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__title-bar">
          <h1>Shop Shop</h1>
          <div className="header__price-box">
              <p>Total Items: </p>
              <p>Total Price: </p>
          </div>
        <Nav viewCart={viewCart} setViewCart={setViewCart} />
      </div>
    </header>
  )
}

export default Header