import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../css/ProductEdit.css'
function ProductEdit() {
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
            .put(`${PRODUCT_MANAGEMENT_API}/products/${productId}`, product)
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

    function getProducts() {
        window.location.href = "/";
    }

    return (
        <div className="product-edit-container">
            <h1 className="product-edit-title">Product Edit</h1>
            <form className="product-edit-form">
                <div className="product-edit-input-container">
                    <label className="product-edit-label">Id</label>
                    <input readOnly className="product-edit-input" name="id" value={product.id || ""} onChange={handleChange} />
                </div>
                <div className="product-edit-input-container">
                    <label className="product-edit-label">Name</label>
                    <input className="product-edit-input" name="name" value={product.name || ""} onChange={handleChange} />
                </div>
                <div className="product-edit-input-container">
                    <label className="product-edit-label">Price</label>
                    <input className="product-edit-input" name="price" value={product.price || ""} onChange={handleChange} />
                </div>
                <div className="product-edit-input-container">
                    <label className="product-edit-label">Quantity</label>
                    <input className="product-edit-input" name="quantity" value={product.quantity || ""} onChange={handleChange} />
                </div>
                <div className="product-edit-input-container">
                    <label className="product-edit-label">Description</label>
                    <input className="product-edit-input" name="description" value={product.description || ""} onChange={handleChange} />
                </div>
                <div className="product-edit-button-container">
                    <button type="button" className="product-edit-back-button" onClick={getProducts}>
                        Back
                    </button>&nbsp;
                    <button type="button" className="product-edit-submit-button" onClick={handleSubmit}>
                        Edit
                    </button>
                </div>
            </form>
        </div>

    );
}

export default ProductEdit;