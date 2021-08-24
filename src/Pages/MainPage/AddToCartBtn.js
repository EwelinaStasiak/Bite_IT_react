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
        }) 
        .then(response=>response.json())
        .then(data=>{console.log(data.id)});   
      };
    
    const randomNumber = Math.floor(Math.random()*500)+1;
    

    function showConfirmAddToOrder()
    {
        alert("Dodałeś " + props.mealId +" do zamówienia");
    }

    function createOrderInState()
    {
        postCreateOrder();//?????
        dispatch({type:"createOrderId", item : randomNumber})
    }

    function addToState(OrderId,mealId)
    {
        dispatch({type:"addMealToOrder", item: mealId})
    }

    function clickHandler(){
        if (props.state.orderId.length === 0)
        {
            createOrderInState(randomNumber);
        }       
            addMealToOrder();
    }
    
    function addMealToOrder()
    {      
        addToState(props.state.orderId, props.mealId);
        postData(randomNumber, props.mealId);
        showConfirmAddToOrder();      
    }

    return(
        <button onClick={clickHandler} className="add-to-cart-btn" >
            <img src={cartImage} alt="cart-btn" />
        </button>
    )
}

export default AddToCartBtn;