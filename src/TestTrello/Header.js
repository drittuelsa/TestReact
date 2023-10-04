import React from "react";
import './style.css';

export function Header(){
    return(
        <div>
            <section className="Header-top">
                <div className="container">
                    <div className="row ">
                    <div className="col"> <h2 className="head1"><span className="image">
                        <img src="https://trello.com/assets/b2a61dcb04053829cdcc.png" style={{height:25, width:25 }}/></span>Trello</h2></div>
                       
                      <div className="col">  <button  style={{cursor:"pointer"}} class="btn btn-white text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                               <b>Features</b>  </button></div>
                       <div className="col "> <button  style={{cursor:"pointer"}} class="btn btn-white text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                               <b>Solutions</b>  </button></div>
                       <div className="col"><button  style={{cursor:"pointer"}} class="btn btn-white text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                               <b>Plans</b></button></div>                    
                       <div className="col"><button  style={{cursor:"pointer"}} class="btn btn-white text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                               <b>Pricing</b>  </button></div>
                       <div className="col"><button  style={{cursor:"pointer"}} class="btn btn-white text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                               <b>Resources</b>  </button></div>
                    <div className="col-2"></div>
                               <div className="col py-3 log"><p>Log in</p></div>
                               <div className="col last"><p>Get Trello for free</p></div>
                       </div>
                       </div>    
                    </section> 

                  
        </div>
    )
}