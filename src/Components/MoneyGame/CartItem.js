import "../../global.css"
import * as React from 'react';
import Button from '@mui/material/Button';

export default function CartItem(props) {
    let item_name = props.name;
    let item_price = props.price;
    let item_quantity = props.quantity;
    return (
        <div className="cart-item" style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: "1px solid black",
            margin: "10px",
            background : "#f5f5f5",
            borderRadius: "25px",
            minWidth: "20vw",
            minHeight: "5vh",
            flexGrow: "1",
        }}>
            <div className="leftside" style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <h3 style={{margin: "5px", marginLeft: "12px", marginBottom: "0"}}> {item_name} (x{item_quantity})</h3>
                <h3 style={{margin: "5px", marginLeft: "15px"}}>${(item_price * item_quantity).toLocaleString()}</h3>
            </div>
            <div className="middlespace" style={{
                flexGrow: "1",
            }}></div>
            <div className="rightside" style={{
                display: "flex",
                flexDirection: "row-reversed",
                alignItems: "center",
                justifyContent: "center",
                justifySelf: "flex-end",
            }}>
                
                <Button variant="contained" color="error" size="small" onClick={props.remove_self} style={{marginRight: "15px"}}>Remove</Button>
            </div>
        </div>
    );
}