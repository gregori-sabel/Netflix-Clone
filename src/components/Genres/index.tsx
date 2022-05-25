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

interface GenreData {
  id: number,
  name: string,
}

export function Genres(){
  const [genres, setGenres] = useState<GenreData[] | null>(null)
  const [moviesByGenre, setMoviesByGenre] = useState<MoviesByGenre[] | null>(null)

  async function getMoviesByGenre(){
    if(genres){
      const array = await Promise.all([
        genres.map(async(genre) =>  {
          const response = await api.get(`discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=${genre.id}&page=1`)
  
            const results = response.data.results 
  
            const movies:Movie[] = results.map((movie: Movie) => { 
              return {
                id: String(movie.id),
                original_title: movie.original_title, 
                poster_path: movie.poster_path,   
              }
            })   
      
            const genreWithMovies = {  
              id: String(genre.id), 
              name: genre.name,
              movies: movies               
            }
            console.log(genreWithMovies)
            return genreWithMovies          
        })        
      ])
      console.log(array)  

    }
  }
  
  async function handleSearch() {

    const results = await api.get<GenreData[], any>(`/genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)


    setGenres(results)


    getMoviesByGenre()
  


  }


  useEffect( () => {
    handleSearch()

  }, [])
  
  

  return (
    <>
      { genres?.map( genre =>(
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