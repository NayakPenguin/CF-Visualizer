import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import AccountVisual from '../Components/AccountVisual';

const CodeforcesMain = () => {
    // const [handle, setHandle] = useState("NayakPenguin");
    const [handle, setHandle] = useState("NayakPenguin");
    const [cFHandle, setCFHandle] = useState("NayakPenguin");
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setCFHandle(event.target.value);
        }
    }

    console.log(handle, cFHandle);

    return (
        <GrandContainer>
            {
                false && cFHandle.length == 0 ? (
                    <Container>
                        <div className='flex-1'>
                            <div className='site-name'>
                                Hello.
                            </div>
                            <div className="search-bar">
                                <div className="icon"><SearchIcon></SearchIcon></div>
                                <input type="text" placeholder='Enter codeforces handle' value={handle} onChange={(e) => { setHandle(e.target.value); setCFHandle("")}} onKeyPress={handleKeyPress}/>
                            </div>
                            <div className="btns">
                                <div className="btn" onClick={() => setCFHandle(handle)}>Visualize Handle</div>
                                <div className="btn">Codeforces Stats</div>
                            </div>

                            {/* <a href='/' className="link-adv">
                            Want to solve questions with visualization? Click here.
                        </a> */}
                            <a href='https://www.instagram.com/iamatanunayak/' target={"_blank"} className="link-adv">
                                Would any cute girl be interested in going on a date with me? Click here.
                            </a>
                        </div>
                        <Footer>
                            <a href="/" className="link-adv">Open Source Project | Atanu Nayak </a>
                        </Footer>
                    </Container>
                ):(
                    <Visualizer>
                        <div className="search-bar">
                            <div className="icon"><SearchIcon></SearchIcon></div>
                            <input type="text" placeholder='Enter codeforces handle' value={handle} onChange={(e) => { setHandle(e.target.value); setCFHandle("")}} onKeyPress={handleKeyPress}/>
                        </div>
                        <AccountVisual handle={cFHandle} />
                    </Visualizer>
                )
            }
        </GrandContainer>
    )
}

export default CodeforcesMain

const GrandContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #222;
`

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #222;

    display: grid;
    place-items: center;

    .flex-1{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .site-name{
        text-align: center;
        font-size: 60px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        color: white;
    }

    .search-bar{
        width: max(50vw, 700px);
        height: 55px;
        border-radius: 1000px;
        margin: 30px;
        background-color: white;
        overflow: hidden;

        display: flex;
        align-items: center;
        padding: 0 20px;

        .icon{
            svg{
                fill: black;
                font-size: 1.5rem;
                margin-bottom: -6px;
            }
            margin-right: 20px;
        }

        input{
            height: 100%;
            flex: 1;
            border: none;
            outline: none;
            font-size: 0.85rem;
            color: #333;
        }
    }   

    .btns{
        display: flex;
        align-items: center;
        justify-content: center;

        .btn{
            padding: 10px 20px;
            background-color: #333;
            font-size: 0.85rem;
            letter-spacing: 0.07rem;
            margin: 10px;
            font-weight: 300;
            cursor: pointer;
            color: white;
            border: 1px solid transparent;

            &:hover{
                border: 1px solid white;
                transition-duration: 250ms;
            }
        }
    }

    .link-adv{
        padding: 10px 20px;
        font-size: 0.8rem;
        margin: 20px;
        text-decoration: none;
        font-weight: 200;
        color: #c4aaab;
    }
`

const Visualizer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 15vw;

    .search-bar{
        width: max(50vw, 700px);
        height: 55px;
        border-radius: 1000px;
        margin: auto;
        background-color: white;
        overflow: hidden;

        display: flex;
        align-items: center;
        padding: 0 20px;

        .icon{
            svg{
                fill: black;
                font-size: 1.5rem;
                margin-bottom: -6px;
            }
            margin-right: 20px;
        }

        input{
            height: 100%;
            flex: 1;
            border: none;
            outline: none;
            font-size: 0.85rem;
            color: #333;
        }
    } 
`

const Footer = styled.div`
    position: fixed;
    width: 100vw;
    left: 0;
    bottom: 0;
    text-align: center;
    padding: 17.5px;
    background-color: #1d1c1c;
    
    .link-adv{
        font-size: 0.7rem;
        color: white;
        font-weight: 200;
    }
`

