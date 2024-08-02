import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from "./Crud/Home"
import { Login } from "./Crud/Login"
export const Routing=()=>{
    return(
        <div>
           <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                </Routes>
           </BrowserRouter>
        </div>
    )
}