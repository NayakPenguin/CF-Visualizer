import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const CountContests = ({ infoData }) => {
  // console.log(infoData);
  return (
    <div className="item">
      <div className="item-left">Number of Contests : </div>
      <div className="item-right">{infoData.length}</div>
    </div>
  )
}

export default CountContests