import React from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';


import useFetch from './useFetch';


function BlogDetails() {
    // ROUTE PARAMETER TO GET THE BLOG ID
    const { id } = useParams();

    // MAKING A REQUEST TO GET DETAILS OF A SINGLE BLOG
    const url = `http://localhost:8000/blogs/${id}`;

    // MY OWN CUSTOM HOOK
    const { data: blog, isPending, error } = useFetch(url);

    const history = useHistory();


    const deleteBlog = () => {
        console.log("Delete Blog");

        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE"
        }).then(() => {

            // GOING BACK TO THE MAIN PAGE WHEN THE BLOG IS DELETED
            history.push("/");
        })
    }

    return (

        // DISPLAYING THE DETAILS OF A SINGLE BLOG
        <div className='blog-details'>

            {isPending && <div>Loading...</div>}

            {error && <div>{error}</div>}

            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={deleteBlog}>delete</button>
                </article>
            )}

        </div>
    )
}

export default BlogDetails
