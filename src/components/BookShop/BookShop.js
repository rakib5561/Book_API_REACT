import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './BookShop.css';

const BookShop = () => {
    const [books, setbooks] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() =>{

        fetch('../../bookdata.json')
            .then(res => res.json())
            .then(data => setbooks(data))

    }, []);

    const handleCart = (book) =>{
        const newCart = [...cart, book];
        setCart(newCart);
    }

    return (
        <div className="bookShop-container">
            <div className="books-container">
                {
                     books.map(book => <Book
                        key={book.id}
                         book={book}
                         handleCart={handleCart}
                         >
                         </Book>)
                }
            </div>
            <div className="cart-box">
                <Cart cart={cart}> </Cart>
            </div>
        </div>
    );
};

export default BookShop;