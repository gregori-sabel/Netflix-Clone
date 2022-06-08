import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Movie } from "../Movie";
import { Arrow, GenreComponent, MovieList } from "./styles";

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
    const newSlideAmount = slideAmount + window.innerWidth 
    setSlideAmount((newSlideAmount > 0 ? 0 : newSlideAmount))
  }

  function slideRight(){

    const itemsWidth = (items.results.length * (285 + 10) + 60 + 20)
    
    const WidthValue = -1 * (itemsWidth - window.innerWidth)
    console.log(WidthValue)
    
    const slideTimes = Math.ceil(itemsWidth / window.innerWidth)
    const newSlideAmount = slideAmount - (itemsWidth / slideTimes)     
    console.log(`itemsWidth:${itemsWidth} windown:${window.innerWidth}  slideTimes:${slideTimes}  newPush:${window.innerWidth / slideTimes}`)
    if( newSlideAmount < (WidthValue) ){
      setSlideAmount(WidthValue)
    }else{
      setSlideAmount(newSlideAmount)
    }
  }


  return(
    <>
      <GenreComponent >
        <h1 >{title} | {slideAmount}</h1> 
        <Arrow slideAmount={slideAmount} side='left'>
          <button type="button" onClick={() => slideLeft()}>
            <FiChevronLeft size='50px' />
          </button>
        </Arrow>
        <Arrow slideAmount={slideAmount} side='right'> 
          <button type="button" onClick={slideRight}>
            <FiChevronRight size='50px' />
          </button>
        </Arrow>
        <MovieList slideAmount={slideAmount}>
          {items.results.map(movie => (
            <Movie key={movie.id} title={movie.original_title} poster={'https://image.tmdb.org/t/p/w780/'+movie.poster_path}/>
          ))}
        </MovieList>   
      </GenreComponent>
    </>
  )
}