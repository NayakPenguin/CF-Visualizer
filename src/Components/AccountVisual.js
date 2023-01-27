import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LinearProgress from '@material-ui/core/LinearProgress';
import Axios from "axios";
import TagsDonutChart from "./Charts/TagsDonutChart";
import ProblemRating from "./ProblemRating";
import ProblemLevel from "./ProblemLevel";
import ConsistencyLineGraph from "./ConsistencyLineGraph";

const AccountVisual = ({ handle }) => {
  const [data, setData] = useState(null);
  const [infoData, setInfoData] = useState(null);

  const handleSearchForProfile = () => {
    const url = "https://codeforces.com/api/user.status?handle="+handle;
        Axios.get(url)
            .then(res=>{
                console.log(res.data.result)
                setData(res.data.result);

            })
            .catch(error=>{
                this.setState({
                    error:true
                })
                console.log(this.state.error)
            });
        Axios.get("https://codeforces.com/api/user.rating?handle="+handle)
            .then(res=>{
              console.log(res.data.result)
              setInfoData(res.data.result)
            })
  }

  useEffect(() => {
    handleSearchForProfile();
  }, [])
  
  

  return (
    <Container>
      <div className="feature-title">Visual overview of <b>{handle}</b></div>
      {/* <div className="feature-desc">
            </div> */}
      <div className="feature-result">
        <div className="chart-container">
            {
              data != null ? 
              <div>
                  <TagsDonutChart userData={data} infoData={infoData} userHandle={handle}/>
                  <ProblemRating userData={data} infoData={infoData} userHandle={handle}/>
                  <ProblemLevel userData={data} infoData={infoData} userHandle={handle}/>
                  <ConsistencyLineGraph userData={data} infoData={infoData} userHandle={handle}/>
              </div> : 
              <></>
            }
        </div>
      </div>
    </Container>
  );
};

export default AccountVisual;

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1.5px solid black;
  background-color: #ffffffd4;
  filter: drop-shadow(0 25px 25px rgba(0,0,0,.15));
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(3px);
  padding: 20px;
  margin: 10px 0;

  .feature-title {
    font-size: 1.05rem;
    font-weight: 500;

    b{
      font-weight: 500;
    }
  }

  .feature-desc {
    font-size: 0.9rem;
    font-weight: 300;
    margin: 10px 0;
  }

  .feature-result {
    .chart-container{
      width: 100%;
    }
  } 
`;