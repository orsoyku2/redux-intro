
import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <div className="header">
                    <Link className="link" exact to="/">Dashboard</Link>
                    <Link className="link" to="/cart">Cart</Link>
        </div>
    )
}

