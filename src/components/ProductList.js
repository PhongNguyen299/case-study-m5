import {useEffect, useState} from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import '../css/ProductList.css'

const ProductList = () => {
    const PRODUCT_MANAGEMENT_API = "https://6440a0effadc69b8e06f35f1.mockapi.io/api/";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${PRODUCT_MANAGEMENT_API}/products`)
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                throw err;
            })
    }, [products]);


    const handleCreate = () => {
        window.location.href = "/product/add"
    }

    return (
        <div className="product-list-container">
            <h1 className="product-list-title">PRODUCT MANAGEMENT</h1>
            <div className="product-list-actions">
                    <button className="product-list-button" type="button" onClick={handleCreate}>Create New Product</button>
            </div>
            <ProductItem items={products} />
        </div>
    )
}
export default ProductList;