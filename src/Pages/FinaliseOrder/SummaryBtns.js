import "./SummaryBtns.css";

function SummaryBtns() {
    return (
        <div className="pay-btn-container">
            <button className="back-btn">Edytuj koszyk</button>
            <button 
                className="pay-u-btn"
                type="submit" 
                formTarget="_blank"
            >
                Złóż zamówienie
            </button>
        </div>
    )
}

export default SummaryBtns;