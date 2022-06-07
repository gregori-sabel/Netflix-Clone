import styled from "styled-components";

interface BoxProps{
  color: string;
  order: string;
}

export const Component = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
  align-content: center; 


`


export const Box = styled.div<BoxProps>`
  width: 300px;
  height: 60px;
  background-color: ${props => props.color};
  order: ${props => props.order};
  margin: 5px;
  /* flex: 1; */
`