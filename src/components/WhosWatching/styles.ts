import styled from 'styled-components'

interface ProfileProps{
  hueRotation: number;
}

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 60px;
` 

export const Content = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a{
    text-decoration: none;
  }

  button{
    color: gray;

    font-size: 20px;
    letter-spacing: 2px;

    background-color: transparent;
    border: solid 1px gray;
    padding: 10px 30px;

    margin-top: 80px;
  }
`

export const Component = styled.div`

  color: white;

  gap: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 50px;
  }

` 

export const Profile = styled.div<ProfileProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  img{
    width: 180px;

    border-radius: 5px;

    filter: hue-rotate( ${(props) => (props.hueRotation*40)}deg);


    &:hover{
      outline: 4px solid white;
      outline-offset: -4px;
    }
  }
  
  label{
    font-size: 20px;
    color: gray;
  }


`
export const Profiles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  gap: 40px;
`
