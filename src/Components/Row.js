import React, {useState, useEffect} from 'react'
import axios from '../axios'
import "./Row.css"


const base_url = "https://image.tmdb.org/t/p/w500/"

function Row({title, fetchurl, isLargeRow}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchurl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchurl])

    console.table(movies)

    return (
        <div className='rowContainer'>
            <h1>{title}</h1>
            <div className='rowPosters'>
                {movies.map(movie => ( 
                    <img className={`rowPoster ${isLargeRow && "rowPosterLarger"}`} key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row