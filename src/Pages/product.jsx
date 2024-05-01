import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/a";
import { useState } from "react";

// const ProductPage = () => {
//     // Create card product components and render 5 times
//     const cardProducts = [...Array(5)].map((_, i) => (
//         <CardProduct key={i}>
//             {/* Card header */}
//             <CardProduct.Header gambar="/images/product-1.jpg" />
//             {/* Card body */}
//             <CardProduct.Body title="jordan easy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ab in?</CardProduct.Body>
//             {/* Card footer */}
//             <CardProduct.Footer price="1000000" />
//         </CardProduct>
//     ));

//     return (
//         <div className="flex justify-center py-5 px-3">{/* Container */}
//             {cardProducts} {/* Render card products */}
//         </div>
//     );
// }
const products = [
    {
        id: 1,
        name: 'jordan easy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ab in?',
        image: '/images/product-1.jpg',
        price: 1000000
    },
    {
        id: 2,
        name: 'jordan runing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ab in? lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ab in?',
        image: '/images/fashion-shoes.jpg',
        price: 1500000
    },
    {
        id: 3,
        name: 'jordan high',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ab in?',
        image: '/images/run.jpg',
        price: 2000000
    }
]

const email = localStorage.getItem('email');

const ProductPage = () => {
    const [cart, setCart] = useState([
        {
            id:1,
            // name:"jordan easy",
            qty:1,
        }
    ]);
    const hendleLogout = () => {
        localStorage.removeItem('password');
        localStorage.removeItem('email');
        window.location.href = "/login";
    }

    const hendleAddToCart = (id) => {
        if (cart.find(item => item.id === id)) {
          setCart(cart.map(item => item.id === id ? {
          ...item, qty: item.qty + 1              
          }: item));
        }else{
        setCart([
            ...cart,
            {
                id,
                qty: 1
            }
        ]);
        }
    }
    return (
        <Fragment>
            <div className="bg-blue-600 flex flex-row items-center justify-end  h-20 text-white">
                <ul className="flex ">
                    <li className="flex-row  px-3"><Button>Home</Button></li>
                    <li className="flex-row  px-3"><Button>Product</Button></li>
                    <li className="flex-row  px-3"><Button>About</Button></li>
                    <li className="flex-row  px-3"><Button>Contact</Button></li> 
                    <li className="flex-row  px-3"><Button>{email}</Button></li> 
                    <li className="flex-row  px-3"><Button className="bg-black ml-5 rounded-lg" onClick={hendleLogout} >Logout</Button></li>
                </ul>
            </div>
            <div className="flex justify-center py-5 px-3"> 
                <div className="w-3/4 flex flex-wrap">
                {products.map((product) =>(
                <CardProduct key = {product.id}>
                    <CardProduct.Header gambar={product.image} />
                    <CardProduct.Body title={product.name}>{product.description}</CardProduct.Body>
                    <CardProduct.Footer price={product.price} id={product.id} hendleAddToCart = {hendleAddToCart}/>
                </CardProduct>
                        ))}
                </div>
                <div className="w-1/4 border bg-slate-200 border-gray-600 rounded-lg shadow">
                    <h1 className="text-3xl text-blue-600 font-bold">
                        Cart
                    </h1>
                    <table className="w-full text-sm text-left text-black border-separate dark:text-gray-400">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cart.map((item) => {
                            console.log(item);
                            const product = products.find((product) => product.id === item.id);
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{product.name}</td>
                                    <td>Rp {" "} {product.price.toLocaleString('id-ID',{styles:'currency',currency:'IDR'})}</td>
                                    <td>{item.qty}</td>
                                    <td>Rp {" "} {(product.price * item.qty).toLocaleString('id-ID',{styles:'currency',currency:'IDR'})}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </Fragment>
            );
}
export default ProductPage;