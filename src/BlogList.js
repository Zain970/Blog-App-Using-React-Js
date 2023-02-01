import React from 'react'

import Blog from './Blog'

function BlogList({ blogs, title }) {

    return (
        <>
            <div className="blog-list">

                <h2>{title}</h2>
                {
                    blogs.map((blog) => {

                        // Returning the blog template
                        return <Blog key={blog.id} id={blog.id} title={blog.title} author={blog.author}></Blog>
                    })
                }
            </div>
        </>
    )

}

export default BlogList