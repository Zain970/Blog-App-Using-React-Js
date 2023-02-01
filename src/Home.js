import React, { useEffect, useState } from 'react'

import BlogList from "./BlogList";
import useFetch from './useFetch';


function Home() {

    // MAKING A REQUEST TO GET ALL THE BLOGS
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">


            {isPending && <div>Loading.... </div>}

            {error && <div>{error}</div>}

            {blogs &&
                <BlogList blogs={blogs} title="All Blogs..."></BlogList>}

        </div>
    )
}

export default Home