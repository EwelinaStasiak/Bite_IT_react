import "./PayBtn.css";

function PayBtn() {
    return (
        <div className="pay-btn-container">
            <button 
                type="submit" 
                formTarget="_blank">
                {/*<img */}
                {/*    src='http://static.payu.com/pl/standard/partners/buttons/payu_account_button_long_03.png'*/}
                {/*    alt="PayU-btn"*/}
                {/*/>*/}
            </button>
        </div>
    )
}

export default PayBtn;