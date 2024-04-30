import Button from "../components/Elements/Button";
const ProductPage = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-sm bg-gray-800 border border-gray-600 rounded-lg shadow">
                <a href="#">
                    <img src="/images/product-1.jpg" alt="product" className="p-8 rounded-t-lg" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-white">Judul</h5>
                        <p className="text-m text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ab in? 
                        </p>
                    </a>
                </div>
                <div className="flex items-center justify-between px-5 pb-5">
                    <span className="text-3xl font-bold text-white">1000000</span>
                    <Button className="w-full">Beli</Button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;