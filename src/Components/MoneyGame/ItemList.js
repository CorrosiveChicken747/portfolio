import "../../global.css";
import CartItem from "./CartItem"
import * as React from 'react';
import Button from '@mui/material/Button';;

export default function ItemList(props) {
    let items_in_cart = props.items_in_cart;
    let unique_items_in_cart = [...new Set(items_in_cart)];
    

    function count_quantity(name){
        let count = 0;
        for (let i = 0; i < items_in_cart.length; i++){
            if (items_in_cart[i]["name"] === name){
                count++;
            }
        }
        return count;
    }

    return (
        <div className="item-list" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: "1",
        }}>
            <h1 className="centered-text" style={{marginBottom: "5px"}}>Your Cart: </h1>
            <Button color="warning" variant="outlined" onClick={() => {
                props.clear_cart();
            }}>Clear Cart</Button>
            <div style={{margin: "10px 20px 10px 20px"}}>
                {unique_items_in_cart.map((item) => (
                    <CartItem name={item["name"]} price={item["cost"]} quantity={count_quantity(item["name"])} remove_self={() => {props.remove_from_cart(item["name"])}} />
                ))}
            </div>
        </div>
    );
}