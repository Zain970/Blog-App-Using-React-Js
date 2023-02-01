import React from 'react'

// React has its own link tag
import { Link } from 'react-router-dom'

function Navbar() {

    const linkStyle = { color: "white", backgroundColor: "#f1356d", borderRadius: "8px" }

    return (
        <nav className="navbar">

            <h1>The Dojo Blog</h1>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={linkStyle} >New Blog</Link>
            </div>

        </nav>
    )
}

export default Navbar
