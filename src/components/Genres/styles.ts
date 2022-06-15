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
  padding-bottom: 200px;
  /* margin-bottom: 20px; */

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

  &:hover{
    z-index: 90;
  }

`

export const MovieList = styled.div<slideAmountProps>`
  color: white;
  display: flex;
  gap: 10px;

  transform: translateX( ${(props) => (props.slideAmount)}px);
  transition: 0.8s cubic-bezier(.2,.01,.41,.99);

  h1{
    font-weight: 100;
  }

`

export const MovieWrapper = styled.div`


`

export const Arrow = styled.div<ArrowProps>`

  position: absolute;

  ${props => (props.side === 'left' ? 
    {left: -60}
   : 
    {right: 0}
  )}

  top: 97px;
  z-index: 1;

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