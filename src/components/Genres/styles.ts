import styled from "styled-components";

interface slideAmountProps{
  slideAmount: number;
}

export const Component = styled.div`

  overflow: hidden;
  padding-left: 60px;

  transform: translateY(-200px);

`

export const GenreComponent = styled.div`
  color: white;
  width: 100%;


  position: relative;

  h1{
    font-weight: bold;
    padding-bottom: 20px;
    padding-top: 40px;
  }

`

export const MovieList = styled.div<slideAmountProps>`
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

export const Arrows = styled.div<slideAmountProps>`
  width: 100% ;
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 150px;
  z-index: 1000;

  button{
    background-color: transparent;
    color: white;
    border: none
  }

  button:first-child{
    opacity: ${(props) => (props.slideAmount < 0 ? 100 : 0)}% ;
    transition: opacity 0.5s;
  }

`