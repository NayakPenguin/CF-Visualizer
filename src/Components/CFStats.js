import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LinearProgress from '@material-ui/core/LinearProgress';

const CFStats = () => {
    const [problemSet, setProblemSet] = useState();

    const [contestList, setContestList] = useState();
    const [LastTwentyDivTwoIds, setLastTwentyDivTwoIds] = useState([]);

    const [divTwoA, setDivTwoA] = useState([]);
    const [divTwoB, setDivTwoB] = useState([]);
    const [divTwoC, setDivTwoC] = useState([]);

    const [avgOfLevelA, setAvgOfLevelA] = useState();
    const [avgOfLevelB, setAvgOfLevelB] = useState();
    const [avgOfLevelC, setAvgOfLevelC] = useState();
    const [countByLevelDiv2, setcountByLevelDiv2] = useState([]);

    useEffect(() => {
        fetch(`https://codeforces.com/api/problemset.problems`)
            .then((response) => response.json())
            .then((resp) => {
                // console.log("Problem Set : ", resp);
                setProblemSet(resp);
            });
    }, []);

    useEffect(() => {
        fetch(`https://codeforces.com/api/contest.list?gym=false`)
            .then((response) => response.json())
            .then((resp) => {
                // console.log("Contest List : ", resp);
                setContestList(resp);
            });
    }, []);

    //  ------------------------ Finding Div 2 : Details ------------------------
    const handleDiv2Ids = (e) => {
        // console.log("Listening at handleDiv2Ids function ...");

        if (contestList == undefined) {
            // console.log("Waiting for contest list to get filled...");
        } else {
            // console.log("Contest List recieved successfully!");

            let len = contestList.result.length;

            let count = 0;
            let temp = [];

            for (let i = 0; i < 1000; i++) {
                //--> search for lastest 1000 only
                if (
                    contestList.result[i].phase == "FINISHED" &&
                    contestList.result[i].name.includes("Div. 2") &&
                    contestList.result[i].name.includes("Div. 1") == false
                ) {
                    temp.push(contestList.result[i].id);
                    count++;

                    if (count >= 30) {
                        // console.log("We have recieved lastest 30 Div 2 contest IDs");
                        break;
                    }
                }
            }

            setLastTwentyDivTwoIds(temp);
        }
    };

    const searchDiv2A = (e) => {
        // console.log("Listening at searchDiv2A function ...");

        if (problemSet == undefined || contestList == undefined) {
            // console.log("Waiting for problem set and contestList to get filled, Listening from searchDiv2A function...");
        } else {
            // console.log(
            //     "Problem set and contestList recieved successfully, Listening from searchDiv2A function!"
            // );

            let len = problemSet.result.problems.length;
            let lenOfContestIds = LastTwentyDivTwoIds.length;

            // console.log("LastTwentyDivTwoIds : ", LastTwentyDivTwoIds);

            let tempLevelA = [],
                tempLevelB = [],
                tempLevelC = [];

            let avgLevelA = 0,
                avgLevelB = 0,
                avgLevelC = 0;

            for (let j = 0; j < lenOfContestIds; j++) {
                for (let i = 0; i < 1000; i++) {
                    //--> search for lastest 1000 only
                    if (
                        problemSet.result.problems[i].contestId == LastTwentyDivTwoIds[j]
                    ) {
                        if (
                            problemSet.result.problems[i].index == "A" &&
                            problemSet.result.problems[i].rating
                        ) {
                            tempLevelA.push(problemSet.result.problems[i].rating);
                            avgLevelA += problemSet.result.problems[i].rating;
                        } else if (
                            problemSet.result.problems[i].index == "B" &&
                            problemSet.result.problems[i].rating
                        ) {
                            tempLevelB.push(problemSet.result.problems[i].rating);
                            avgLevelB += problemSet.result.problems[i].rating;
                        } else if (
                            problemSet.result.problems[i].index == "C" &&
                            problemSet.result.problems[i].rating
                        ) {
                            tempLevelC.push(problemSet.result.problems[i].rating);
                            avgLevelC += problemSet.result.problems[i].rating;
                        }
                    }
                }
            }

            avgLevelA /= tempLevelA.length;
            avgLevelB /= tempLevelB.length;
            avgLevelC /= tempLevelC.length;

            // ---- occurance ----
            const countByLevelArray = [];

            const countByLevelA = {},
                countByLevelB = {},
                countByLevelC = {};

            for (const element of tempLevelA) {
                if (countByLevelA[element]) {
                    countByLevelA[element] += 1;
                } else {
                    countByLevelA[element] = 1;
                }
            }

            countByLevelArray.push(countByLevelA);

            for (const element of tempLevelB) {
                if (countByLevelB[element]) {
                    countByLevelB[element] += 1;
                } else {
                    countByLevelB[element] = 1;
                }
            }

            countByLevelArray.push(countByLevelB);

            for (const element of tempLevelC) {
                if (countByLevelC[element]) {
                    countByLevelC[element] += 1;
                } else {
                    countByLevelC[element] = 1;
                }
            }

            countByLevelArray.push(countByLevelC);

            // console.log("countByLevelArray[0] : ", countByLevelArray[0]);
            // console.log("countByLevelArray[1] : ", countByLevelArray[1]);
            // console.log("countByLevelArray[2] : ", countByLevelArray[2]);

            // --- fill use states

            setDivTwoA([...new Set(tempLevelA)]);
            setDivTwoB([...new Set(tempLevelB)]);
            setDivTwoC([...new Set(tempLevelC)]);

            setAvgOfLevelA(parseInt(avgLevelA));
            setAvgOfLevelB(parseInt(avgLevelB));
            setAvgOfLevelC(parseInt(avgLevelC));

            setcountByLevelDiv2(countByLevelArray);

            // console.log("All Levels Are set : ", tempLevelA, tempLevelB, tempLevelC);
        }
    };

    useEffect(() => {
        searchDiv2A();
    }, [contestList, problemSet]);

    useEffect(() => {
        handleDiv2Ids();
    }, [contestList]);

    return (
        <Container>
            <div className="feature-title">Codeforces Statistics</div>
            <div className="feature-desc">
                I am analyzing the statistics of the last 30 contests, including the average level of questions. I plan to also add a count of the levels, so that I can provide the frequency of each level. I will consider using Chart.js to display the data. Currently, I have removed all the content as it was looking a bit off-topic. I will also be adding question is solved by what ranks in each contest
            </div>
            <div className="feature-result">
                {countByLevelDiv2.length != 0 ? (
                    <div className="all-levels">
                        <div className="one-level">
                            <div className="level-title">Level - A</div>
                            {divTwoA.map((item, index) => (
                                <div className="level-difficulty-tag" key={index}>
                                    <b>{item}</b>
                                    <div className="dynamic">{countByLevelDiv2[0][item]}</div>
                                </div>
                            ))}
                            <div className="avg-difficulty-tag">Average : {avgOfLevelA}</div>
                        </div>
                        <div className="one-level">
                            <div className="level-title">Level - B</div>
                            {divTwoB.map((item, index) => (
                                <div className="level-difficulty-tag" key={index}>
                                    <b>{item}</b>
                                    <div className="dynamic">{countByLevelDiv2[1][item]}</div>
                                </div>
                            ))}
                            <div className="avg-difficulty-tag">Average : {avgOfLevelB}</div>
                        </div>
                        <div className="one-level">
                            <div className="level-title">Level - C</div>
                            {divTwoC.map((item, index) => (
                                <div className="level-difficulty-tag" key={index}>
                                    <b>{item}</b>
                                    <div className="dynamic">{countByLevelDiv2[2][item]}</div>
                                </div>
                            ))}
                            <div className="avg-difficulty-tag">Average : {avgOfLevelC}</div>
                        </div>
                    </div>
                ) : (
                    <div className="loader">
                        <LinearProgress />
                    </div>
                )}
            </div>
        </Container>
    );
};

export default CFStats;

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1.5px solid black;
  background-color: #ffffffd4;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(3px);
  padding: 20px;
  filter: drop-shadow(0 25px 25px rgba(0,0,0,.15));

  .feature-title {
    font-size: 1.05rem;
    font-weight: 500;
  }

  .feature-desc {
    font-size: 0.85rem;
    font-weight: 300;
    margin: 10px 0;
  }

  .feature-result {
    display: none;
    margin-top: 30px;
    .all-levels {
      .one-level {
        display: flex;
        flex-wrap: wrap;
        margin-top: 5px;
        align-items: center;

        .level-title {
          font-size: 0.8rem;
          padding: 7.5px 15px;
          border: 1px solid #050a30;
          margin: 0 10px 10px 0;
          font-weight: 600;
          width: 100px;
          text-align: center;
          background-color: #050a30;
          color: white;
          border-radius: 5px;
        }

        .level-difficulty-tag {
          margin: 0 10px 10px 0;
          padding: 7.5px 10px;
          border: 1px solid #050a30;
          font-weight: 200;
          font-size: 0.8rem;
          width: 60px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border-radius: 5px;
          border: 1px solid #d1d5db;
            background-color: rgba(255, 255, 255, 0.83);
            box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px 0px;

          b {
            font-weight: 500;
            margin-right: 5px;
            width: 30px;
          }

          .dynamic {
            position: absolute;
            margin: 0 5px;
            background-color: #050a30;
            width: 22.5px;
            height: 22.5px;
            display: grid;
            place-items: center;
            border-radius: 2px;
            font-size: 0.65rem;
            color: white;
            top: -5px;
            right: -15px;
            z-index: 10;
            border-radius: 50%;
            font-weight: 500;
            border: 2.5px solid white;
            font-family: verdana, arial, sans-serif;
          }
        }

        .avg-difficulty-tag {
          margin-bottom: 10px;
          padding: 5px 10px;
          font-weight: 400;
          font-size: 0.85rem;
          font-weight: 600;
          width: 140px;
          text-align: center;
          border-radius: 4px;
          border: 1px solid #050a30;
          /* border: 1px solid #d1d5db; */
            background-color: rgba(255, 255, 255, 0.83);
            box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px 0px;
        }
      }
    }
  }
`;
