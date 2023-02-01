import React from 'react';

// React has its own link tag
import { Link } from 'react-router-dom'

function Blog(props) {

    const { title, author, id } = props;

    // console.log("Body : ", body);

    return (
        <div className='blog-preview'>

            {/*THIS IS A LINK TO GET DETAILS OF A BLOG */}
            <Link to={`/blogs/${id}`}>
                <h2>{title}</h2>
                <p>Written by {author}</p>

            </Link>
        </div>
    )
}

export default Blog