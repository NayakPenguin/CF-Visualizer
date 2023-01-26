import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const CurrentRating = ({infoData}) => {
    // console.log(infoData);
  return (
    <div className="item">
        <div className="item-left">Current rating : </div>
        <div className="item-right">{infoData[infoData.length - 1].newRating}</div>
    </div>
  )
}

export default CurrentRating