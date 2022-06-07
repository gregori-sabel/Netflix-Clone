import { useEffect, useState } from "react"
import Tmdb from "../../Tmdb";
import { Movie } from "../Movie";
import { MovieList, Genre, Component, Arrows } from './styles'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
  const [slideAmount, setSlideAmount] = useState(0)
  
  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setGenreList(list)
    }
    
    loadAll()

  })

  function slideLeft(genre: GenreData){
    // genre.slideAmount = 500
    setSlideAmount(slideAmount + 500)
  }

  function slideRight(){
    setSlideAmount(slideAmount - 500)
  }


  return (
    <Component>
      { genreList?.map( genre =>( 
        <Genre key={genre.slug}>
          <h1 >{genre.title}</h1> 
          <Arrows>
            <button type="button" onClick={() => slideLeft(genre)}>
              <FiChevronLeft size='50px' />
            </button>
            <button type="button" onClick={slideRight}>
              <FiChevronRight size='50px' />
            </button>
          </Arrows>
          <MovieList slideAmount={slideAmount}>
            {genre.items.results.map(movie => (
              <Movie key={movie.id} title={movie.original_title} poster={'https://image.tmdb.org/t/p/w780/'+movie.poster_path}/>
            ))}
          </MovieList>     
        </Genre>
      ))} 
    </Component>
  )
}