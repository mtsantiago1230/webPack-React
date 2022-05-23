import React from "react";
import { render } from "react-dom";
import "./style.css";

import { useEffect, useState } from "react";

import {
    HashRouter,
} from "react-router-dom";

import Routes from './routes'

function App()
{
    return (
       <HashRouter>
           <Routes/>
       </HashRouter>
    );  
}


render(<App/>,document.getElementById("app"));