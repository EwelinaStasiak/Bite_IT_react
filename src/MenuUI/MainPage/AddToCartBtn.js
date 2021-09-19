import "./AddToCartBtn.css";
import cartImage from "../../../src/img/add-to-cart-icon-23.jpeg";



function AddToCartBtn({dispatch, ...props}) {

    function todaysDate()
    {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        return dateTime;
    }

    async function postAddMealToOrderLine(orderId, mealId){
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
    };

    async function postCreateOrder(){
        const result = await fetch('https://localhost:5001/Order',{
            method: 'post',
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "tableNumber": 1,
                "restaurantId": 1,
                "creationDate": todaysDate()
            })
        });
        const json = await result.json();
        return json.id;
      };

    function showConfirmAddToOrder()
    {
        alert("Dodałeś " + props.mealId +" do zamówienia");
        
    }
    
    function addToState(orderId,mealId)
    {
        dispatch({type:"addMealToOrder", orderId: orderId, mealId: mealId})
    }

    async function clickHandler(){
        const orderId = props.state.orderId || await postCreateOrder();
        //console.log("first" + orderId)
        addMealToOrder(orderId);
        
    }
    
    async function addMealToOrder(orderId)
    {      
        await postAddMealToOrderLine(orderId, props.mealId);
        addToState(orderId, props.mealId);
        //showConfirmAddToOrder();      
    }

    return(
        // <button onClick={clickHandler}>
            <img onClick={clickHandler} src={cartImage} alt="cart-btn" />
        // </button>
    )
}

export default AddToCartBtn;