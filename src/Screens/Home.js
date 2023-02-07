import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import CFStats from '../Components/CFStats';
import Footer from '../Components/Footer';
import AccountVisual from '../Components/AccountVisual';
import SendIcon from '@material-ui/icons/Send';
import NextButtons from "../Components/NextButtons";

const Home5 = () => {
    const [handle, setHandle] = useState("algo_maniac_");
    const [cFHandle, setCFHandle] = useState("");
    const [viewStats, setViewStats] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setCFHandle(event.target.value);
        }
    }

    return (
        <Container>
            <Navbar />
            <FeatureContainer>
                <div className="feature-heading">Get Your Codeforces Report Card</div>

                <input className="home5-input" type="text" placeholder='Enter codeforces your handle to analyse' value={handle} onChange={(e) => { setHandle(e.target.value) }} onKeyPress={handleKeyPress} />
                
                <div className="feature-main">
                    {
                        cFHandle.length ? <AccountVisual handle={cFHandle} /> : <></>
                    }
                    <CFStats />
                    <NextButtons />
                </div>
            </FeatureContainer>
            <Footer />
        </Container>
    )
}

export default Home5

const Container = styled.div`

`

const FeatureContainer = styled.div`
    margin: calc(15vh + 70px) 0;
    padding: 0 15vw;
    position: relative;
    display: flex;
    flex-direction: column;

    .feature-heading{
        font-weight: 600;
        font-size: 2rem;
    }

    .home5-input{
        width: 100%;
        min-width: 300px;
        height: 70px;
        padding: 20px;
        margin: 20px 0;
        border-radius: 10px;
        border: 1.75px solid black;
    }

    .input-container-main{
            position: relative;
            margin: 30px 0;
            filter: drop-shadow(0 25px 25px rgba(0,0,0,.15));

            .input{
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

            input[type="search"] {
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
                cursor: pointer;

                svg-icon{
                    font-size: 1.25rem;
                }

                @media only screen and (max-width: 1180px){
                    display: none;
                }
            }
        }

    .feature-main{
        /* background-image: radial-gradient(rgb(0, 0, 0) 12.5%, transparent 12.5%);
        background-position: -12px 0px;
        background-size: 30px 30px;
        margin: 15px 0;
        padding: 10%; */
        
    }

    .circle{
        height: 5px;
        width: 5px;
        border-radius: 50%;
        border: 0.1px dashed black;
        scale: 5;
    }

    .abs-left{
        height: 100px;
        width: 100px;
        position: absolute;
        left: 12.5vw;
        top: 12.5vh;
        z-index: -1;

        svg{
            scale: 5;
        }
    }

    .abs-right{
        height: 120px;
        width: 120px;
        position: absolute;
        
        z-index: -1;
    }

    .static{
        right: 200px;
        top: 30vh;
        svg{
            scale: 2.5;
        }
    }
    
    .movement{
        right: 300px;
        top: 12.5vh;

        svg{
            scale: 4.5;
            animation: moveUpDown 3.5s ease-in-out infinite;
        }
    
        @keyframes moveUpDown {
            0% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-2.5px);
            }
            100% {
                transform: translateY(0);
            }
        }
    }

    @media only screen and (max-width: 1180px){
        padding: 10px;
    }
`
