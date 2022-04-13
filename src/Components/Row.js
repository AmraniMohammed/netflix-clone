import React, {useState, useEffect} from 'react'
import axios from '../axios'
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'


const base_url = "https://image.tmdb.org/t/p/w500/"

function Row({title, fetchurl, isLargeRow}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchurl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchurl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie.name || movie.title || movie.original_name || movie.original_title || "" ) 
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'))
            })
            .catch(error => console.log(error))
        }
    }

    return (
        <div className='rowContainer'>
            <h1>{title}</h1>
            <div className='rowPosters'>
                {movies.map(movie => ( 
                    <img className={`rowPoster ${isLargeRow && "rowPosterLarger"}`} key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} onClick={() => handleClick(movie)} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row