import { useState } from "react"


function Hedr(a) {
  return (
    <div className="w-full bg-[#1E2139] h-18 flex justify-between items-center md:h-20 lg:h-[100vh] lg:flex-col lg:w-[103px] lg:rounded-r-[28px] lg:fixed">
        <img src="./logo.svg" alt="" className="h-full lg:w-full lg:h-[103px]"/>
        <div className="h-full flex justify-center lg:flex-col  items-center">
          <div className="hidden lg:flex lg:flex-1"></div>
          <div>
            <img src="./oy.svg" alt="" onClick={()=>a.m('dark')} className={`mx-6 lg:mb-8 cursor-pointer ${ a.n=='dark' ? 'hidden':'block' }`}/>
            <div className={`w-[19px] h-[19px] bg-[#858BB2] rounded-full mx-6 lg:mb-8 cursor-pointer ${ a.n=="mode" ? 'hidden':'block' }`} onClick={()=>a.m('mode')}></div>
          </div>
          <div className="border-l border-[#494E6E] lg:border-t-[1px] lg:border-l-0 lg:w-[103px]">
            <img src="./user.png" alt="" className="px-6 py-5 lg:mx-auto lg:my-6"/>
          </div>
        </div>
    </div>
  )
}

export default Hedr