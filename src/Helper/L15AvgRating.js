import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const L15AvgRating = ({ userData }) => {
    const [avgRating, setAvgRating] = useState(0);

    var date = new Date();
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');

    var currentDate = parseInt(year)*10000 + parseInt(month)*100 + parseInt(day);
    // console.log("Date : ", currentDate);

    useEffect(() => {
        let sum = 0, len = 0;
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
                if (currentDate - submissionDate <= 15 && result.problem.rating != undefined) {
                    // console.log(result.problem.rating);
                    sum += result.problem.rating;
                    len++;
                }
            }
            let avg = sum / len;
            if(len == 0){
                setAvgRating(0);
            }
            else setAvgRating(avg);
        });

    }, [])
    

    // console.log("Count : ", count);

    // console.log(userData);
    return (
        <div className="stat-item">
            <div className="item-left">Average Problem Rating : </div>
            {/* <div className="item-right">{infoData.length}</div> */}
            <div className="item-right">{avgRating.toFixed(0)}</div>
        </div>
    )
}

export default L15AvgRating