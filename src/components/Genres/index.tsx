import { useEffect, useState } from "react"
import Tmdb from "../../Tmdb";
import { Movie } from "../Movie";
import { MovieList, Genre, Component } from './styles'

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
  const [genreList, setGenreList] = useState<GenreData[] | null>();
  
  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setGenreList(list)
    }
    
    loadAll()

  })


  return (
    <Component>
      { genreList?.map( genre =>( 
        <Genre>
          <h1 key={genre.slug}>{genre.title}</h1> 
          <MovieList >
            {genre.items.results.map(movie => (
              <Movie key={movie.id} title={movie.original_title} poster={'https://image.tmdb.org/t/p/w780/'+movie.poster_path}/>
            ))}
          </MovieList>     
        </Genre>
      ))} 
    </Component>
  )
}