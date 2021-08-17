import "./AddToCartBtn.css";
import cartImage from "../../../src/img/add-to-cart-icon-23.jpeg";
// import cartImage from "../../../src/img/white-shopping-cart-icon-png-19.jpeg";

function AddToCartBtn() {
    return(
        <button className="add-to-cart-btn">
            <img src={cartImage} alt="cart-btn" />
        </button>
    )
}

export default AddToCartBtn;