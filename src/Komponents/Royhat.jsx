import { useMemo, useState } from "react";
import {useDispatch } from 'react-redux'
import { Omborchi } from "../Omborchi";
import { Link } from "react-router-dom";




function Royhat(n) {
  const [count, setCount]=useState();
  const dispach=useDispatch()
  

useMemo(()=>{
  let yeg=0
  n.m.itm.map(x=>{
    yeg+=x.qty*x.prise
    
  })
  setCount(yeg)
}, [])

  return (
    <Link to={'/data'}>
    <div key={Math.random()*1000} className=" w-full flex justify-between p-6 md:p-4 md:gap-10 md:items-center rounded-lg roybg" onClick={()=>{dispach(Omborchi.actions.dt(n)); dispach(Omborchi.actions.aydi(n.m.id))}}>
        <div className="md:flex  md:justify-between md:items-center">
            <h2 className="rt30"><span className="text-[#7E88C3]">#</span>RT3080</h2>
            <h3 className="mt-6 mb-[9px] sana md:m-0 md:ml-7 md:mr-[51px]">{n.m.kun}</h3>
            <h4 className="name hidden md:block mr-[82px]">{n.m.name}</h4>
            <p className="pul">{count}</p>
        </div>
        <div className="md:flex md:gap-5">
            <h4 className="name md:hidden">{n.m.clientsname}</h4>
            <button className={` peid mt-6 flex items-center rounded-md gap-1 px-[19px] h-10 md:m-0 ${n.m.k=='Paid' ? 'text-[#33D69F] bg-[#33d6a01f]':n.m.k=='Pending' ? 'text-[#FF8F00] bg-[#ff91001d]' : 'text-[#373B53] bg-[#373b5329]'}`}><span className={`w-2 h-2 ${n.m.k=='Paid' ? 'bg-[#33D69F]':n.m.k=='Pending' ? 'bg-[#FF8F00]' : 'bg-[#373B53]'} rounded-full block`}></span>{n.m.k}</button>
            <button className="hidden md:block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#7C5DFA"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></button>
        </div>
    </div>
    </Link>
  )
}

export default Royhat