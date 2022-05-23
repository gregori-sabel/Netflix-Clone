import styled from 'styled-components'

export const BlackLinear = styled.div`
    position: absolute;
    content: ' ';
    width: 100%;
    height: 100%;
    top: -4px;
    left: 0px;
    background-image: linear-gradient(to top, rgba(0,0,0,0.5), transparent);

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
  top: 120px;
  width: 500px;
  margin-left: 40px;
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
  }
  
  p{   
    font-size: large;
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

      font-weight: 800;
      font-size: 15px;
    }
  }

  button ~ button{
    background-color: rgba(108, 122, 137, 0.7);
    color: white;    
  }

`

