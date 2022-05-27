import { Buttons, Component, Extras, Genres, Infos, AgeIcon, IconButton, HDIcon } from './styles'
import { FiPlay, FiPlus, FiThumbsUp, FiChevronDown } from "react-icons/fi";
import { FaPlay } from "react-icons/fa"
import { IconContext } from 'react-icons';

interface MovieProps{
  title: string;
  poster: string;
}

export function Movie( { title, poster }: MovieProps ) {
  return (
    <Component>
      <img src={poster} alt="" />
      <Infos>
        <h1>{title}</h1>
        <Buttons>
          <div>
            <IconContext.Provider value={{ color: 'black'}} >
              <IconButton colored > <FaPlay size='13px'/> </IconButton>
            </IconContext.Provider>
            <IconButton> <FiPlus size='14px' /> </IconButton>
            <IconButton> <FiThumbsUp size='14px' /> </IconButton>
          </div>
          <IconButton> <FiChevronDown size='14px' /> </IconButton>
        </Buttons>

        <Extras>
          <span>98% relevante</span>
          <AgeIcon>18</AgeIcon>
          <span>1h 30min</span>
          <HDIcon> <span>HD</span> </HDIcon>
        </Extras>

        <Genres>
          <span>Apimentados</span>
          <span>Besteirol</span>
          <span>Trolagem</span>
        </Genres>
      </Infos>
    </Component>
  )
}