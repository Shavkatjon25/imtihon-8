import { useState } from "react"
import Data from "./Data"
import { useSelector, useDispatch } from 'react-redux'
import { Omborchi } from "../Omborchi";
import { Link } from "react-router-dom";
import {  db } from "../Firebase";
import { ref, remove } from "firebase/database";


function Sahifa2() {
    const [dlt, setDlt]=useState(false);
    const oyna=useSelector(k=>k.oyna)
    const malumot=useSelector(k=>k.oydt)
    const dispach=useDispatch()


    function Ochr(){
        console.log('l');
    }

    function edit(){

    
        dispach(Omborchi.actions.ed(malumot.m))
    }

  return (
        <div className={`w-full`}>

    <div className="w-full min-h-[100vr] bgd pt-[33px] max-w-[730px] mx-auto">
        <div className=" w-full  px-6">

        <Link to={'/'} className="flex gap-[23px]">
        <button className="rotate-[180deg]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#7C5DFA"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></button>
         <button className="go">Go back</button>
        </Link>


        <div className="w-full h-[91px] roybg mt-[31px] rounded-md flex items-center justify-between  px-6">
            <div className="flex items-center justify-between md:justify-start md:gap-5 flex-1">
            <h3 className="status">Status</h3>
            <button className="text-[#33D69F] peid flex items-center gap-1 px-[19px] bg-[#33d6a008] h-10 md:m-0"><span className="w-2 h-2 bg-[#33D69F] rounded-full block"></span>Paid</button>
            </div>
            <div className="hidden md:flex gap-2">
            <button className="fsft text-white px-6 pt-[18px] pb-[15px] bg-[#252945] rounded-full" onClick={edit}>Edit</button>
            <button className="fsft text-white px-6 pt-[18px] pb-[15px] bg-[#EC5757] rounded-full" onClick={()=>setDlt(true)}>Delete</button>
            <button className="fsft text-white px-7 pt-[18px] pb-[15px] bg-[#7C5DFA] rounded-full">Mark as Paid</button>
            </div>
        </div>


        <div>
         <Data/>
        </div>
        </div>

        <div className="h-[91px] mt-[56px] flex gap-2 items-center justify-center roybg md:hidden ">
            <button className="fsft text-white px-6 pt-[18px] pb-[15px] bg-[#252945] rounded-full" onClick={edit}>Edit</button>
            <button className="fsft text-white px-6 pt-[18px] pb-[15px] bg-[#EC5757] rounded-full" onClick={()=>setDlt(true)}>Delete</button>
            <button className="fsft text-white px-7 pt-[18px] pb-[15px] bg-[#7C5DFA] rounded-full">Mark as Paid</button>
        </div>



    </div>

    <div className={`absolute w-full h-[100vh] bg-[#00000046] flex justify-center items-center top-0 ${dlt ? '':'hidden'}`} onClick={()=>setDlt(false)}>
        <div className="roybg rounded-2xl w-[327px] mx-auto p-8" onClick={e=>e.stopPropagation()}>
                <h2 className="confirm">Confirm Deletion</h2>
                <p className="are mt-2 mb-[22px]">Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
                <div className="flex justify-end gap-2">
                <button className="fsft text-white px-6 pt-[18px] pb-[15px] bg-[#252945] rounded-full" onClick={()=>setDlt(false)}>Cansel</button>
            <button className="fsft text-white px-6 pt-[18px] pb-[15px] bg-[#EC5757] rounded-full" onClick={()=>Ochr()}> Delete</button>
                </div>
        </div>
</div>

    </div>
  )
}

export default Sahifa2