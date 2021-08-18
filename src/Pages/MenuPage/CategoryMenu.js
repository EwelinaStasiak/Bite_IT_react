import { ButtonGroup } from "react-bootstrap";
import React from 'react';
import "./CategoryMenu.css";

class CategoryMenu extends React.Component
{
    render() {
        return(
            <>
                <ButtonGroup id="categoryMenu">
                    <button id="categoryMenuBtn">Zupy</button>
                    <button id="categoryMenuBtn">Dania głowne</button>
                    <button id="categoryMenuBtn">Desery</button>
                    <button id="categoryMenuBtn">Napoje</button>
                </ButtonGroup>
            </>
        )
    }
}

export default CategoryMenu;