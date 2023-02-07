import React, { useState, useEffect } from 'react'

import {
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components'
import Home from './Screens/Home';

const App = () => {
  return (
    <ShowScreen>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </ShowScreen>
  )
}

export default App

const ShowScreen = styled.div`

`