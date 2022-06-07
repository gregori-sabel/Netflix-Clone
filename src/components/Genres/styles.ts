import styled from "styled-components";

interface MovieListProps{
  slideAmount?: number;
}

export const Component = styled.div`

  overflow: hidden;

`

export const GenreComponent = styled.div`
  color: white;
  width: 100%;

  position: relative;

  h1{
    font-weight: 100;
  }

`

export const MovieList = styled.div<MovieListProps>`
  color: white;
  display: flex;
  gap: 10px;

  /* position: absolute;
  z-index: 0; */
  transform: translateX( ${(props) => (props.slideAmount)}px);
  transition: 0.5s ease-in-out;

  
  /* left: ${(props) => (props.slideAmount)}px;
  transition: 0.5s ease-in-out; */

  h1{
    font-weight: 100;
  }


`


export const Arrows = styled.div`
  width: 100% ;
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 130px;
  z-index: 1000;

  button{
    background-color: transparent;
    color: white;
    border: none
  }

`