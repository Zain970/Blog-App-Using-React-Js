import React, { useEffect, useState } from 'react'

function useFetch(url) {
    // At the start these is no data
    const [data, setData] = useState(null);
    // At the start pending is true
    const [isPending, setIsPending] = useState(true);
    // At the start these is no error
    const [error, setError] = useState(null);

    // Only fire at the inital render
    useEffect(() => {

        // Stop the fetch
        const abortCont = new AbortController();

        // We are associating the abort controller with the fetch
        fetch(url, { signal: abortCont.signal }).then((res) => {

            // Outputting the response
            console.log("Res : ", res);

            // 1).If fetching produces error 
            // 2).Error is thrown and error is catched in the catch block
            if (!res.ok) {
                throw Error("could not fetch the data for that resource");
            }

            // If everything is Ok
            return res.json();

        }).then((data) => {

            setData(data);

            // Setting the error and pending state to be false
            setIsPending(false);
            setError(null);

        }).catch((error) => {

            console.log("Error : ", error);

            // 1).When we abort the fetch the fetch throws an error
            // 2).We are catching that error our here
            if (error.name === "AbortError") {
                console.log("Fetch Aborted")
            }
            else {
                setError(error.message);
                setIsPending(false);
            }
        })

        // 1).Abort the fetch with which it is associated
        // 2).Aborting the fetch throws an error
        // 3).And in error we are updating the state , so we have to stop updating the state
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch
