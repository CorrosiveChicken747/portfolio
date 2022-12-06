import "../../global.css";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function alphabetical_sort(itemList){
    if (itemList.length === 0){
        return [];
    }
    let sorted = [...itemList];
    sorted.sort((a, b) => {
        if (a["name"] < b["name"]){
            return -1;
        } else if (a["name"] > b["name"]){
            return 1;
        } else {
            return 0;
        }
    });
    return sorted;
}

function reverse_alphabetical_sort(itemList){
    if (itemList.length === 0){
        return [];
    }
    let sorted = alphabetical_sort(itemList);
    sorted.reverse();
    return sorted;
}

function price_sort(itemList){
    if (itemList.length === 0){
        return [];
    }
    let sorted = [...itemList];
    sorted.sort((a, b) => {
        if (a["cost"] < b["cost"]){
            return -1;
        } else if (a["cost"] > b["cost"]){
            return 1;
        } else {
            return 0;
        }
    });
    return sorted;
}

function reverse_price_sort(itemList){
    if (itemList.length === 0){
        return [];
    }
    let sorted = price_sort(itemList);
    sorted.reverse();
    return sorted;
}

export default function Selection(props) {
    const items = props.items;  
    const add_to_cart = props.add_to_cart;
    const sorting_functions = [alphabetical_sort, reverse_alphabetical_sort, price_sort, reverse_price_sort];
    const [sort_by, set_sort_by] = useState(0);
    const [filtered_items, set_filtered_items] = useState([]);
    const [active_filters, set_active_filters] = useState([]);
    let true_tags = {};

    //set filtered items based on active_filters
    useEffect(() => {
        let new_filtered_items = [];
        if (active_filters.length === 0){
            new_filtered_items = sorting_functions[sort_by](items);
            set_filtered_items(new_filtered_items);
            return;
        }
        for (let i = 0; i < items.length; i++){
            let item = items[i];
            let add_item = true;
            //alert("Filtering item: " + item["name"]);
            for (let j = 0; j < active_filters.length; j++){
                let filter = active_filters[j];
                if (!item[filter]){
                    add_item = false;
                    break;
                }
            }
            if (add_item){
                new_filtered_items.push(item);
            }
        }
        new_filtered_items = sorting_functions[sort_by](new_filtered_items);
        set_filtered_items(new_filtered_items);
    }, [active_filters, sort_by]);

    //set true tags
    for (let i = 0; i < items.length; i++){
        let item = items[i];
        let item_name = item["name"];
        let this_tags = "";
        if (item["essential"]){
            this_tags += "Essential ";
        }
        if (item["recreation"]){
            this_tags += "Recreation ";
        }
        if (item["education"]){
            this_tags += "Education ";
        }
        if (item["luxury"]){
            this_tags += "Luxury ";
        }
        this_tags = this_tags.trim();
        this_tags = this_tags.replaceAll(" ", ", ");
        true_tags[item_name] = this_tags;
    }

    const handle_filters = (event, newFilters) => {
        set_active_filters(newFilters);
    };

    const handle_sort = (event, newSort) => {
        set_sort_by(newSort.props.value);
    };


    return (
        <div className="selection flex-col centered-text" style={{
            minWidth: "60vw",
        }}>
            <h1 style={{marginBottom: "5px"}}>Buy Stuff!</h1>
            <div className="filters" style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
            }}>
                <ToggleButtonGroup
                    value={active_filters}
                    onChange={handle_filters}
                    style = {{
                        height: "50px",
                    }}
                    >
                    <ToggleButton value="essential" color="secondary">
                        Essentials
                    </ToggleButton>
                    <ToggleButton value="recreation" color="secondary">
                        Recreation
                    </ToggleButton>
                    <ToggleButton value="education" color="secondary">
                        Education
                    </ToggleButton>
                    <ToggleButton value="luxury" color="secondary">
                        Luxury
                    </ToggleButton>
                </ToggleButtonGroup>

                <div style={{margin: "10px"}}>

                </div>

                <Select
                    value={sort_by}
                    label="Sort By"
                    onChange={handle_sort}
                    style = {{
                        height: "50px",
                    }}
                >
                    <MenuItem value={0}>Alphabetical</MenuItem>
                    <MenuItem value={1}>Reverse Alphabetical</MenuItem>
                    <MenuItem value={2}>Price Low to High</MenuItem>
                    <MenuItem value={3}>Price High to Low</MenuItem>
                </Select>
            </div>
            <div className="item-grid" style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
            }}>
                {filtered_items.map((item) => (
                    <ItemCard name={item["name"]} price={item["cost"]} tags={true_tags[item["name"]]} img={item["img"]} callback={() => {add_to_cart(item)}}/>
                ))}
                {filtered_items.length === 0 && <h2 style={{margin: "15px"}}>No items match your filters!</h2>}
            </div>
        </div>
    );
}