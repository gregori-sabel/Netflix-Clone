import styled from 'styled-components'

interface ImageProps {
  url: string;
}



export const BlackLinearLeft = styled.div`
  position: absolute;
  content: ' ';
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-image: linear-gradient(120deg, rgba(20,20,20,0.5) 20%, transparent 50%);

`
export const BlackLinearDown = styled.div`
  position: absolute;
  content: ' ';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0px;
  background-image: linear-gradient(to top, rgba(20,20,20,1) 2%, transparent 50%);

`
export const Component = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 810px;
  position: relative;

  img{    
    position: absolute;
    width: 100%;
    height: 100%;
    top: -4px;
    left: 0px;
    object-fit: cover;
  }

`
export const Overview = styled.div`
  position: absolute;
  top: 200px;
  width: 600px;
  margin-left: 60px;
  /* background-color: black; */

  h1{
    font-weight: bold;  
    font-size: 60px;
    color: white;
    margin: 0;
  }
  
  h3{
    font-weight: bold;
    font-size: 30px;
    color: white;

    margin-bottom: 20px;
    margin-top: 20px;
  }
  
  p{   
    font-size: x-large;
    font-size: 22px;
    font-weight: 100;
    color: white;
    line-height: 150%;
  }


`
export const Buttons = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;


  button{
    
    display: flex;
    align-items: center;  
    justify-content: center;
    position: relative;

    gap: 20px;
    padding: 15px 30px;

    border: none;
    border-radius: 5px;    

    .icones{
      position: absolute;
      left: 15px;
      width: 25px;
      height: 25px;

    }
    .icon-play{
      width: 35px;
      height: 35px;
    }
    
    span{
      margin-left: 25px;

      font-weight: bold;
      font-size: 20px;

    }
  }

  button ~ button{
    background-color: rgba(108, 122, 137, 0.7);
    color: white;    
  }

`

