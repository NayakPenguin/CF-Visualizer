import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import DoughnutChart from './ChartCanvas/DoughnutChart';
import CurrentRating from "../../Helper/CurrentRating";
import CountContests from "../../Helper/CountContests";
import BestRank from "../../Helper/BestRank";
import ProblemsTried from "../../Helper/ProblemsTried";
import ProblemsSolved from "../../Helper/ProblemsSolved";

const TagsDonutChart = ({ userData, infoData, userHandle }) => {
    const [sortedSolvedTopicTagsKeys, setSortedSolvedTopicTagsKeys] = useState([]);
    const [sortedSolvedTopicTagsValues, setSortedSolvedTopicTagsValues] = useState([]);

    const colors = [
		'#FF877C', '#FF77A9', '#DF79EF', '#DF79EF', '#B085F5', '#8E99F3', '#7FD6FF', '#74E7FF', '#6FF9FF', '#63D8CB', '#98EE99', '#CFFF95', '#FFFF89'
	];

    const borderColors = [
		'#fff'
	];

    const options = {
		plugins: {
			legend: {
				display: false,
			},
		},
	};

    useEffect(() => {
        const elementCounts = {};
        const uniqueQuestions = {};

        const len = userData.length;
        for (var i = 0; i < len; i++) {
            if ((userData[i].verdict === "OK") && !uniqueQuestions[userData[i].problem.name + userData[i].problem.contestId + userData[i].problem.index]) {
                uniqueQuestions[userData[i].problem.name + userData[i].problem.contestId + userData[i].problem.index] = 1;
                for (var j = 0; j < userData[i].problem.tags.length; j++) {
                    if (elementCounts[userData[i].problem.tags[j]]) {
                        ++elementCounts[userData[i].problem.tags[j]];
                    }
                    else elementCounts[userData[i].problem.tags[j]] = 1;
                }
            }
        }

        const sortedElementCounts = {};
        Object.keys(elementCounts).sort((a, b) => elementCounts[b] - elementCounts[a]).forEach(function (key) {
            sortedElementCounts[key] = elementCounts[key];
        });

        setSortedSolvedTopicTagsKeys(Object.keys(sortedElementCounts));
        setSortedSolvedTopicTagsValues(Object.values(sortedElementCounts));
        // console.log(Object.keys(sortedElementCounts));
        // console.log(Object.values(sortedElementCounts));
    }, [userData])

    var chartDataSolved = {
		title: { text: 'Chart Title', display: true },
		labels: sortedSolvedTopicTagsKeys.map((items) => { return (items) }),
		datasets: [{
			label: "Number of questions by Tag",
			data: sortedSolvedTopicTagsValues.map((items) => { return (items) }),
			backgroundColor: colors,
			borderColor: borderColors,
			borderWidth: 0.5,
		}],
	};

    

    return (
        <VisualiserConatiner>
            <div className="visualiser-conatiner">
                <div className="canvas-container">
                    <div className="top-label">
                        <div className="label-item selected">Solved Tags</div>
                    </div>
                    {
                        true ? (
                            <>
                                <div className="canvas-graph">
                                    <DoughnutChart chartData={chartDataSolved} options={options}></DoughnutChart>
                                </div>
                                <div className="graph-labels">
                                    {
                                        sortedSolvedTopicTagsKeys.map((item, index) => {
                                            return (
                                                <div className="label" key={index}>
                                                    <div className="color" style={{ "backgroundColor": `${colors[index]}` }}></div>
                                                    <div className="label-key">{sortedSolvedTopicTagsKeys[index]} : </div>
                                                    <div className="label-value">{sortedSolvedTopicTagsValues[index]}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        ) : (
                            <></>
                        )
                    }

                </div>
                <div className="basic-info">
                    <div className="top-label">
                        <div className="label-item selected">Handle Information</div>
                    </div>
                    <div className="items">
                        <CurrentRating infoData={infoData}/>
                        <CountContests infoData={infoData}/>
                        <BestRank infoData={infoData}/>
                        <ProblemsTried userData={userData}/>
                        <ProblemsSolved userData={userData}/>
                    </div>
                </div>
            </div>
        </VisualiserConatiner>
    )
}

export default TagsDonutChart

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
            padding: 50px 10px 10px 50px;
            width: 65%;
            position: relative;
    
            display: flex;
            align-items: center;
            justify-content: space-between;
    
            .canvas-graph{
                width: 45%;
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

        .basic-info{
			flex-grow: 1;
            padding: 50px 10px 10px 10px;
            margin-left: 7.5px;
            border: 1px solid #d1d5db;
            background-color: rgba(255, 255, 255, 0.83);
            box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px 0px;
            border-radius: 10px;
			position: relative;
			
            .items{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                height: 100%;
                
                .item{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    
                    padding: 0 10px;
                    height: 45px; 
                    width: 100%;
                    border-radius: 5px;
    
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