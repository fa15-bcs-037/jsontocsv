import React,{useState,useEffect}  from 'react';
import Style from './style'
import {CSVLink } from "react-csv";
import axios from 'axios';

export default()=>
{
    const [dataa, setdata]= useState([]);
    useEffect(()=>{
        axios.get('https://json-team-crud.herokuapp.com/api/team').then(res=>{
            console.log("response", res.data);
            setdata(res.data);
            //console.log(dataa.toString());
        });
    },[]);
    const Row = ({firstName, lastName, phone, email, postBody}) => (
        <div className="row">
            <div>{firstName}</div>
            <div>{lastName}</div>
            <div>{phone}</div>
            <div>{email}</div>
            <div>{postBody}</div>
        </div>
    );

     const rows = dataa.map( (rowData) => <Row {...rowData} />);
    return (
        <>
        <div>
            <CSVLink data={dataa} Row={Row}>  <button className="EXPORT-btn" onClick={() => {}}> EXPORT DATA</button>
            </CSVLink>
        </div>


        <div className="table">
            <div style={{marginLeft:'-42px'}} className="header">
                <div className="" onClick={()=> {}}>FIRST-NAME</div>
                <div className="" onClick={()=> {}}>LAST-NAME</div>
                <div  onClick={()=> {}}>PHONE</div>
                <div  onClick={()=> {}}>EMAIL</div>
                <div  onClick={()=> {}}>POSTBODY</div>
            </div>
            <div className="body">{rows}</div>
        </div>
        <Style/>
        </>
    );

}





