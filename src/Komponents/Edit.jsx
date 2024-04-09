import { Omborchi } from "../Omborchi";
import EditForm from "./EditForm";
import { useSelector, useDispatch } from 'react-redux'


function Edit() {
  const edt=useSelector((state) => state.edt)
  const dispach=useDispatch();
  return (
    <div className={`lg:pl-[103px] bg-[#00000043] absolute min-h-full top-0 w-full  ${edt ? '' : 'hidden'}`} onClick={()=>dispach(Omborchi.actions.eh())}>


            <div className="max-w-[616px] roybg" onClick={e=>e.stopPropagation()}>
             <div className="px-6">

             <div className="flex gap-[23px] pt-6 md:hidden">
        <button className="rotate-[180deg]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#7C5DFA"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></button>
         <button className="go">Go back</button>
        </div>

                <div className="pt-[26px]">
                    <h2 className="newin">Edit #XM9141</h2>
                    <p className="text-[#7C5DFA] bill mt-[22px]">Bill From</p>
                </div>

                <div>
                    <EditForm/>
                </div>


        </div>



        </div>
    </div>
  )
}

export default Edit