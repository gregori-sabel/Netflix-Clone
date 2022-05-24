import React from 'react';
import { Genres } from './components/Genres';
import { Header } from './components/Header';
import { PosterShow } from './components/PosterShow';

export function App() {
  return (
    <>
      <Header />
      <PosterShow />
      <Genres />
    </>
  );
}

