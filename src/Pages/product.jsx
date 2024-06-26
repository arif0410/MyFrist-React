import { Fragment, useState, useEffect, useRef } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/a";
import { getProducts } from "../services/product.service";


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
// const products = [
//     {
//         id: 1,
//         name: 'jordan easy',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ab in?',
//         image: '/images/product-1.jpg',
//         price: 1000000
//     },
//     {
//         id: 2,
//         name: 'jordan runing',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ab in? lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ab in?',
//         image: '/images/fashion-shoes.jpg',
//         price: 1500000
//     },
//     {
//         id: 3,
//         name: 'jordan high',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ab in?',
//         image: '/images/run.jpg',
//         price: 2000000
//     }
// ]

const email = localStorage.getItem('email');

const ProductPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    },[]);

    useEffect(() => {
        if (products.length > 0 && cart.length < 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find(p => p.id === item.id);
                return acc + (product.price * item.qty);
            },0);
            setTotalPrice(sum);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    },[cart, products]);

    useEffect(() => {
           getProducts((data) => {
               setProducts(data);
           });
    },[])
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
    };

    // useRef
    const chartRef = useRef([
        {
            id: 1,
            qty: 1
        }
    ]);

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
                    {products.length > 0 && products.map((product) =>(
                    <CardProduct key = {product.id}>
                        <CardProduct.Header gambar={product.image} />
                        <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
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
                            <tr className="bg-black text-white">
                                <th>id</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>

                        {/* {chartRef.current.map((item) => { */}
                         {products.length > 0 && cart.map((item) => {
                            console.log(item);
                            const product = products.find((product) => product.id === item.id);
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td className="text-xs font-bold ">{product.title.substring(0,20)}</td>
                                    <td>$ {" "} {product.price.toLocaleString('id-ID',{styles:'currency',currency:'USD'})}</td>
                                    <td>{item.qty}</td>
                                    <td>$ {" "} {(product.price * item.qty).toLocaleString('id-ID',{styles:'currency',currency:'USD'})}</td>
                                </tr>
                            );
                        })}
                        <tr className=" bg-black text-white">
                            <td colSpan={4} className="text-xl font-bold">Total Price</td>
                            <td>
                                <b>$ {" "} {totalPrice.toLocaleString('id-ID',{styles:'currency',currency:'USD'})}</b>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="mb-5 flex justify-center">
                    <Counter/>
            </div> */}
            
        </Fragment>
            );
}
export default ProductPage;