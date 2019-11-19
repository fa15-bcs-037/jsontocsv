import React,{useState,useEffect}  from 'react';
import Style from './style'
import {CSVLink } from "react-csv";
import axios from 'axios';
import {TablePagination} from 'react-pagination-table';
import arraySort from 'array-sort';
export default()=>
{


    const [dataa, setdata]= useState([]);
    const [nameSortType, setNameSortType] = useState("");
    useEffect(()=>{
        axios.get('https://json-team-crud.herokuapp.com/api/team').then(res=>{
            setdata(res.data);
        });
    },[]);
    const sortBy  = (x) => {
        x.toString();
        if(!nameSortType || nameSortType==="DESC"){
            setdata(arraySort(dataa, x));
            setNameSortType("ASC");
            // this.classList.toggle("fas fa-caret-up");
        }
        else
        {
            setdata(arraySort(dataa, x,{reverse: true}  ));
            setNameSortType("DESC")
            // this.classList.toggle("fas fa-caret-down");
        }
    };
    return (
        <>
        <div>
            <CSVLink data={dataa}>  <button className="EXPORT-btn" onClick={() => {}}> EXPORT DATA</button></CSVLink>
        </div>
        <div className="">
            <div className="header">
                <div onClick={()=>sortBy('firstName')}>{nameSortType&&nameSortType==="ASC"?"firstName":"firstName"}</div>
                <div onClick={() => sortBy('lastName')}>{nameSortType&&nameSortType==="ASC"?"lastName":"lastName"}</div>
                <div style={{paddingLeft:'5%'}} onClick={() => sortBy('email')}>{nameSortType&&nameSortType==="ASC"?"Email":"Email"}</div>
                <div onClick={() => sortBy('phone')}>{nameSortType&&nameSortType==="ASC"?"Phone":"Phone"}</div>
                <div onClick={() => sortBy('postBody')}>{nameSortType&&nameSortType==="ASC"?"postBody":"postBody"}</div>
            </div>
            <TablePagination
                data={dataa}
                columns="firstName.lastName.email.phone.postBody"
                perPageItemCount={ 10 }
                totalCount={300}
                // arrayOption={ [["size", '10', ' ']] }
            />

        </div>


        <Style/>
        </>
    );

}







