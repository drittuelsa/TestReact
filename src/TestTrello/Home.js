import React ,{useState} from "react";
import {useSelector, useDispatch } from "react-redux";
import {useParams } from "react-router-dom";
import { Add } from "./action";
import { Delete } from "./action";

export function Home(){

    const [first, setName] = useState('');
    const Details = useSelector((state) =>{
        return state.Data
    })

    const {id} = useParams();

    const dispatch = useDispatch();

    const Data = {
        id :(Details.length)+ 1,
        first
    }
    // console.log(Data);
    const resetForm =()=>{
        setName('')
            }


    return(
        <div>
        <section className="body-top">
            <div className="container ">
                <div className="row">
                <div className="col-2 py-2"><p className="para1">FE-ASSIGNMENT</p></div>  
                <div className="col-2"><button  style={{cursor:"pointer"}} class="btn btn-white text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                               <b>Board</b>  </button></div>
                </div>      
            </div>
          

        
                <div className="container">
                    <div className="row">
                  
                <div className="col-2 box"><p>To Do</p>
                <form>  
                <input type ="text" className="form-control" value ={first} onChange = {(e) =>setName(e.target.value)}/> <br/>
                <input id="Add" className="btn btn-info" type="button" value="ADD"  onClick={(e)=>dispatch(Add(Data))}/>
                <input type ="reset" className="btn btn-secondary" value="RESET" onClick={()=> resetForm()}/>
                </form>
                </div>
              


                <div className="col-2 box">
                <table>
                  <tr><th>Done</th></tr>  
                {Details.map((item) =>(
                    <tr key={id}>
                    <td>{item.first}</td>
                    <td><input className="btn btn-warning" type ="button" value="Delete" onClick={(e)=>dispatch(Delete(item.id))} />                   
                    </td>                       
          </tr> 
             ))} 
                </table>
                </div>
                </div>
                </div>
           </section>
        </div>
    )
}