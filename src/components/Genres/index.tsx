import { useEffect, useState } from "react"
import { api } from "../../services/api"
import Tmdb from "../../Tmdb";
import { Component } from './styles'

interface Movie{
  id: string;
  original_title: string;
  poster_path: string
}

interface GenreData {
  slug: string,
  title: string,
  items: {
    results: Movie[];
  }
}


export function Genres(){
  // const [movieList, setMovieList] = useState([]);
  const [genreList, setGenreList] = useState<GenreData[] | null>();
  
  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setGenreList(list)
    }
    
    loadAll()

  })


  return (
    <> 
      { genreList?.map( genre =>( 
        <Component key={genre.slug}>    
          <h1 key={genre.slug}>{genre.title}</h1> 
          {genre.items.results.map(movie => (
            <div key={movie.id}>
              <h3>{movie.original_title}</h3> 
              <img src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} alt="" />
            </div>
          ))}
        </Component>         
      ))} 
    </>
  )
}