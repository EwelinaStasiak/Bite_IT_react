import "./AddToCartBtn.css";
import cartImage from "../../../src/img/add-to-cart-icon-23.jpeg";
// import cartImage from "../../../src/img/white-shopping-cart-icon-png-19.jpeg";


function AddToCartBtn({dispatch, ...props}) {

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

    async function getData () {
        try {
            //dispatch({ type: "startLoading" })
            const response = await fetch('https://localhost:5001/OrderLine/2');
            //throwErrorMessage(response);
            const data = await response.json();
            //const orderLinesApi = JSON.stringify(data);
            dispatch({ type: "addToOrder", item: data });          
        } catch (error) {           
        }
    }

    const clickHandler = () => {
        postData(2,props.mealId); 
        getData();
        console.log('props:' + JSON.stringify(props.orderLines[0].meal.name));  
    };

    return(
        <button onClick={clickHandler} className="add-to-cart-btn" >
            <img src={cartImage} alt="cart-btn" />
        </button>
    )
}

export default AddToCartBtn;