import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const CardList = () => {

    const [productList, setProductList] = useState([]);

    const getProductList = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/products")
            setProductList(response.data);
        } catch (error) {
            console.error("Error fetching product list:", error);
        }
    };

    useEffect(() => {
        getProductList ();
    }, []);

  return (
    <>
        <h1>상품 목록</h1>
        <div style={{
            display: "flex"
        }}>
        {
            productList.map( (card, index) => {
             return <Card key={card.no} card={card} />
            })
        }
        </div>
    </>
  )
}

export default CardList