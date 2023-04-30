import axios from "axios";
import '../css/ProductDelete.css'
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const ProductDelete = (props) => {
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


    function removeProduct() {
        if (productId) {
            axios
                .delete(`${PRODUCT_MANAGEMENT_API}/products/${productId}`)
                .then(res => {
                    alert(
                        `Remove product ${JSON.stringify(
                            res.data
                        )} successfully!!!`
                    );
                    window.location.href = "/";
                })
                .catch(err => {
                    throw err;
                });
        }
    }

    return(
        <div>
            <h1>Product Details</h1>
            <p><b>Id:</b> {product.id}</p>
            <p><b>Name:</b> {product.name}</p>
            <p><b>Price:</b> {product.price}</p>
            <p><b>Quantity:</b> {product.quantity}</p>
            <p><b>Desccription:</b> {product.description}</p>

            <button className={"button-delete"} type="button" onClick={removeProduct}>
                Remove
            </button>
            <button className={"button-delete"} type="button" onClick={getProducts}>
                Cancel
            </button>&nbsp;
        </div>
    )
}
export default ProductDelete;