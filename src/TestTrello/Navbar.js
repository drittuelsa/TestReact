import React from "react";
import { Header } from "./Header";
import { Home } from "./Home";

import { Outlet } from "react-router-dom";


export const NavBar = () => {

    return(
        <div >
            
        <Header/>
           <Home/>
      
      <Outlet/>

         
        </div>
    )
    }