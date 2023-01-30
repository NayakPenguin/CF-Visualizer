import React, { useState, useEffect } from 'react'

import {
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components'
import Home from './Screens/Home'
import Home2 from './Screens/Home2'
import Home3 from './Screens/Home3';
import Home4 from './Screens/Home4';
import Home5 from './Screens/Home5';

const App = () => {
  return (
    <ShowScreen>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mark2" element={<Home2/>} />
        <Route path="/mark3" element={<Home3/>} />
        <Route path="/mark4" element={<Home4/>} />
        <Route path="/mark5" element={<Home5/>} />
      </Routes>
    </ShowScreen>
  )
}

export default App

const ShowScreen = styled.div`

`