import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const BestRank = ({ infoData }) => {
    const [rank, setRank] = useState(50000);
    const [contestName, setContestName] = useState("---");

    const len = infoData.length;
    for(let i = 0; i<len; i++){
        if(infoData[i].rank < rank){
            setRank(infoData[i].rank);
        }
    }


    return (
        <div className="item">
            <div className="item-left">Best Rank : </div>
            <div className="item-right">{rank}</div>
        </div>
    )
}

export default BestRank