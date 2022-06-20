import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FlexComponent } from './components/FlexComponent';
import { Genres } from './components/Genres';
import { Header } from './components/Header';
import { PosterShow } from './components/PosterShow';
import { WhosWatching } from './components/WhosWatching';

export function App() {
  const [ loginIsDone, setLoginIsDone ] = useState(false)

  function HandleLogin(){
    setLoginIsDone(!loginIsDone)
    console.log(loginIsDone)
  }

  return (
    <>
      {!loginIsDone && <WhosWatching handleLogin={HandleLogin}/>}
      {loginIsDone && (
        <>
          <Header />
          <PosterShow />
          <Genres />
        </>
      )}          
    </>
    // <Routes>
    //   <Route path='/' element={<ChooseLogin/>}/>
    //   <Route path='/Home' element={<Home/>}/>
    //   <Route path='/flex' element={<Flex/>}/>
    // </Routes>
  );
}


// function ChooseLogin(){
//   return(
//     <>
//       <WhosWatching />
//     </>
//   )
// }


// function Home(){
//   return(
//     <>
//       <Header />
//       <PosterShow />
//       <Genres />
//     </>
//   )
// }

// function Flex(){
//   return(
//       <FlexComponent />
//   )
// }
