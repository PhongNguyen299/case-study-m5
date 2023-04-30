import ProductDelete from "./ProductDelete";
import '../css/ProductItem.css'
import {Link} from "react-router-dom";

const ProductItem = (props) =>{
    return (
        <div className="product-table-container">
            <table className="product-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th colSpan={3}>Action</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map(product => (
                    <tr key={product.id}>
                        <td>{product.id} </td>
                        <td>{product.name} </td>
                        <td className={""}>{product.price} </td>
                        <td className={"center"}>{product.quantity} </td>
                        <td>
                            <Link className="product-table-button" to={`/product/${product.id}`}>Detail</Link>
                        </td>
                        <td>
                            <Link className="product-table-button" to={`/product/edit/${product.id}`}>Edit</Link>
                        </td>
                        <td>
                            <Link className="product-table-button" to={`/product/delete/${product.id}`}>Remove</Link>

                            {/*<ProductDelete id={product.id} />*/}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>


    )
}

export default ProductItem;