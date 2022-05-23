import { Component, Items, Logo } from "./styles"
import { FiBell, FiSearch, FiUser, FiChevronDown } from "react-icons/fi";

export function Header(){
  return(
    <Component>
      <div>
        <Logo src="./images/Logo.png" />
        <Items>
          <span><b>Início</b></span>
          <span>Séries</span>
          <span>Filmes</span>
          <span>Bombando</span>
          <span>Minha lista</span>
        </Items>
      </div>
      <div>
        <Items>
          <FiSearch /> 
          <span>Infantil</span> 
          <FiBell /> 
          <FiUser /> 
          <FiChevronDown />
        </Items>
      </div>
    </Component>
  )
}