import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function HeaderResponsive(){

    const [active, setActive] = useState(false);
    
    function openMenu(event){
        event.preventDefault();
        setActive(!active);
        console.log(active);
    }
    
    return (
        <div className="header">
            <div className="menu-hamburguer" onClick={openMenu}>
                <FontAwesomeIcon icon={faBars} color="#f4f4f4" size="lg" /> 
            </div> 

            <ul className={`menu-options${active ? ' active' : '' }`}>
                <li><a href="/"> Home </a></li>
                <li><a href="/"> Personagens </a></li>
                <li><a href="/"> Episodios </a></li>
                <li><a href="/"> Sobre </a></li>
            </ul>
        </div>
    );
}

// Ah... eu fiz a parte do tutorial de criar o header no React tudo de boa
// mas na hora de fazer os adds e commits eu tentei fazer sozinho ai por isso as mensagens dos commits nao estao como a do professor
// e uma coisa que eu percebi mas n sabia que acontecia é que: quando agente faz o add de uma pasta os arquivos dessa pasta tambem sao adicionados


export default HeaderResponsive;