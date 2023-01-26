import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const ProblemsSolved = ({ userData }) => {
    const len = userData.length;
    let count = {};
    for(let i = 0; i<len; i++){
        let myQuestion = userData[i].problem.name + userData[i].problem.index + userData[i].problem.contestId;
        if(userData[i].verdict == "OK" && count[myQuestion] == undefined){
            count[myQuestion] = 1;
        }
    }
    // console.log(count);
    // console.log(Object.keys(count).length);
    return (
        <div className="item">
            <div className="item-left">Problems Solved : </div>
            <div className="item-right">{Object.keys(count).length}</div>
        </div>
    )
}

export default ProblemsSolved