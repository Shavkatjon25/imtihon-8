import Royhat from "./Royhat"

import { ref, onValue } from "firebase/database";
import { db } from "../Firebase";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Ombor from "../Ombor";
import { Omborchi } from "../Omborchi";
import New from "./New";





function Sahifa1() {
const [dt, setDt]=useState([])

const dispach=useDispatch()
  useEffect(()=>{
    const starCountRef = ref(db, 'users' );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setDt(Object.values(data));
      console.log(Object.values(data));
    });
  }, [])


  return (
    <div className={`pt-8 max-w-[730px] mx-auto lg:pt-[78px]`}>
      <div className="flex px-6 gap-[18px] lg:w-[730px] lg:p-0">
          <div className="flex-1">
            <h2 className="invo md:text-[32px] lg:text-[36px] lg:mb-[6px]">Invoices</h2>
            <p className="soni flex gap-1"> <span className="hidden md:flex">There are</span>{dt.length}<span className="hidden md:flex">total</span> invoices</p>
          </div>


          <div className="flex items-center">
            <h2 className="filtr flex gap-1">Filter <span className="hidden md:block">by status</span></h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(11,135,243,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
          </div>


            <div className=" h-[44px] bg-[#7C5DFA] rounded-full flex gap-2 items-center" onClick={()=>dispach(Omborchi.actions.oy())}>
              <button className="w-8 h-8 text-[#7c5dfa] ml-[6px] bg-white rounded-full text-2xl font-extrabold">+</button>
              <h2 className="text-white mr-[13px] new">New <span className="hidden md:inline">Invoice</span></h2>
            </div>

      </div>

      <div className="px-6 mt-8 lg:p-0 flex flex-col gap-4">
       {dt.length!=0 ? dt.map(k=><Royhat m={k} />) : <div className="w-full flex flex-col justify-center items-center">
        <img src="./mavjudemas.png" alt="" width={193} className="md:w-[241px]" />
        <h2 className="is mt-[42px] mb-[23px] md:text-[24px]">There is nothing here</h2>
        <p className="create w-[173px]">Create an invoice by clicking the New button and get started</p>
      </div>}
      </div>

    </div>
  )
}

export default Sahifa1