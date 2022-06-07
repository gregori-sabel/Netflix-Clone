import { useEffect, useState } from "react"
import Tmdb from "../../Tmdb";
import { Movie } from "../Movie";
import { MovieList, Component, Arrows } from './styles'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Genre from "./Genre";

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
        <Genre key={genre.slug} slug={genre.slug} title={genre.title} items={genre.items}/>
      ))} 
    </Component>
  )
}