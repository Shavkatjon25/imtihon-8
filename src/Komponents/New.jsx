import { Omborchi } from "../Omborchi";
import Forma from "./Forma"
import { useSelector, useDispatch } from 'react-redux'


function New() {
  const ochyop=useSelector((state) => state.oyna)
  const dispach=useDispatch();

  
  return (
    <div className={`lg:pl-[103px] bg-[#00000043] absolute top-0 w-full  ${ochyop ? '' : 'hidden'}`} onClick={()=>dispach(Omborchi.actions.oy())}>


            <div className="max-w-[616px] roybg" onClick={e=>e.stopPropagation()}>
             <div className="px-6">

             <div className="flex gap-[23px] pt-6 md:hidden" onClick={()=>k.m(false)}>
        <button className="rotate-[180deg]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#7C5DFA"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></button>
         <button className="go">Go back</button>
        </div>

                <div className="pt-[26px]">
                    <h2 className="newin">New Invoice</h2>
                    <p className="text-[#7C5DFA] bill mt-[22px]">Bill From</p>
                </div>

                <div>
                    <Forma/>
                </div>


        </div>



        </div>
    </div>
  )
}

export default New