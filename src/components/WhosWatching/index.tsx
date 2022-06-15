import { Component, Content, Logo, Profile, Profiles } from "./styles";

export function WhosWatching(){

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
        <a href="http://localhost:3000/home">          
          <Profiles>
            { profiles.map((profile, i) => (
              <Profile hueRotation={i}>
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