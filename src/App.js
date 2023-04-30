import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ProductList from "./components/ProductList";
import ProductAdd from "./components/ProductAdd";
import ProductDetails from "./components/ProductDetail";
import ProductEdit from "./components/ProductEdit";
import ProductDelete from "./components/ProductDelete";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path={`/product/:productId`} element={<ProductDetails />} />
          <Route path={"/product/add"} element={<ProductAdd />} />
          <Route path={`/product/edit/:productId`} element={<ProductEdit />} />
          <Route path={`/product/delete/:productId`} element={<ProductDelete/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
