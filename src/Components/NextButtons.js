import React from 'react'
import styled from 'styled-components'

const NextButtons = () => {
  return (
    <Container>
        <div className="next-btn" onClick={() => alert("Men at work!")}>Compare User Handle</div>
        <div className="next-btn" onClick={() => alert("Men at work!")}>Solve Problem Sheets</div>
        <div className="next-btn" onClick={() => alert("Men at work!")}>Compare Friends</div>
    </Container>
  )
}

export default NextButtons

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .next-btn{
        cursor: pointer;
        height: 45px;
        width: calc(33.33% - 6px);
        margin-top: 10px;
        border-radius: 10px;
        border: 1.5px solid black;
        background-color: #ffffffd4;
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(3px);
        filter: drop-shadow(0 25px 25px rgba(0,0,0,.15));

        display: grid;
        place-items: center;

        font-size: 0.85rem;
        font-weight: 500;
    }
`