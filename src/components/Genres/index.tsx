import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Component } from './styles'

interface Movie{
  id: string;
  original_title: string;
  poster_path: string
}


interface MoviesByGenre {
  id: string;
  name: string;
  movies: Movie[];
}

interface GenresData {
  genres: {
    id: number,
    name: string,
  }[]
}

export function Genres(){
  const [genres, setGenres] = useState<GenresData | null>(null)
  const [moviesByGenre, setMoviesByGenre] = useState<MoviesByGenre[] | null>(null
    // {
    //   id: 'greg',
    //   movies: [{id: 'greg', original_title: 'gregs', poster_path: 'httpgreg'}],
    //   name: 'greg'
    // }
  )


  async function handleSearch() {

    api.get(`/genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
      .then(res => setGenres(res.data))
      .then(() => {
        genres?.genres.map(genre => {
          api.get(`discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=${genre.id}&page=1`)
          .then(all => all.data.results)
          .then(res => {

            const genreWithMovies = {
                id: String(genre.id),
                name: genre.name,
                movies:
                  res.map((movie: Movie) => {
                    return {
                      id: String(movie.id),
                      original_title: movie.original_title,
                      poster_path: movie.poster_path,  
                    }
                  })                  
              }
              if(moviesByGenre){
                console.log('...moviesByGenre')
                console.log(...moviesByGenre)
                console.log("genreWithMovies")
                console.log(genreWithMovies)

                setMoviesByGenre([...moviesByGenre, genreWithMovies]) 
              } else {
                // console.log('1...moviesByGenre')
                // console.log(...moviesByGenre)
                console.log("1genreWithMovies")
                console.log(genreWithMovies)
                setMoviesByGenre([genreWithMovies])   
              }
          })
        })
      })    

  }


  useEffect( () => {
    handleSearch()
  }, [])
  
  // console.log(genres?.genres)
  // console.log(moviesByGenre)   

  return (
    <>
      { genres?.genres.map( genre =>(
        <Component key={genre.id}>
          <h1>{genre.name}</h1>
          {/* {genre?.map(genre => (
            <img src="" alt="" />
          ))} */}
        </Component>         
      ))}
    </>
  )
}