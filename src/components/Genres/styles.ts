import styled from "styled-components";

interface slideAmountProps{
  slideAmount: number;
}


interface ArrowProps{
  slideAmount: number;
  side: string;
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
  transition: 0.8s cubic-bezier(.2,.01,.41,.99);

  
  /* left: ${(props) => (props.slideAmount)}px;
  transition: 0.5s ease-in-out; */

  h1{
    font-weight: 100;
  }

`

export const Arrow = styled.div<ArrowProps>`
  /* width: 100%; */
  /* display: flex; */
  /* justify-content: space-between; */

  position: absolute;
  /* left: -60px; */

  ${props => (props.side === 'left' ? 
    {left: -60}
   : 
    {right: 0}
  )}

  top: 97px;
  /* top: 57px; */
  z-index: 1000;

  button{
    height: 160px;
    background-color: rgba(0, 0, 0, 0.3);
    
    border: none;
    border-radius: 5px;
    color: white;
    
    display: flex;
    justify-content: center;
    align-items: center;

    transition: opacity 0.2s ease-out;

    &:hover{
      background-color: rgba(0, 0, 0, 0.7);
    }
  }


  opacity: 100%;

  opacity: ${(props) => ((props.side === 'right') || props.slideAmount < 0 ? 100 : 0)}% ;
  transition: opacity 0.5s;


`