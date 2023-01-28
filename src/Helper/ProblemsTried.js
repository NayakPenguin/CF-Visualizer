import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const ProblemsTried = ({ userData }) => {
    // console.log(userData);
    const len = userData.length;
    let count = {};
    for(let i = 0; i<len; i++){
        let myQuestion = userData[i].problem.name + userData[i].problem.index + userData[i].problem.contestId;
        if(count[myQuestion] == undefined){
            count[myQuestion] = 1;
            // console.log(myQuestion);
        }
    }
    // console.log(count);
    // console.log(Object.keys(count).length);
    return (
        <div className="item">
            <div className="item-left">Problems Tried : </div>
            <div className="item-right">{Object.keys(count).length}</div>
        </div>
    )
}

export default ProblemsTried