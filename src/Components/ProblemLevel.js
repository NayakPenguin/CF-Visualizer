
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const ProblemLevel = ({ userData, infoData, userHandle }) => {
    const [chartData, setChartData] = useState();
    
    const options = {
        legend: {
            position: "right"
        }
    };

    const filterData = () => {
        const len = userData.length;
        let count = {};
        const uniqueQuestions = {};
        for (let i = 0; i<len; i++) {
            if(userData[i].verdict == "OK" && !uniqueQuestions[userData[i].problem.name + userData[i].problem.contestId + userData[i].problem.index]){
                uniqueQuestions[userData[i].problem.name + userData[i].problem.contestId + userData[i].problem.index] = 1;
                if(count[userData[i].problem.index] == undefined){
                    if(userData[i].problem.index !== undefined)
                        count[userData[i].problem.index] = 1;
                } else count[userData[i].problem.index]++;
            }
        }
        // console.log(Object.keys(count));
        // console.log(Object.values(count));
        let sorted = Object.entries(count).sort((a, b) => a[0].localeCompare(b[0]));
        let result = Object.fromEntries(sorted);
        // console.log(result);  
        let data = {};
        data.labels = Object.keys(result);
        data.datasets = [
            {
                data: Object.values(result),
                label: "Problem Levels",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)"
            }
        ];
        return data;
    };


    // console.log(filterData().datasets);




    return (
        <VisualiserConatiner>
            <div className="visualiser-conatiner">
                <div className="canvas-container">
                    <div className="top-label">
                        <div className="label-item selected">Solved Problem Level</div>
                    </div>
                    {
                        true ? (
                            <div className="canvas-graph">
                                <Bar data={filterData()} options={options} />
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

export default ProblemLevel

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