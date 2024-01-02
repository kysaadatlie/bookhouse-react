import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import Books from '../components/Books';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const Book = () => {
    return (
        <>
            <div>
                <NavBar />
                <Books />
                <Footer />
            </div>
        </>
    )
}

export default Book;