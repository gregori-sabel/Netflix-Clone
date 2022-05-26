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
  const [counter, setCounter] = useState(6)
  // const [moviesByGenre, setMoviesByGenre] = useState<MoviesByGenre[] | null>(null)
  const [moviesByGenre, setMoviesByGenre] = useState<MoviesByGenre[]>([{
    id: 'string',
    name: 'genero',
    movies: [{
      id: 'id',
      original_title: 'filme',
      poster_path: 'string',          
    }]
  }])

  const genreList = [28, 35, 99, 10751, 10749, 53, 37] 


  function getMoviesByGenre(){
    
    genreList.map(async genreId=>{
      const response = await api.get(`discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=${genreId}&page=1`) 

      setMoviesByGenre([...moviesByGenre, response.data.results]) 
      console.log(moviesByGenre)

    })

  }
  
  async function handleSearch() {
    const results = await api.get<GenreData[], any>(`/genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
    setGenres(results.data.genres)   

  }  
  // console.log(moviesByGenre)
  
  useEffect( () => {
    handleSearch() 
  }, [])
  
  useEffect(()=> {   
    getMoviesByGenre()
  }, [genres]) 

  return (
    <> 
    <button onClick={getMoviesByGenre} >grege</button>
      {/* { moviesByGenre?.map( genre =>( 
        <Component key={genre.id}>    
          <h1 key={genre.id}>{genre.name}</h1> 
          {genre.movies.map(movie => (
            <h1 key={movie.id}>{movie.original_title}</h1> 
          ))}
        </Component>         
      ))} */} 
    </>
  )
}