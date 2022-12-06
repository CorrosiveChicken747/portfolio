import "../../global.css"
import placeholder_img from "../../Assets/img/placeholder.jpg";
import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { display } from "@mui/system";

export default function ItemCard(props) {
    let img = props.img;
    if (img == null) {
        img = placeholder_img;
    }
    return (
        <div className="item-card" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
            margin: "12px",
            background : "lightblue",
            borderRadius: "25px",
            minWidth: "12vw",
        }}>
            <img src={img} alt="" style={{
                width: "15vh",
                height: "15vh",
                objectFit: "cover",
                margin: "15px",
                borderRadius: "25px",
            }}></img>

            <div className="info" style={{
                Width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                justifySelf: "space-around",
                alignSelf: "space-around",
            }}>
                <h4 style={{margin: "0px", color: "grey", maxWidth: "10vw"}}>{props.tags}</h4>
                <div style={{minHeight: "5vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <h3 style={{margin: "0", maxWidth: "10vw"}}>{props.name}</h3>
                </div>
                <h4 style={{margin: "5px", marginBottom: "10px"}}>${props.price.toLocaleString()}</h4>
                <Button variant="contained" color="primary" size="large" onClick={props.callback}>Buy It!</Button>
                <div className="vspace"></div>
            </div>
        </div>
    );
}