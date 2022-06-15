import styled from 'styled-components'

export const Space = styled.div`
  height: 70px;

`

export const Component = styled.div`

  position: fixed;
  top:0px;
  left:0px;
  right:0px;
  z-index: 999;


  background-color: var(--black);
  padding: 20px 60px;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  div{
    display: flex;
    align-items: center;  
  }
 
`

export const Items = styled.div`
  display: flex;
  gap: 20px;
  color: white;

  > {
    &:hover{
      color: #a0a0a0;
      cursor: pointer;
    }
  }

  img{
    width: 30px;
    border-radius: 3px;
  }

`
export const Logo = styled.img`
  width: 111px;
  height: 30px;
  margin-right: 50px;

`