import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Container>
        <div className="company">
            <img className="company-logo" src="https://remoteok.com/assets/img/jobs/369fb090c5545ed67027c99378fc91671670570142.png" alt="company-logo" />
            <div className="company-name">Codeforces Visualizer</div>
        </div>
        <div className="user">
            <div className="username">Atanu Nayak</div>
            <div className="auth">Logout</div>
        </div>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 70px;
    padding: 0 70px;
    /* border-bottom: 1px solid black; */
    background-color: #f2fcfb;
    border-bottom: 1px solid #cccccc;
    z-index: 2;
    box-shadow: 1px 1px 10px 0 rgb(0 0 0 / 5%);
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .company{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .company-logo{
            height: 27.5px;
            margin: 0 5px;
            border-radius: 3px;
        }

        .company-name{
            font-size: 1.15rem;
            font-weight: 600;
            margin: 0 7.5px;
        }
    }

    .user{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        div{
            font-size: 0.9rem;
            font-weight: 500;
            margin: 0 7.5px;
        }
    }

    @media only screen and (max-width: 1180px){
        padding: 0 20px;
        
        .company{
            .company-name{
                font-size: 1rem;
            }
        }
        
        .user{
            .username{
                display: none;
            }
    
            .auth{
                font-size: 0.75rem;
            }
        }
    }
`