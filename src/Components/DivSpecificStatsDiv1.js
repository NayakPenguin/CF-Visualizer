import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const DivSpecificStatsDiv1 = ({ userData, infoData, userHandle }) => {
    const [contestData, setContestData] = useState([]);
    const [count, setCount] = useState(0);
    const [bestRank, setBestRank] = useState(0);
    const [netRatingChange, setNetRatingChange] = useState(0);
    const [averageRank, setAverageRank] = useState(0);
    const [maxSolvedinContest, setMaxSolvedinContest] = useState(0);
    const [highestProblemRating, setHighestProblemRating] = useState(0)

    const min = (a, b) => {
        return (a < b ? a : b);
    }

    const max = (a, b) => {
        return (a > b ? a : b);
    }

    useEffect(() => {
        const url = "https://codeforces.com/api/user.rating?handle=" + userHandle;
        axios.get(url)
            .then(res => {
                // console.log(res.data.result);
                setContestData(res.data.result.reverse());

            })
            .catch(error => {
                this.setState({
                    error: true
                })
                // console.log(this.state.error)
            });
    }, [contestData, 5000]);
    
    
    let contestIds = new Set();

    const findAcceptedProblems = () => {
        const len = userData.length;
        let problemContestId = [];
        let cnt = 0, consecutive = 0, max_consecutive = 0, highestRating = 0;

        for (let i = 0; i<len; i++) {
            if(contestIds.size > 0 && userData[i].author.participantType == 'CONTESTANT' && userData[i].verdict == "OK"){
                if(contestIds.has(userData[i].contestId) == true){
                    if(!consecutive) consecutive = 1;
                    // console.log(userData[i]);
                    problemContestId.push(userData[i].contestId);
                    
                    if(cnt){
                        if(problemContestId[cnt - 1] == userData[i].contestId){
                            consecutive++;
                        }
                        else {consecutive = 1;}
                    }


                    max_consecutive = max(max_consecutive, consecutive);
                    highestRating = max(highestRating, userData[i].problem.rating);

                    cnt++;
                }
            }
        }

        // console.log(highestRating);
        setMaxSolvedinContest(max_consecutive);
        setHighestProblemRating(highestRating);
    }
    
    useEffect(() => {
        let countDivSpecContests = 0, len = contestData.length, DivSpecBestRank = 50000, netChange = 0, rankSum = 0;
        for (let i = 0; i < len; i++) {
            if ((contestData[i].contestName).indexOf("Div. 1") != -1) {
                // console.log(contestData[i]);
                contestIds.add(contestData[i].contestId);

                if (contestData[i].rank < DivSpecBestRank) {
                    DivSpecBestRank = contestData[i].rank;
                }

                netChange += (contestData[i].newRating - contestData[i].oldRating);

                countDivSpecContests++; 

                if (countDivSpecContests <= 5) {
                    rankSum += contestData[i].rank;
                }
            }
        }
        setCount(countDivSpecContests);
        setBestRank(DivSpecBestRank);
        setNetRatingChange(netChange);
        setAverageRank(rankSum / min(countDivSpecContests, 5));
        findAcceptedProblems();
        // console.log(contestIds);
    }, [contestData, 5000])

    return (
        <div>
            {
                count != 0 ? (
                    <VisualiserConatiner>
                        <div className="visualiser-conatiner">
                            <div className="canvas-container">
                                <div className="top-label">
                                    <div className="label-item selected">Contest Div 1 Statistics</div>
                                </div>
                                <div className="stats-container">
                                    <StatContainer>
                                        <div className="item-left">Number of Contests : </div>
                                        <div className="item-right">{count}</div>
                                    </StatContainer>
                                    <StatContainer>
                                        <div className="item-left">Max Solved in Contest : </div>
                                        <div className="item-right">{maxSolvedinContest}</div>
                                    </StatContainer>
                                    <StatContainer>
                                        <div className="item-left">Highest Rating Solved : </div>
                                        <div className="item-right">{highestProblemRating}</div>
                                    </StatContainer>
                                    <StatContainer>
                                        <div className="item-left">Net Rating Change : </div>
                                        <div className="item-right">{netRatingChange > 0 ? "+" : ""} {netRatingChange}</div>
                                    </StatContainer>
                                    <StatContainer>
                                        <div className="item-left">Best Rank : </div>
                                        <div className="item-right">{bestRank}</div>
                                    </StatContainer>
                                    <StatContainer>
                                        <div className="item-left">Average Rank in Latest 5 : </div>
                                        <div className="item-right">{averageRank.toFixed(0)}</div>
                                    </StatContainer>
                                </div>
                            </div>
                        </div>
                    </VisualiserConatiner>
                ) : (<></>)
            }
        </div>
    )
}

export default DivSpecificStatsDiv1

const VisualiserConatiner = styled.div`
	margin: 10px 0 0 0;
    
    .visualiser-conatiner{
        display: flex;
		align-items: stretch;
        justify-content: space-between;
        
        .canvas-container{
            border: 1px solid #d1d5db;
            background-color: rgba(255, 255, 255);
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

    @media only screen and (max-width: 1180px){
        .stats-container{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            /* flex-wrap: wrap; */
            width: 100%;
        }
    }
`;

const StatContainer = styled.div`
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