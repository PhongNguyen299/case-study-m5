import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../css/ProductDetail.css'

function ProductDetails() {
    const PRODUCT_MANAGEMENT_API = "https://6440a0effadc69b8e06f35f1.mockapi.io/api/";
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        if (productId) {
            axios
                .get(`${PRODUCT_MANAGEMENT_API}/products/${productId}`)
                .then(res => {
                    setProduct(res.data);
                })
                .catch(err => {
                    throw err;
                });
        }
    }, [productId]);

    function getProducts() {
        window.location.href = "/";
    }

    return (
        <div className={"detail"}>
            <h1>Product Details</h1>
            <p><b>Id:</b> {product.id}</p>
            <p><b>Name:</b> {product.name}</p>
            <p><b>Price:</b> {product.price}</p>
            <p><b>Quantity:</b> {product.quantity}</p>
            <p><b>Desccription:</b><br/> {product.description}</p>
            <button type="button" onClick={getProducts}>
                Product List
            </button>&nbsp;
        </div>
    );
}

export default ProductDetails;