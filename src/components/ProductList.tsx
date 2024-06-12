import { useState, useEffect } from "react";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import Product from "./Product";

const ProductList = () => {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart();
    const { products } = useProducts();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (products?.length) {
            setIsLoading(false);
        }
    }, [products]);

    return (
        <main className="main main--products">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                products?.length ? products.map(product => {
                    const isInCart = cart.some(item => item.sku === product.sku);
                    return (
                        <Product
                            key={product.sku}
                            product={product}
                            dispatch={dispatch}
                            REDUCER_ACTIONS={REDUCER_ACTIONS}
                            isInCart={isInCart}
                        />
                    );
                }) : <p>No products found.</p>
            )}
        </main>
    );
};

export default ProductList;
