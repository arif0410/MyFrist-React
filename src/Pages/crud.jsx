import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import InputForm from "../components/Elements/Input";
import Button from "../components/Elements/Button";

/**
 * Component for displaying products in a table
 */
const ProductCrud = () => {
    const [products, setProducts] = useState([]); // Initially empty array

    useEffect(() => {
 
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

    //untuk tambah
    const HandleCreate = (event) => {
        event.preventDefault();
        try {
            fetch("https://fakestoreapi.com/products", {
                method: "POST",
                body: JSON.stringify({
                    title: "test product",
                    price: 13.5,
                    description: "lorem ipsum set",
                    image: "https://i.pravatar.cc",
                    category: "electronic",
                }),
            })
                .then((res) => res.json())
                .then((json) => console.log(json));
        } catch (error) {
            console.error("Error fetching products:", error); // Log error
        }
    }

    //untuk edit sebagian
    // useEffect(() => {
    //     console.log("Products:", products); // Log products
    //     fetch('https://fakestoreapi.com/products/7',{
    //             method:"PATCH",
    //             body:JSON.stringify(
    //                 {
    //                     title: 'test product',
    //                     price: 13.5,
    //                     description: 'lorem ipsum set',
    //                     image: 'https://i.pravatar.cc',
    //                     category: 'electronic'
    //                 }
    //             )
    //         })
    //             .then(res=>res.json())
    //             .then(json=>console.log(json))
    // }, [products]);

    //untuk hapus
    const HandelDelete = async ( id) => {
        // event.preventDefault();
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error('Failed to delete product');
            }
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error("Error deleting product:", error);
        }  
        
    }

    return (
        <Fragment>
        <div className="flex justify-center py-5 px-3 mx-2">                 
            <div className=" mx-2 w-full border bg-slate-200 border-gray-600 rounded-lg shadow">
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
                                    <button className="bg-yellow-500 text-white px-3 mx-1 py-1 rounded-lg" >Edit</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg" onClick={() => HandelDelete(product.id)} >Delete</button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="px-3 w-1/4 border bg-slate-200 border-gray-600 rounded-lg shadow">
                <h1 className="text-3xl text-blue-600 font-bold"> form Create</h1>
                <form onSubmit={HandleCreate}>
                    <InputForm label="Name" type="text" placeholder="Name" name="title"/>
                    <InputForm label="Price" type="number" placeholder="Price" name="price"/>
                    <InputForm label="Description" type="text" placeholder="Description" name="description"/>
                    <InputForm label="Image" type="file" placeholder="Image" name="image"/>
                    <InputForm label="Category" type="text" placeholder="Category" name="category"/>
                    <Button warna="bg-blue-600 w-full " type="submit">Create</Button>
                </form>
            </div>
        </div>
        </Fragment>
    );
}

export default ProductCrud;
