const MenuTableHeader = (props) => {
    const clickHandler = () => {
        props.changeStatus();
    }
    
    return (
        <thead>
            <tr onClick={clickHandler}>
                <th>{props.headerName.toUpperCase()}</th>
            </tr>
        </thead>
    )
}

export default MenuTableHeader;