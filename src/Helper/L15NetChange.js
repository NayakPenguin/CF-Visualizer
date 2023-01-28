import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const L15NetChange = ({ infoData }) => {
  var date = new Date();
  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');

  var currentDate = parseInt(year)*10000 + parseInt(month)*100 + parseInt(day);
  // console.log("Current Date : ", currentDate);

  var value = 0;
  infoData.forEach(function (result) {
      var date = new Date(result.ratingUpdateTimeSeconds * 1000);
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
      var contestDate = parseInt(year)*10000 + parseInt(month)*100 + parseInt(day);
      // console.log("Contest Date : ", contestDate);
      if (currentDate - contestDate <= 15) {
        value += result.newRating - result.oldRating;
      }
  });

  // console.log("Count : ", count);

  // console.log(infoData);
  return (
    <div className="stat-item">
      <div className="item-left">Net Rating Change :</div>
      <div className="item-right">{value}</div>
    </div>
  )
}

export default L15NetChange