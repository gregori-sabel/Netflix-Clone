import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { CoverImage } from "./CoverImage"


interface movieData {
  id: number,
  title: string,
  poster_path: string,
  backdrop_path: string,
}

export function PosterShow(){
  const [movies, setMovie] = useState<movieData[] | null>(null)


  async function handleSearch() {
    api.get(`/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
      .then(res => setMovie(res.data.results))
  }
    

  useEffect( () => {
    handleSearch()
  }, [])
  
  return (
    <>
      { movies && (
        <CoverImage link={movies[0].backdrop_path} />
      )}
    </>
  )
}