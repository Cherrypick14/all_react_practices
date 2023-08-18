import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () =>{
    return (
        <>
        <Link to = "/">Home</Link>
        <Link to = "/categories">Categories</Link>
        <Link to = "/contacts">Contacts</Link>
        </>
    )
};