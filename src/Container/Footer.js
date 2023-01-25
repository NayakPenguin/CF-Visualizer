import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <div className="main-text">
            Website designed and Developed by <a href="https://www.linkedin.com/in/atanu-nayak-profile/">Atanu Nayak</a>, made with ❤️
            <br /><a href="https://github.com/Nayaker/CF-Visualizer" target={"_blank"}>Visit Github Repository</a>
        </div>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    width: 100vw;
    padding: 20px 70px;
    /* border-bottom: 1px solid black; */

    display: flex;
    justify-content: center;
    align-items: center;

    .main-text{
        font-size: 0.8rem;
        text-align: center;
        line-height: 1.5rem;

        a{
            color: cornflowerblue;
            text-decoration: none;
            font-weight: 500;
        }
    }    
`