import React, {useEffect, useState} from 'react'
import axios from 'axios';

    
const ProductList = (props) => {
    const [product, setProduct] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:8000/api/product')
        .then(products =>{
            console.log(products)
            setProduct(products.data)
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {product.map( (product, i) =>{
                return(<p key={i}>Title: {product.title}, Price: {product.price}, Descripion: {product.description}</p>
            )})
            }
        </div>
    )
}
    
export default ProductList;