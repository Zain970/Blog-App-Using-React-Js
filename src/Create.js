import React, { useState } from 'react'

import { useHistory } from 'react-router-dom';

function Create() {

    // FORM PARAMETERS
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();


    // WHEN FORM IS SUBMITTED
    const handleSubmit = (e) => {

        // PREVENT DEFAULT 
        e.preventDefault();

        const blog = {
            title,
            author,
            body
        }
        console.log("Blog : ", blog);

        setIsPending(true);

        // NOW WE HAVE TO MAKE A POST REQUEST TO ADD THE BLOG
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog added");

            // DISABLED THE adding... button
            setIsPending(false);

            // GOING BACK TO THE MAIN ALL BLOGS PAGE
            // history.go(-1);
            history.push("/");
        })
    }

    return (
        <div className='create'>

            <h2>Add a New Blog</h2>

            <form onSubmit={handleSubmit}>

                {/* BLOG TITLE */}
                <label >Blog title:</label>
                <input
                    value={title}
                    type="text"
                    required
                    onChange={(e) => { setTitle(e.target.value) }}
                />

                {/* BLOG BODY */}
                <label >Blog body:</label>
                <textarea
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }}

                ></textarea>


                {/* BLOG AUTHOR */}
                <select
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>


                {/* BUTTON FOR SUBMISSION */}
                {!isPending && <button >Add Blog</button>}


                {isPending && <button disabled>Adding blog... </button>}



            </form>
        </div>
    )
}

export default Create
