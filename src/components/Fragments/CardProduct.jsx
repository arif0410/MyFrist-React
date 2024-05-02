import Button from "../Elements/Button";
const CardProduct = (props) =>{
    const {children} = props;
    return(
        <div className="w-full flex flex-col mx-2 my-2 justify-between max-w-sm bg-gray-800 border border-gray-600 rounded-lg shadow">
            {children}
        </div>
    )
}

const Header = (props) =>{
    const {gambar} = props;
    return(
        <a href="#">
            <img src={gambar} alt="product" className="p-8 rounded-t-lg h-64 w-full " />
        </a>
    )
}
const Body = (props) =>{
    const {children, title} = props;
    return(
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">{title.substring(0,20)}</h5>
                <p className="text-m text-white">
                    {children.substring(0,60)}...
                </p>
            </a>
        </div>
    )
}

const Footer = (props) =>{
    const {price,id, hendleAddToCart} = props;
    return(
        <div className="flex items-center justify-between px-5 pb-5 ">
            <span className="text-xl font-bold text-white">$ {" "} {price.toLocaleString('id-ID',{styles:'currency',currency:'USD'})}</span>
            <Button className="w-full" onClick={() => hendleAddToCart(id)}>Beli</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;