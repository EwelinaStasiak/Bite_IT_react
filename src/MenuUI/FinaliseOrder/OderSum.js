import './OrderSum.css';

function OderSum(props) {
    let sum = 0;
    
    function computeOrderSum() {
        return sum === 0 ? props.meals.map(meal => sum += meal.meal.price) : sum;

    }

    function computeTax(tax = 23) {
        if (sum === 0) computeOrderSum();
        return (sum * tax / (100 + tax)).toFixed(2);
    }
    
    function computeNetPrice(tax = 23) {
        if (sum === 0) computeOrderSum();
        return (sum * 100 / (100 + tax)).toFixed(2)
    }
    
    return(
        <div className="order-sum-container">
            <div className="order-sum">
                <div>
                    <p>Netto:</p>
                    <span>{computeNetPrice()} PLN</span>
                </div>
                <div>
                    <p>PTU A = 23,00%:</p>
                    <span>{computeTax()} PLN</span>
                </div>
                <div id="final-price">
                    <p>Suma:</p>
                    <span>{computeOrderSum()} PLN</span>
                </div>
            </div>
        </div>
    )
}

export default OderSum;