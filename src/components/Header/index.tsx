import { Component, Items, Logo, Space } from "./styles"
import { FiBell, FiSearch, FiUser, FiChevronDown } from "react-icons/fi";

export function Header(){
  return(
    <>
      <Space />
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
            <img src="./images/profile.png" alt="" />
            <FiChevronDown />
          </Items>
        </div>
      </Component>
    </>
  )
}