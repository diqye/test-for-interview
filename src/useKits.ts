import { useEffect, useState } from "react";

export function  useRequestData(){
    let [data,setData] = useState({
        status: "pending" as "pending" | "finish",
        list: [] as any[]
    })
    useEffect(()=>{
        fetch("https://kashiwasato.com/cms/get-posts/?"+Math.random())
        .then(r=>r.json())
        .then(data=>{
            setData({status:"finish",list:data})
        })
    },[])
    return data
}