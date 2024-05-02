import axios from "axios";

export const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    })
    return response.data;
};