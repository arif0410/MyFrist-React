import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import InputForm from "../components/Elements/Input";
import Button from "../components/Elements/Button";

/**
 * Component for displaying products in a table
 */
const ProductCrud = () => {
    // Hook for fetching products from API
    const [products, setProducts] = useState([]); // Initially empty array

    useEffect(() => {
        /**
         * Fetch products from API on mount
         */
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products"); // Get products from API
                setProducts(response.data); // Set products state to response from API
                console.log("Products:", response.data); // Log products
            } catch (error) {
                console.error("Error fetching products:", error); // Log error
            }
        };
        fetchProducts(); // Call fetchProducts on mount
    }, []); // Run only once

    return (
        <Fragment>
        <div className="flex justify-center py-5 px-3">                 
            <div className="w-full border bg-slate-200 border-gray-600 rounded-lg shadow">
                <h1 className="text-3xl text-blue-600 font-bold">Products</h1>
                <table className="w-full text-sm text-left text-black border-separate dark:text-gray-400">
                    <thead>
                        <tr className="bg-black text-white">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td className="font-bold text-xs">{product.title}</td>
                                <td>$ {product.price}</td>
                                <td>
                                    <button className="bg-yellow-500 text-white px-3 mx-1 py-1 rounded-lg">Edit</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="w-1/4 border bg-slate-200 border-gray-600 rounded-lg shadow">
                <h1 className="text-3xl text-blue-600 font-bold"> form Create</h1>
                <form action="">
                    <InputForm label="Name" type="text" placeholder="Name" name="name"/>
                    <InputForm label="Price" type="number" placeholder="Price" name="price"/>
                    <Button warna="bg-blue-600 w-full " type="submit">Create</Button>
                </form>
            </div>
        </div>
        </Fragment>
    );
}

export default ProductCrud;
