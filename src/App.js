import React, { useState, useEffect } from 'react'

import {
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components'
import Home from './Screens/Home';
import CodeforcesMain from './ScreensNew/mainpage';


const App = () => {
  return (
    <ShowScreen>
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<CodeforcesMain/>} />
      </Routes>
    </ShowScreen>
  )
}

export default App

const ShowScreen = styled.div`

`