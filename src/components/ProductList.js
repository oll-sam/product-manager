import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

    
const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

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
                return(<p key={i}>
                    <Link to={"/product/" + product._id + "/edit"}>Title: {product.title}</Link>
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                    </p>
            )})
            }
        </div>
    )
}
    
export default ProductList;