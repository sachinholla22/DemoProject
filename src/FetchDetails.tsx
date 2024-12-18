import React from 'react';
import {useEffect,useState} from "react";
import axios from "axios"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  

function FetchDetails() {
    const [getDatas,setDatas]=useState([]);
    const [error,setError]=useState('');

    useEffect(()=>{
        async function fetchData(){
            try{
              let res=await axios.get("http://localhost:3600/test")
              setDatas(res.data.users);
              console.log(res.data.users)
            }catch(err){
                console.log("The error occured",err);
                setError("Cannot Fetch the Data!!");
            }
        }
        fetchData()
    },[])


  return (
    <div className=''>
        <section className='flex justify-center items-center box-border border-gray-300  border-2 w-auto h-auto p-24 m-24'>
        <ul className='flex flex-wrap justify-center'>
            {getDatas.map((datas,idx)=>(
      <Card key={idx} className=" lg:h-auto lg:w-[400px] sm:h-auto sm:w-[100px] m-3 grid overflow-hidden bg-gray-100">
        <CardHeader>
            <CardTitle>
                <h1 className="text-red-600 text-2xl flex justify-center font-bold">Users Details</h1>

              
                
                </CardTitle>
                <CardContent  className="flex flex-col justify-between h-full">
                    <div className='font-bold'>
                <h1 className=''> First Name : {datas.firstName}</h1>
                <h1>Last Name : {datas.lastName}</h1>
                <h1 className="truncate ">Maiden Name : { datas.maidenName ? datas.maidenName: "No Maiden Name mentioned "}</h1>
                </div>
                <p>Age :{datas.age}</p>
                    <p>Gender : {datas.gender}</p>
                    
                </CardContent>
                <CardDescription>
                    <h2 className='font-bold'>User Agent : {datas.userAgent}</h2>
                </CardDescription>
                <CardDescription>
                    
                    <h5  className='font-bold'>Mac Address : {datas.macAddress}</h5>
                </CardDescription>
                <CardContent><p>User Agent : {datas.crypto.coin}</p></CardContent>
        </CardHeader>
      </Card>


            ))
}
      </ul>
      </section>
    
    </div>
  )
}

export default FetchDetails
