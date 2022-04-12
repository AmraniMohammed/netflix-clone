import React, {useState, useEffect} from 'react'


function Row({title, fetchurl}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
            const response = await request.json()
            setMovies(response.results)
        }
        fetchData()
    }, [])


    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Row