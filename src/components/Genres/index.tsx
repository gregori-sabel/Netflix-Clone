import { useEffect, useState } from "react"
import Tmdb from "../../Tmdb";
import { Component } from './styles'
import Genre from "./Genre";

interface MovieType{
  id: string;
  original_title: string;
  poster_path: string
}

interface GenreData {
  slug: string,
  title: string,
  items: {
    results: MovieType[];
  }
}

export function Genres(){
  const [genreList, setGenreList] = useState<GenreData[] | null>();
  
  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setGenreList(list.reverse())
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