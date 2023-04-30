import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../css/ProductAdd.css'

function ProductAdd(props) {
    const PRODUCT_MANAGEMENT_API = "https://6440a0effadc69b8e06f35f1.mockapi.io/api/";
    const { productId } = useParams();
    const isCreate = !productId;
    const [product, setProduct] = useState({});

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

    function handleChange(event) {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit() {
        axios
            .post(`${PRODUCT_MANAGEMENT_API}/products`, product)
            .then(res => {
                alert(
                    `${isCreate ? "Create" : "Edit"} product ${JSON.stringify(
                        res.data
                    )} successfully!!!`
                );
                window.location.href = "/";
            })
            .catch(err => {
                throw err;
            });
    }

    return (
        <div>
            <h1>Product Add</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input name="name" value={product.name || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Price</label>
                    <input name="price" value={product.price || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Quantity</label>
                    <input name="quantity" value={product.quantity || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Description</label>
                    <input name="description" value={product.description || ""} onChange={handleChange} />
                </div>
                <button type="button" onClick={handleSubmit}>
                    Add new product
                </button>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default ProductAdd;