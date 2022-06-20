import styled from "styled-components";

type IconButtonProps = {
  colored?: boolean
}


export const Component = styled.div` 
  color: white;
  position: relative;


  img{
    object-fit: cover;
    width: 285px;
    height: 160px;

    border-radius: 5px 5px 5px 5px ;
  }

  transition: 0.2s cubic-bezier(0,.7,.36,1);
  transition-delay: 0.3s;
  // the animation of infos is in global css

  &:hover img {
    border-radius: 5px 5px 0px 0px ;
    

  }
  &:hover{
    transform: scale(1.2) translateY(-60px) translateZ(-1000px);
    /* visibility: visible; */
    z-index: 999;
    position: relative;
    
    box-shadow: 0px 0px 10px black;
  }
`

export const Infos = styled.div`
  position: absolute ;
  
  top: 160px;
  width: 285px;
  height: 160px;

  border: none;
  border-radius: 0px 0px 5px 5px;
  
  background-color: var(--black);
  box-shadow: 0px 0px 10px black;

  h1{
    position: absolute;
    bottom: calc(10px + 150px);
    left: 20px;
    margin: 0px;

    font-weight: 100;
    font-size: large;
  }

  transition-delay: 0.3s;
  /* visibility: hidden; */
  opacity: 0%;
  
  
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;

  gap: 10px;

  div{
    display: flex;
    gap: 10px;
  }

`

export const Extras = styled.div`
  display: flex;
  margin: 20px;
  gap: 10px;

  span {
    color: #46d369;
    font-size: medium;
    font-weight: bold;
    letter-spacing: -1px;
  }

  div + span{
    color: #fff;
    font-size: medium;
    font-weight: 500;
    margin-left: 35px;
  }

  h3{
    margin: 0px;
    
  }

`

export const Genres = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin: 20px;
  gap: 5px;



`

export const LittleBall = styled.div`
    width: 5px;
    height: 5px;
    background: darkgray;
    border-radius: 50%;
`


export const IconButton = styled.div<IconButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 30px;
  height: 30px;

  background-color: ${(props) => (props.colored ? "white" : "var(--dark-main)")};

  border-radius: 360px;
  border: ${(props) => (props.colored ? "solid 2px white" : "solid 2px darkgray")};
  /* border: solid darkgray; */


`

export const AgeIcon = styled.div`
  display: flex;
  position: absolute;

  padding: 5px;
  margin: 0px;

  top: 63px;
  left: 124px;

  background-color: #0d0d0d;

  font-weight: bold;
  
`

export const HDIcon = styled.div`
  height: 15px;
  display: flex;
  padding: 0px 5px 0px 5px ;
  margin: 0px;
  font-size: small;

  border: solid 1px darkgray;
  border-radius: 5px;

  span{
    height: 12px;
    margin: 0px;
    padding: 0px;
    color: white;
    font-size: 12px;
    font-weight: 100;
  }

`


