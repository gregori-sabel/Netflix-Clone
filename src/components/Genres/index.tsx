import { useEffect, useState } from "react"
import { api } from "../../services/api"


interface genresData {
  genres: {
    id: number,
    name: string,
  }[]
}

export function Genres(){
  const [genres, setGenres] = useState<genresData | null>(null)


  async function handleSearch() {

    api.get(`/genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
      .then(res =>{ setGenres(res.data) })
  }
    

  useEffect( () => {
    handleSearch()
  }, [])
  
  console.log(genres?.genres)

  return (
    <>
      { genres?.genres.map( genre =>(
        
        <h1>{genre.name}</h1>
      ))}
    </>
  )
}