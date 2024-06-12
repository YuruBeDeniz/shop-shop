import { ReducerAction } from "react"
import { ReducerActionType } from "../context/CartProvider"
import { ProductType } from "../context/ProductsProvider"

type ProductProps = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    isInCart: boolean,
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, isInCart }: ProductProps) => {
  return (
    <div>Product</div>
  )
}

export default Product