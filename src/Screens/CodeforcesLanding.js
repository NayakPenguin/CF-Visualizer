import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../Images/logo.png'
import SearchIcon from '@material-ui/icons/Search';

const CodeforcesLanding = () => {
  return (
    <Container>
      <img src={logo} alt="" className='head-logo'/>

      <Navbar>
        <div className="left">
          <div className="item">HOME</div>
          <div className="item">COMPARE</div>
          <div className="item">FRIENDS</div>
          <div className="item">CONTEST STATS</div>
          <div className="item">SOLVE</div>
        </div>
        <div className="right">
            <div className="search-bar">
              <SearchIcon/>
              <input type="text" />
            </div>
        </div>
      </Navbar>

      <Notice>
        This visualizer for Codeforces is inspired by existing ones and is being developed to be the best.
        <a href="https://github.com/Nayaker/CF-Visualizer" target={"_blank"}>Github →</a>
      </Notice>

      <MainContent>
        <div className="left">
          <div className="input-container">
            <div className="search-bar">
              <SearchIcon/>
              <input type="text" placeholder='Enter your Codeforces Handle'/>
            </div>
          </div>
          <div className="random-stats">
            <div className="top">→ Amazing Codeforces Stats</div>
            <div className="point">I am analyzing the statistics of the last 30 contests, including the average level of questions. I plan to also add a count of the levels, so that I can provide the frequency of each level. I will consider using Chart.js to display the data. Currently, I have removed all the content as it was looking a bit off-topic. I will also be adding question is solved by what ranks in each contest</div>
          </div>
        </div>
        <div className="right">
          <div className="right-container">
            <div className="top">→  Pay attention</div>
            <div className="bottom">
              <div className="feature">
                <div className="feature-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo deserunt, commodi ut voluptatibus hic dolores nesciunt magnam excepturi. Sit iste nam sint sapiente ipsam accusantium facilis ratione voluptates recusandae.</div>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="top">→ Visualizer Features</div>
            <div className="bottom">
              <div className="feature">
                <div className="feature-title" style={{"color" : "orange",}}>Solved Tags</div>
                <div className="feature-text">→ Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo deserunt, commodi ut voluptatibus hic dolores nesciunt magnam excepturi. Sit iste nam sint sapiente ipsam accusantium facilis ratione voluptates recusandae.</div>
              </div>
              <div className="feature">
                <div className="feature-title" style={{"color" : "orange",}}>Solved Tags</div>
                <div className="feature-text">→ Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo deserunt, commodi ut voluptatibus hic dolores nesciunt magnam excepturi. Sit iste nam sint sapiente ipsam accusantium facilis ratione voluptates recusandae.</div>
              </div>
              <div className="feature">
                <div className="feature-title" style={{"color" : "orange",}}>Solved Tags</div>
                <div className="feature-text">→ Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo deserunt, commodi ut voluptatibus hic dolores nesciunt magnam excepturi. Sit iste nam sint sapiente ipsam accusantium facilis ratione voluptates recusandae.</div>
              </div>
            </div>
          </div>
        </div>
      </MainContent>

    </Container>
  )
}

export default CodeforcesLanding


const Container = styled.div`
    padding: 20px 0;
    min-height: 100vw;
    max-width: 1200px;
    min-width: 900px;
    margin: auto;

    .head-logo{
      height: 70px;
    }
`

const Navbar = styled.div`
  width: 100%;
  border: 1px solid var(--primary-color);
  padding: var(--primary-padding);
  border-radius: var(--primary-radius);

  display: flex;
  align-items: center;
  justify-content: space-between;

  .left{
    display: flex;
    align-items: center;
    
    .item{
      margin: 5px 20px;
      padding: var(--primary-padding);
      margin: var(--primary-margin);
      font-size: 0.9rem;
      font-weight: 500;
    }
  }

  .right{
    .search-bar{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid var(--primary-color);
      border-radius: var(--primary-radius);
      padding: 2px;
      margin-right: 5px;

      svg{
        margin-bottom: -1.5px;
      }
      
      input{
        flex: 1;
        border: none;
        outline: none;
        margin-left: 2.5px;
        font-size: 0.8rem;
      }
    }
  }

`

const Notice = styled.div`
  width: 100%;
  padding: 7.5px;
  border: 1px solid black;
  margin: var(--container-margin); 
  border-radius: var(--primary-radius);
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 300;

  a{
    margin-left: 5px;
    color: #00c;
  }
`

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;

  .top{
    padding: 7.5px;
    border-bottom: 1px solid var(--primary-color);
    font-weight: 600;
    color: #3b5998;
  }

  .left{
    flex: 1;
    margin-right: 15px;
    .input-container{
      width: 100%;
      /* border: 1px solid var(--primary-color); */
      margin: var(--container-margin); 
      border-radius: var(--primary-radius);

      .search-bar{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid var(--primary-color);
        border-radius: var(--primary-radius);
        padding: 7.5px;
        margin-right: 5px;

        svg{
          margin-bottom: -1.5px;
        }
        
        input{
          flex: 1;
          border: none;
          outline: none;
          margin-left: 7.5px;
          font-size: 0.8rem;
        }
      }
    }

    .random-stats{
      width: 100%;
      border: 1px solid var(--primary-color);
      margin: var(--container-margin); 
      border-radius: var(--primary-radius);
      /* padding: var(--primary-padding);  */
      
      .point{
        margin: var(--primary-margin); 
        font-size: 0.85rem;
        font-weight: 300;
      }
    }
  } 

  .right{
    width: 320px;
    
    .right-container{
      width: 100%;
      border: 1px solid var(--primary-color);
      margin: var(--container-margin); 
      border-radius: var(--primary-radius);
  
      .bottom{
        padding: 7.5px;
        
        .feature{
          width: 100%;
          margin: 7.5px 0;
  
          .feature-title{
            font-size: 0.8rem;
            font-weight: 600;
            margin-right: 5px;
            display: inline;
          }
  
          .feature-text{
            font-size: 0.8rem;
            font-weight: 300;
            display: inline;
          }
        }
      }
    }
    
    
  }
`