import { useEffect, useState } from "react";
import "../global.css"
import "./MoneyGame.css"
import Selection from "../Components/MoneyGame/Selection";
import ItemList from "../Components/MoneyGame/ItemList";

import grocery_img from "../Assets/img/groceries.jpg";
import bill_img from "../Assets/img/bill.jpg";
import brown_img from "../Assets/img/brown.png";
import hair_img from "../Assets/img/hair.jpg";
import hawaii_img from "../Assets/img/hawaii.jpg";
import jet_img from "../Assets/img/jet.jpg";
import macbook_img from "../Assets/img/mbp.jpg";
import models_img from "../Assets/img/models.png";
import movie_img from "../Assets/img/movie.png";
import rent_img from "../Assets/img/rent.jpg";
import textbook_img from "../Assets/img/textbooks.jpg";
import twitter_img from "../Assets/img/twitter.png";
import videogame_img from "../Assets/img/videogame.jpg";
import insulin_img from "../Assets/img/insulin.jpg"

export default function MoneyGame() {
    const REMOVE_ONE_ITEM_ONLY = true;

    const [money_str, set_money_str] = useState("0");
    const [min_wage_seconds, set_min_wage_seconds] = useState(0);
    const [musk_seconds, set_musk_seconds] = useState(0);

    const items = [
        {
            "name" : "Grocery Trip",
            "cost" : 100,
            "essential" : true,
            "recreation" : false,
            "education" : false,
            "luxury": false,
            "img" : grocery_img
        },
        {
            "name" : "Month of Rent",
            "cost" : 1500,
            "essential" : true,
            "recreation" : false,
            "education" : false,
            "luxury": false,
            "img" : rent_img
        },
        {
            "name" : "Video Game",
            "cost" : 60,
            "essential" : false,
            "recreation" : true,
            "education" : false,
            "luxury": false,
            "img" : videogame_img
        },
        {
            "name" : "Movie Ticket",
            "cost" : 30,
            "essential" : false,
            "recreation" : true,
            "education" : false,
            "luxury": false,
            "img" : movie_img
        },
        {
            "name" : "Trip to Hawaii",
            "cost" : 5000,
            "essential" : false,
            "recreation" : true,
            "education" : false,
            "luxury": true,
            "img" : hawaii_img
        },
        {
            "name" : "Semester of Brown Tuition",
            "cost" : 40000,
            "essential" : true,
            "recreation" : false,
            "education" : true,
            "luxury": false,
            "img" : brown_img
        },
        {
            "name" : "Private Jet",
            "cost" : 150000000,
            "essential" : false,
            "recreation" : true,
            "education" : false,
            "luxury": true,
            "img" : jet_img
        },
        {
            "name" : "Tesla Model S",
            "cost" : 100000,
            "essential" : false,
            "recreation" : true,
            "education" : false,
            "luxury": true,
            "img" : models_img
        },
        {
            "name" : "Twitter",
            "cost" : 44000000000,
            "essential" : false,
            "recreation" : false,
            "education" : false,
            "luxury": true,
            "img" : twitter_img
        },
        {
            "name" : "Hair Transplant",
            "cost" : 10000,
            "essential" : false,
            "recreation" : false,
            "education" : false,
            "luxury": true,
            "img" : hair_img
        },
        {
            "name" : "1 Month of Insulin",
            "cost" : 200,
            "essential" : true,
            "recreation" : false,
            "education" : false,
            "luxury": false,
            "img" : insulin_img,
        },
        {
            "name" : "Books for a Semester",
            "cost" : 250,
            "essential" : true,
            "recreation" : false,
            "education" : true,
            "luxury": false,
            "img" : textbook_img
        },
        {
            "name" : "TV Bill",
            "cost" : 100,
            "essential" : true,
            "recreation" : true,
            "education" : false,
            "luxury": false,
            "img" : bill_img
        },
        {
            "name" : "New Macbook Pro",
            "cost" : 2000,
            "essential" : false,
            "recreation" : true,
            "education" : true,
            "luxury": true,
            "img" : macbook_img
        },
    ];

    const [cart, setCart] = useState([]);

    const MIN_HOURLY_WAGE = 7.25;
    const MIN_SECOND_WAGE = MIN_HOURLY_WAGE / (60 * 60);
    const MUSK_PANDEMIC_EARNINGS = 150000000000; // $150 billion (sources below)
    const DAYS_OF_PANDEMIC = 365 * 2; //Pandemic is 2 years long (2020 & 2021)
    const MUSK_HOURS_PER_DAY = 24; //Musk earns money when he sleeps, so it's more fair to say he 'works' 24h a day
    const MUSK_PANDEMIC_TOTAL_HOURS = MUSK_HOURS_PER_DAY * DAYS_OF_PANDEMIC;
    const MUSK_HOURLY_WAGE = MUSK_PANDEMIC_EARNINGS / MUSK_PANDEMIC_TOTAL_HOURS;
    const MUSK_SECOND_WAGE = MUSK_HOURLY_WAGE / (60 * 60);

    //Musk pandemic earnings are a conservative estimate
    /* Sources:
    https://www.forbes.com/sites/chasewithorn/2021/11/07/led-by-elon-musks-crazy-gains-american-billionaires-have-added-trillions-to-their-fortunes-during-the-pandemic/?sh=1418c9c71372
    https://fortune.com/2022/01/17/elon-musk-inequality-oxfam-davos-99-percent/
    https://inequality.org/great-divide/updates-billionaire-pandemic/
    https://www.newsweek.com/elon-musk-net-worth-billionaires-rose-pandemic-mark-zuckerberg-1623211
    */

    useEffect(() => {
        let sum = 0
        for (let i = 0; i < cart.length; i++) {
            sum += cart[i].cost;
        }
        set_money_str(sum.toLocaleString());
        set_min_wage_seconds(Math.round(sum / MIN_SECOND_WAGE));
        set_musk_seconds(Math.round(sum / MUSK_SECOND_WAGE));
    }, [cart, MIN_SECOND_WAGE, MUSK_SECOND_WAGE]);

    function seconds_to_time(seconds) {
        const years = Math.floor(seconds / (60 * 60 * 24 * 365));
        seconds = seconds % (60 * 60 * 24 * 365);
        const days = Math.floor(seconds / (60 * 60 * 24));
        seconds = seconds % (60 * 60 * 24);
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const seconds_left = seconds % 60;
        //console.log("input: " + seconds);
        if (years > 0){
            return `${years}y ${days}d ${hours}h ${minutes}m ${seconds_left}s`;
        }
        if (days > 0){
            return `${days}d ${hours}h ${minutes}m ${seconds_left}s`;
        }
        if (hours > 0) {
            return `${hours}h ${minutes}m ${seconds_left}s`;
        }
        if (minutes > 0) {
            return `${minutes}m ${seconds_left}s`;
        } else {
            if (seconds_left === 0) {
                return "0 seconds"
            } else if (seconds_left === 1) {
                return "1 second"
            } else {
            return `${seconds_left} seconds`;
            }
        }
    }

    return (
        <div className="MoneyGame">
            <div className="MoneyHeader flex-col centered-text white">
                <h1 id="spend-text">Spend Your Heart Out!</h1>
                <h2>Then, be devastated by the scale of wealth inequality</h2>
                <div className="vspace"></div>
                <h1>You've spent: ${money_str}</h1>
                <div className="vspace"></div>
                <h2>24/7 At minimum wage, earning this amount of money would take:</h2>
                <h2>{seconds_to_time(min_wage_seconds)}</h2>
                <div className="vspace"></div>
                <h2>During the pandemic, Elon Musk made this amount of money in:</h2>
                <h2>{seconds_to_time(musk_seconds)}</h2>
                <div className="vspace-pad"></div>
            </div>
            <div className="ShoppingArea">
                <div className="selection" style={{"flex": "2",}}>
                    <Selection items={items} add_to_cart={(to_add) => {setCart(cart.concat([to_add]))}}/>
                </div>
                <div className="vline"></div>
                <div className="items" style={{"flex": "1",}}>
                    <ItemList items_in_cart={cart}
                        clear_cart={() => {
                            setCart([])}
                        }
                        remove_from_cart={(name_to_remove) => {
                            //alert("removing " + name_to_remove);
                            let new_cart = [];
                            let item_removed = false;
                            for (let i = 0; i < cart.length; i++) {
                                if (cart[i].name !== name_to_remove || item_removed) {
                                    new_cart.push(cart[i]);
                                } else {
                                    if (REMOVE_ONE_ITEM_ONLY){
                                        item_removed = true;
                                    }
                                }
                            }
                            //alert("new cart: " + new_cart);
                            setCart(new_cart)
                        }}
                    />
                </div>
            </div>
        </div>
    );
}