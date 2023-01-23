import { useEffect, useState } from "react";
import axios from 'axios';

// const API = process.env.API;
const API = "https://api.escuelajs.co/api/v1";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios(`${API}/products`);
    setProducts(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return products;
}


export default useGetProducts;