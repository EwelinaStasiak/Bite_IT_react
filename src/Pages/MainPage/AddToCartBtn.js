import "./AddToCartBtn.css";
import cartImage from "../../../src/img/add-to-cart-icon-23.jpeg";
// import cartImage from "../../../src/img/white-shopping-cart-icon-png-19.jpeg";


function AddToCartBtn({mealId, dispatch}) {

    async function postData(orderId, mealId){
      const result = await fetch('https://localhost:5001/OrderLine',{
          method: 'post',
          headers:{
              'Accept': 'application/json',
              'Content-type': 'application/json'
          },
          body: JSON.stringify({
                "orderId": orderId,
                "mealId": mealId
          })
      })  
      console.log(result)
    };

    const clickHandler = () => {
        console.log(mealId);
        postData(2,mealId);
        dispatch({type: "addToOrder", item: "nowyprodukt"});    
    };

    return(
        <button onClick={clickHandler} className="add-to-cart-btn" >
            <img src={cartImage} alt="cart-btn" />
        </button>
    )
}

export default AddToCartBtn;