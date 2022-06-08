import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Movie } from "../Movie";
import { Arrows, GenreComponent, MovieList } from "./styles";

interface MovieType{
  id: string;
  original_title: string;
  poster_path: string
}

interface GenreData{
  slug: string,
  title: string,
  items: {
    results: MovieType[];
  }
}



export default function Genre({ slug, title, items}:GenreData) {
  const [slideAmount, setSlideAmount] = useState(0)

  function slideLeft(){
    const newSlideAmount = slideAmount + 500 
    setSlideAmount((newSlideAmount > 0 ? 0 : newSlideAmount))
  }

  function slideRight(){
    const newSlideAmount = slideAmount - 500 
    setSlideAmount(newSlideAmount)
  }


  return(
    <>
      <GenreComponent >
        <h1 >{title}</h1> 
        <Arrows slideAmount={slideAmount}>
          <button type="button" onClick={() => slideLeft()}>
            <FiChevronLeft size='50px' />
          </button>
          <button type="button" onClick={slideRight}>
            <FiChevronRight size='50px' />
          </button>
        </Arrows>
        <MovieList slideAmount={slideAmount}>
          {items.results.map(movie => (
            <Movie key={movie.id} title={movie.original_title} poster={'https://image.tmdb.org/t/p/w780/'+movie.poster_path}/>
          ))}
        </MovieList>   
      </GenreComponent>
    </>
  )
}