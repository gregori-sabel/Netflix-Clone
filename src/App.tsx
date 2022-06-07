import { Route, Routes } from 'react-router-dom';
import { FlexComponent } from './components/FlexComponent';
import { Genres } from './components/Genres';
import { Header } from './components/Header';
import { PosterShow } from './components/PosterShow';

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/flex' element={<Flex/>}/>
    </Routes>
  );
}


function Home(){
  return(
    <>
      <Header />
      <PosterShow />
      <Genres />
    </>
  )
}


function Flex(){
  return(
      <FlexComponent />
  )
}
