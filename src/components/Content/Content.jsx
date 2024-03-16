import React from "react";
import Attractions from "./Attractions";
import Hotels from "./Hotels";
import Restaurants from "./Restaurants";
import './content.css';

const Content = ({ selected }) => {
    return (
        <div className="content">
            {
                selected === '1' ? <Attractions /> :
                    selected === '2' ? <Hotels /> : <Restaurants />
            }
        </div>
    );
}

export default Content;