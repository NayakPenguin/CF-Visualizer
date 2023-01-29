import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Line } from "react-chartjs-2";

const ProblemRating = ({ userData, infoData, userHandle }) => {
    const [chartData, setChartData] = useState(null);
    const [lastLabels, setLastLabels] = useState();

    const options = {
        legend: {
            position: "right"
        }
    };

    const filterData = () => {
        var count = {};
        var date = new Date();
        var year = date.getFullYear();
        var month = (1 + date.getMonth()).toString().padStart(2, '0');
        var day = date.getDate().toString().padStart(2, '0');
        var currentDate = (parseInt(year)  - 1) * 365 + (parseInt(month) - 1) * 30 + parseInt(day);
        userData.forEach(function (result) {
            if (result.verdict === "OK") {
            // if (true) {
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
                
                var submissionDate = (parseInt(year)  - 1) * 365 + (parseInt(month) - 1) * 30 + parseInt(day);
                // console.log(currentDate - submissionDate);

                const diff = currentDate - submissionDate;
                if(diff < 355){
                    if(count[diff]){
                        count[diff]++;
                    }
                    else count[diff] = 1;
                }
                // console.log(year + '' + month + '' + day);
            }
        });
        
        const keys = Object.keys(count);
        const values = Object.values(count);
        var totalQuestions = {};
        for (let i = 0; i < keys.length; i++){
            let pos = parseInt(keys[i] / 15);
            if(totalQuestions[pos]){
                totalQuestions[pos] += values[i];
            }
            else totalQuestions[pos] = values[i];
            
            // console.log(pos, totalQuestions[pos]);
        }

        const LastKeys = Object.keys(totalQuestions);
        const LastValues = Object.values(totalQuestions);
        let LastXDays = [];
        for (let i = 0; i < LastKeys.length; i++){
            // console.log((parseInt(LastKeys[i]) + 1) * 15, "Days ago : ", LastValues[i]);
            LastXDays.push((parseInt(LastKeys[i]) + 1) * 15 + " Days ago");
        }
        setLastLabels(LastXDays);

        let data = {};
        data.labels = LastXDays.reverse();
        data.datasets = [
            {
                data: LastValues.reverse(),
                label: "Problem Solved",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                tension: 0.5
            }
        ];
        // console.log(data);
        // return data;
        setChartData(data);
    };

    
    useEffect(() => {
        filterData();
    }, [userData]);

    return (
        <VisualiserConatiner>
            <div className="visualiser-conatiner">
                <div className="canvas-container">
                    <div className="top-label">
                        <div className="label-item selected">Problems Solved last year per 15 days</div>
                    </div>
                    {
                        true ? (
                            <div className="canvas-graph">
                                {/* <Line data={chartData} options={options} /> */}
                                {
                                    chartData != null ? <Line data={chartData} options={options} /> : <></>
                                }
                            </div>
                        ) : (
                            <></>
                        )
                    }

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
            padding: 50px 150px;
            width: 100%;
            position: relative;
    
            display: flex;
            align-items: center;
            justify-content: space-between;
    
            .canvas-graph{
                width: 100%;
                display: inline;
                /* border: 1px solid black; */
            }
    
            .graph-labels{
                display: flex;
                flex-direction: column;
				height: 220px;
				overflow-y: scroll;
				padding: 0 20px;

				::-webkit-scrollbar {
					width: 2px;
				}
				
				::-webkit-scrollbar-track {
					background-color: #f0e9e9;
					border-left: 1px solid #e9e5e5;
				}
				
				::-webkit-scrollbar-thumb {
					background-color: #335ddc;
					border-radius: 100px;
				}


    
                .label{
                    display: flex;
                    align-items: center;
					flex-wrap: wrap;
					margin: 1px 0;
    
                    .color{
                        height: 15px;
                        width: 15px;
                        /* border-radius: 2px; */
                        background-color: cornflowerblue;
                        margin-right: 10px;
                        border: 0.5px solid #444;
                    } 
    
                    .label-key{
                        font-size: 0.7rem;
                        font-weight: 500;
                        margin-right: 5px;
                    }
    
                    .label-value{
                        font-size: 0.8rem;
                        letter-spacing: 0.07rem;
                        font-weight: 300;
                        font-family: verdana,arial,sans-serif;
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

    @media only screen and (max-width: 1180px){
        .visualiser-conatiner{
            .canvas-container{
                padding: 50px 5px 5px 5px;
            }
        }
    }
`;