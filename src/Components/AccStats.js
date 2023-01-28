import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Line } from "react-chartjs-2";
import L15CountContests from "../Helper/L15CountContests";
import L15TotalSolved from "../Helper/L15TotalSolved";
import L15VirtualContests from "../Helper/L15VirtualContests";
import L15NetChange from "../Helper/L15NetChange";
import L15HighestRating from "../Helper/L15HighestRating";
import L15AvgRating from "../Helper/L15AvgRating";


const ProblemRating = ({ userData, infoData, userHandle }) => {
    const [chartData, setChartData] = useState();

    return (
        <VisualiserConatiner>
            <div className="visualiser-conatiner">
                <div className="canvas-container">
                    <div className="top-label">
                        <div className="label-item selected">Last 15 Days Statistics</div>
                    </div>
                    <div className="stats-container">
                        <L15CountContests infoData={infoData}/>
                        <L15VirtualContests userData={userData}/>
                        <L15NetChange infoData={infoData}/>
                        <L15TotalSolved userData={userData}/>
                        <L15HighestRating userData={userData}/>
                        <L15AvgRating userData={userData}/>
                    </div>
                </div>
            </div>
        </VisualiserConatiner>
    )
}

export default ProblemRating

const VisualiserConatiner = styled.div`
	margin: 10px 0 0 0;
    
    .visualiser-conatiner{
        display: flex;
		align-items: stretch;
        justify-content: space-between;
        
        .canvas-container{
            border: 1px solid #d1d5db;
            background-color: rgba(255, 255, 255, 0.83);
            box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px 0px;
            border-radius: 10px;
            padding: 10px;
            padding-top: 45px;
            width: 100%;
            position: relative;
    
            display: flex;
            align-items: center;
            justify-content: space-between;
    
            .stats-container{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 100%;
                    
                .stat-item{
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
                }
            }
        }

		.top-label{
			position: absolute;
			display: flex;
			top: 10px;
			left: 10px;
			
			.label-item{
				padding: 5px 10px;
				font-size: 0.7rem;
                background-color: #050a30;
                color: white;
				border-radius: 5px;
				margin-right: 7.5px;
				cursor: pointer;
			}
		}
    }

    
    
    p{
        font-size: 0.8rem;
        letter-spacing: 0.07rem;
    }
`;