import {useEffect} from "react";

function FetchMenu(props) {
    useEffect(() => {
        fetch('https://localhost:5001/Menu')
            .then(response => response.json())
            .then(data => props.onFetch(data));
    });
    
    return <div/>
}

export default FetchMenu;