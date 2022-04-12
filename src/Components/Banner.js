import React, { useState, useEffect } from 'react'
import axios from '../axios'
import requests from '../requests'
import './Banner.css'

const base_url = "https://image.tmdb.org/t/p/w500/"


function Banner({fetchurl}) {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ])
        }
        fetchData()
    }, [])

    function truncate(str, max) {
        return str.length > max ? str.substr(0, max-1) + '…' : str;
      }

  return (
    <header className='bannerContainer'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${base_url}${movie.backdrop_path})`,
            backgroundPosition: 'center center'
        }}
    >
        <div className='bannerContents'>
            <h1 className='bannerTitle'>{movie?.title || movie?.original_name}</h1>
            <div className='bannerBtns'>
                <button className='bannerBtn'>Play</button>
                <button className='bannerBtn'>My List</button>
            </div>
            <h1 className='bannerDescription'>{movie.overview}</h1>
        </div>   
        <div className='bannerFadeBottom' ></div> 
    </header>
  )
}

export default Banner