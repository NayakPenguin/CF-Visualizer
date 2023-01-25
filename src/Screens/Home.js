import React from 'react'
import styled from 'styled-components'
import Navbar from '../Container/Navbar'
import SendIcon from '@material-ui/icons/Send';
import CFStats from '../Container/CFStats';
import Footer from '../Container/Footer';

const Home = () => {
  return (
    <Container>
        <Navbar/>  
        <FeatureContainer>
            <div className="feature-heading">Visualize your Codeforces Account</div>
            <div className="feature-main">
                <div className="input-box">
                    <input type="text" placeholder='Enter codeforces your handle to analyse' />
                    <div className="search-btn">
                        <SendIcon/>
                    </div>
                </div>
                <CFStats/>
            </div>
            <div className="circle abs-left"></div>
            <div className="circle abs-right"></div>
        </FeatureContainer>   
        <Footer/>
    </Container>
  )
}

export default Home

const Container = styled.div`

`

const FeatureContainer = styled.div`
    margin: 15vh 0;
    padding: 0 15vw;
    position: relative;

    .feature-heading{
        font-weight: 600;
        font-size: 2rem;
    }

    .feature-main{
        /* background-image: radial-gradient(rgb(0, 0, 0) 12.5%, transparent 12.5%);
        background-position: -12px 0px;
        background-size: 30px 30px;
        margin: 15px 0;
        padding: 10%; */
        .input-box{
            position: relative;
            margin: 30px 0;

            input{
                min-height: 60px;
                width: 100%;
                border-radius: 10px;
                border: 1.5px solid black;
                background-color: #ffffffd4;
                box-shadow: 1px 1px 10px 0 rgb(0 0 0 / 5%);
                -webkit-backdrop-filter: blur(8px);
                backdrop-filter: blur(3px);
                padding: 0 20px;
            }

            .search-btn{
                position: absolute;
                top: 5px;
                right: -25px;
                height: 50px;
                width: 50px;
                display: grid;
                place-items: center;
                border-radius: 50%;
                border: 1.5px solid black;
                background-color: #fff;

                svg-icon{
                    font-size: 1.25rem;
                }
            }
        }
    }

    .circle{
        height: 5px;
        width: 5px;
        border-radius: 50%;
        border: 0.1px dashed black;
        scale: 5;
    }

    .abs-left{
        height: 30px;
        width: 30px;
        position: absolute;
        left: 12.5vw;
        top: 12.5vh;
        z-index: -1;
    }

    .abs-right{
        height: 60px;
        width: 60px;
        position: absolute;
        right: 12.5vw;
        top: 12.5vh;
        z-index: -1;
    }
`
