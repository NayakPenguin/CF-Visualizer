import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const L15HighestRating = ({ userData }) => {
    const [maxRating, setMaxRating] = useState(0);

    var date = new Date();
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');

    var currentDate = parseInt(year)*10000 + parseInt(month)*100 + parseInt(day);
    // console.log("Date : ", currentDate);

    useEffect(() => {
        userData.forEach(function (result) {
            if (result.verdict === "OK") {
                var date = new Date(result.creationTimeSeconds * 1000);
                var year = date.getUTCFullYear();
                var month = date.getUTCMonth();
                if (month < 9) {
                    month = '0' + (month + 1);
                } else {
                    month = month + 1;
                }
                var day = date.getUTCDate();
                if (day < 10) {
                    day = '0' + day;
                }
                var submissionDate = parseInt(year)*10000 + parseInt(month)*100 + parseInt(day);
                if (currentDate - submissionDate <= 15) {
                    // console.log(result.problem.rating);
                    if(result.problem.rating > maxRating){
                        setMaxRating(result.problem.rating);
                    }
                }
            }
        });
    }, [userData])
    

    // console.log("Count : ", count);

    // console.log(userData);
    return (
        <div className="stat-item">
            <div className="item-left">Highest Problem Rating : </div>
            {/* <div className="item-right">{infoData.length}</div> */}
            <div className="item-right">{maxRating}</div>
        </div>
    )
}

export default L15HighestRating