import "./PayCheckBox.css";

function PayCheckbox(props) {
    function checkHandler(){
        props.onCheck()
    }
    
    return(
        <div className="checkbox-container">
            <label>
                <input
                    type="checkbox"
                    checked={props.checked}
                    onChange={checkHandler}
                />
                Płacę teraz
            </label>
        </div>
    )
}

export default PayCheckbox;