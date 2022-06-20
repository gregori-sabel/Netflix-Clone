import { Component, Content, Logo, Profile, Profiles } from "./styles";

interface WhosWatchingProps{
  handleLogin: () => void;
}


export function WhosWatching({ handleLogin }: WhosWatchingProps){

  const profiles = [
      'BlueCube',
      'Sakura',
      'João e feijão',
      'Jojo',
      'Grég',
  ]
  

  return (
    <Content>
      <Logo src="./images/logo.png" alt="" />
      <Component>
        <h1>Quem está assitindo?</h1>  
        <a onClick={handleLogin}>          
          <Profiles>
            { profiles.map((profile, i) => (
              <Profile hueRotation={i} key={i}>
                <img src="./images/profile.png" alt="" />
                <label>{profile}</label>
              </Profile>    
            ))}
          </Profiles>
        </a>
      </Component>
      <button>Gerenciar Perfis</button>
    </Content>
  )
}