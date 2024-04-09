import { useMemo, useState } from "react";
import { useSelector} from 'react-redux'
import { Omborchi } from "../Omborchi";

function Data() {
    const [count, setCount]=useState();
    const n=useSelector(k=>k.oydt)
    const ml=n.m
  
  useMemo(()=>{
    let yeg=0
    n.m?.itm.map(x=>{
      yeg+=x.qty*x.prise
      
    })
    setCount(yeg)
  }, [])
  
    
  return (
    <div className="w-full roybg p-6 mt-4 rounded-md max-w-[730px] mx-auto">

    <div className="md:flex md:justify-between">
    <div>
        <h2 className="rt30"><span className="text-[#7E88C3]">#</span>RT3080</h2>
        <p className="graf">{ml.pd}</p>
        </div>

        <div className="my-[30px] md:m-0">
            <p className="graf1">{ml.adres} </p>
            <p className="graf1">{ml.city}</p>
            <p className="graf1">{ml.postcode}</p>
            <p className="graf1">{ml.country}</p>
        </div>
    </div>

        <div className="md:flex md:justify-between md:w-[540px]">

        <div className="flex gap-[61px]">
            <div >
                <p  className="graf">Invoice Date</p>
                <h4 className="gr24 mt-[13px] mb-[31px]">{ml.kun}</h4>
                <p className="graf">Payment Due</p>
                <h4 className="gr24 mt-[13px]">20 Sep 2021</h4>
            </div>
            <div>
                <p className="graf">Bill To</p>
                <h4 className="gr24 mt-[13px] mb-[7px]">{ml.name}</h4>
                <p className="graf1 ">{ml.cadres}</p>
                <p className="graf1">{ml.ccity}</p>
                <p className="graf1">{ml.cpostcode}</p>
                <p className="graf1">{ml.ccountry}</p>
            </div>
        </div>

        
        <div className="mt-8">
            <p className="graf mb-[13px]">Sent to</p>
            <h3 className="gr24">{ml.email}</h3>
        </div>

        </div>



        <div className="dt rounded-t-md px-6 pb-[23px] mt-[38px] pt-[25px]">
            <div className="flex justify-between">
                <div className="w-full md:flex md:flex-col md:gap-8">

                <div className="md:flex hidden md:items-center md:w-full md:justify-between">
                    <h3 className="gr24">Item name</h3>
                    <div className="hidden md:flex w-[250px] justify-between">
                    <p className="hidden md:block graf3">QTY</p>
                    <p className="hidden md:block graf3">Price</p>
                    <h4 className="gr24">Total</h4>
                    </div>
                    </div>

                    {ml.itm.map(k=>                    <div className="flex items-center w-full justify-between">
                    <div>
                    <h3 className="gr24">{k.itname}</h3>
                    <p className="graf3 mb-6 mt-2 md:m-0 md:hidden">1 x £ 156.00</p>
                    </div>
                    <div className="hidden md:flex w-[250px] justify-between">
                    <p className="hidden md:block graf3">{k.qty}</p>
                    <p className="hidden md:block graf3">£ {k.prise}</p>
                    <h4 className="gr24">£ {k.qty*k.prise}</h4>
                    </div>
                    <h4 className="gr24 md:hidden">£ 156.00</h4>
                    </div>)}
                </div>
            </div>

        </div>



        <div className="flex h-20 tt justify-between items-center rounded-b-md px-6">
            <h4 className="due">Amount Due</h4>
            <h2 className="duepl">£ {count}</h2>
        </div>

    </div>
  )
}

export default Data