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
        let highest = 0;
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
                    // console.log(result.problem.rating);
                    if(result.problem.rating > highest){
                        highest = result.problem.rating;
                    }
                }
            }
        });
        setMaxRating(highest);
    }, [userData])
    

    // console.log("Count : ", count);

    // console.log(userData);
    return (
        <Container>
            <div className="item-left">Highest Problem Rating : </div>
            {/* <div className="item-right">{infoData.length}</div> */}
            <div className="item-right">{maxRating}</div>
        </Container>
    )
}

export default L15HighestRating

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 10px;
  height: 45px; 
  width: 33%;
  border-radius: 5px;
  margin-top: 5px;

  border: 1px solid #d1d5db;
  background-color: rgba(255, 255, 255, 0.83);
  box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px 0px;

  font-size: 0.8rem;

  .item-left{
      font-weight: 500;
  }

  .item-right{
      font-family: verdana,arial,sans-serif;
      font-weight: 700;
  }

  @media only screen and (max-width: 1180px){
    width: 100%;
  }
`
