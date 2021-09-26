import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ('./Book.css')

const Book = (props) => {
    const {name, price, image, author, published_year, last_edition} = props.book;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="Book-cart-style">
            <div className="cart">
            <img src={image} alt="" />
            <div className="cart-details">
            <h2>Name : {name}</h2>
            <h3>Author : {author}</h3>
            <h3>Published Year : {published_year}</h3>
            <h3>Last Edition : {last_edition}</h3>
            <h3>Price : {price}</h3>
            
            <button  
            className="cartBtn"
            onClick={() => props.handleCart(props.book)}
            >{element} Add to Cart</button>   
            </div>
            </div>
        </div>
    );
};

export default Book;