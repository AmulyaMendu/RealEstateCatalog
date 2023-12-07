import React from "react";
import {Link,NavLink,Outlet, useParams} from 'react-router-dom';
import "./pages.css"
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';


const NewPage=()=>{
    const{people,token}=useParams()
    return (
        <div >
<h2 style={{marginTop:"40px",fontStyle:"normal",color:"lightblue"}}>ADD NEW PROPERTY</h2>

 <nav className='navigationbar'>
<ul >
    <li><NavLink to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}`}>basic Info</NavLink> </li>
    <li><NavLink  to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/propertydetails`}>Property Details</NavLink></li>
    <li><NavLink  to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/generalinfo`}>General Info</NavLink></li>
    <li><NavLink  to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/locationinfo`}>Location Info</NavLink></li>
    
</ul>
</nav>
<Outlet/>
   </div>
    )
}
export default NewPage;