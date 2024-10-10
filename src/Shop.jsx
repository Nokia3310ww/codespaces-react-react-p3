import './Shop.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
function Item(props){
    return (<div key={props.id} onClick={()=>props.callback(props)}>
        <img src={props.img} width={200} height={200}/><br/>
        id: {props.id} <br/>
        name: {props.name}<br/>
        price: {props.price}<br/>
    </div>);
}
export default function Shop(){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const URL = "https://super-acorn-qw9vrrjq6vxfvgp-5000.app.github.dev";
        axios.get(URL+'/api/products')
        .then(response=>{
            setProducts(response.data);
        })
        .catch(error=>{
            console.log("error");
        })
    }
        
    ,[])
    const [cart,setCart]=useState([]);
    function addCart(item){
        setCart([...cart,{id:item.id,name:item.name,price:item.price,img:item.img}]);
    }
    function removeItem(itemId) {
        setCart(cart.filter(item => item.id !== itemId));
    }
    
    function resetCart() {
        setCart([]);
    }
    const productList=products.map(item=><Item {...item} callback={addCart}/>);

    const cartList = cart.map(item => (
        <li key={item.id}>
            {item.id} {item.name} {item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
        </li>
    ));
        
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    return (<>
        <div className='grid-container'>{productList}</div>
        <h1>Cart</h1>
        <ol>{cartList}</ol>
        <h2>Total Price: {totalPrice}</h2>
        <button onClick={resetCart}>Reset Cart</button>
    </>);
}