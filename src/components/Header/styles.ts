import styled from 'styled-components'

export const Component = styled.div`
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

`
export const Logo = styled.img`
  width: 111px;
  height: 30px;
  margin-right: 50px;

`