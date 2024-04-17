import { useEffect, useState } from "react"
import Data from "./Data"
import { useSelector, useDispatch } from 'react-redux'
import { Omborchi } from "../Omborchi";
import { Link } from "react-router-dom";
import {  db } from "../Firebase";
import { onValue, ref, remove, set } from "firebase/database";


function Sahifa2() {
    const [ml, setMl]=useState({})
    const [dlt, setDlt]=useState(false);
    const oyna=useSelector(k=>k.oyna)
    const malumot=useSelector(k=>k.oydt)
    const dispach=useDispatch()

    function Statistika(){
        set(ref(db, 'users/'+ml.id ), {...ml, k:'Paid'});
    }
    

    const aydi=useSelector(k=>k.id)
    const starCountRef = ref(db, 'users/'+aydi );
    let dt;
    useEffect(()=>{
        onValue(starCountRef, (snapshot) => {
            dt = snapshot.val();
            setMl(dt)
          })
    }, [])

    function Ochr(){
        const delet=ref(db, 'users/'+aydi)
        remove(delet)
    
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
            <button className={` peid mt-6 flex items-center rounded-md gap-1 px-[19px] h-10 md:m-0 ${ml.k=='Paid' ? 'text-[#33D69F] bg-[#33d6a01f]':ml.k=='Pending' ? 'text-[#FF8F00] bg-[#ff91001d]' : 'text-[#373B53] bg-[#373b5329]'}`}><span className={`w-2 h-2 ${ml.k=='Paid' ? 'bg-[#33D69F]':ml.k=='Pending' ? 'bg-[#FF8F00]' : 'bg-[#373B53]'} rounded-full block`}></span>{ml.k}</button>
            </div>
            <div className="hidden md:flex gap-2">
            <button className="fsft text-white px-6 pt-[18px] pb-[15px] bg-[#252945] rounded-full" onClick={edit}>Edit</button>
            <button className="fsft text-white px-6 pt-[18px] pb-[15px] bg-[#EC5757] rounded-full" onClick={()=>setDlt(true)}>Delete</button>
            <button className={`fsft text-white px-7 pt-[18px] pb-[15px] bg-[#7C5DFA] rounded-full ${ml.k=='Pending' ? '':'hidden'}`} onClick={Statistika}>Mark as Paid</button>
            </div>
        </div>


        <div>
         <Data/>
        </div>
        </div>

        <div className="h-[91px] mt-[56px] flex gap-2 items-center justify-center roybg md:hidden ">
            <button className="fsft text-white px-6 pt-[18px] pb-[15px] bg-[#252945] rounded-full" onClick={edit}>Edit</button>
            <button className="fsft text-white px-6 pt-[18px] pb-[15px] bg-[#EC5757] rounded-full" onClick={()=>setDlt(true)}>Delete</button>
            <button className={`fsft text-white px-7 pt-[18px] pb-[15px] bg-[#7C5DFA] rounded-full ${ml.k=='Pending' ? '':'hidden'}`}>Mark as Paid</button>
        </div>



    </div>

    <div className={`absolute w-full h-[100vh] bg-[#00000046] flex justify-center items-center top-0 ${dlt ? '':'hidden'}`} onClick={()=>setDlt(false)}>
        <div className="roybg rounded-2xl w-[327px] mx-auto p-8" onClick={e=>e.stopPropagation()}>
                <h2 className="confirm">Confirm Deletion</h2>
                <p className="are mt-2 mb-[22px]">Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
                <div className="flex justify-end gap-2">
                <button className="fsft text-white px-6 pt-[18px] pb-[15px] bg-[#252945] rounded-full" onClick={()=>setDlt(false)}>Cansel</button>
            <Link to={'/'} className="fsft text-white px-6 pt-[18px] pb-[15px] bg-[#EC5757] rounded-full" onClick={()=>Ochr()}> Delete</Link>
                </div>
        </div>
</div>

    </div>
  )
}

export default Sahifa2