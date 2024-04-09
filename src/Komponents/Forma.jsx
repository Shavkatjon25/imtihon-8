import { ref, set } from "firebase/database";
import { db } from '../Firebase';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Omborchi } from '../Omborchi';

function writeUserData(adres, city, postcode, country, name, email, cadres, ccity, ccountry, cpostcode, kun, muddat, pd, itm, k, soat) {

  set(ref(db, 'users/'+soat ), {
    adres, city, postcode, country, name, email, cadres, ccity, ccountry, cpostcode, kun, muddat, pd, itm, k,
    id:soat
    
  });
}



export default function App() {
    const [arr, setArr]=useState([1])
    const [vl, setVl]=useState(true)
    const dispach=useDispatch();
   
    const { 
    adres,
    city,
    postcode,
    country,

    name,
    email,
    cadres,
    ccity,
    cpostcode,
    ccountry,
    kun,
    muddat,
    pd, itm} = useSelector((state) => state)
    

    console.log('n');

    function Hendl(e, k){
             

        if (adres&&city&&postcode&&country&&name&&email&&cadres&&ccity&&ccountry&&cpostcode&&kun&&muddat&&pd) {
            const date=new Date();
            const soat=date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()+'__'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
            writeUserData(adres, city, postcode, country, name, email, cadres, ccity, ccountry, cpostcode, kun, muddat, pd, itm, k, soat)
            dispach(Omborchi.actions.oy()) 
            dispach(Omborchi.actions.bo())
        }

        e.preventDefault()
    }


  



  function Ochr(a){
    console.log(arr, a);
    const mass=arr.filter(k=> k!=a ? k:'');
    setArr(mass)
    dispach(Omborchi.actions.del(a))
  }
  
  function Qosh(){
    console.log('l');
    setArr([...arr, arr.length+1])
    let mas={itname:'', qty:'', prise:''}
    dispach(Omborchi.actions.in(mas));
  }

  
  return (
    <form>
        <div className='mt-6'>
             <p className='formp mb-[9px]'>Street Address</p>
            <input type="text" placeholder="Adres" value={adres} onChange={e=>dispach(Omborchi.actions.as(e.target.value))} className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${adres!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
         </div>



        <div className='flex gap-[23px] mt-[25px]'>
            <div>
            <p className='formp mb-[9px]'>City</p>
                <input type="text" placeholder="City" value={city} onChange={e=>dispach(Omborchi.actions.cy(e.target.value))}   className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${city!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
            </div>

            <div>
            <p className='formp mb-[9px]'>Post Code</p>
                <input type="text" value={postcode} onChange={e=>dispach(Omborchi.actions.pe(e.target.value))}  placeholder="Post Code" className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${postcode!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
            </div>
            <div className='hidden md:block'>
            <p className='formp mb-[9px]'>Country</p>
                <input type="text" value={country} onChange={e=>dispach(Omborchi.actions.co(e.target.value))}   placeholder="country" className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${country!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
            </div>


        </div>



        <div className='mt-[25px] md:hidden'>
            <p className='formp mb-[9px]'>Country</p>
                <input type="text" placeholder="country" value={country} onChange={e=>dispach(Omborchi.actions.co(e.target.value))}    className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${country!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
            </div>

            <p className="text-[#7C5DFA] bill mt-[41px] mb-6">Bill From</p>

            <div>
                <div>
                     <p className='formp mb-[9px]'>Client's Name</p>
                    <input type="text" value={name} onChange={e=>dispach(Omborchi.actions.nm(e.target.value))}   placeholder="Clients Name"  className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${name!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
                 </div>

            <div className='my-[25px]'>
                  <p className='formp mb-[9px]'>Client's Email</p>
                  <input type="text" value={email} placeholder="Email" onChange={e=>dispach(Omborchi.actions.em(e.target.value))}    className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${email!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
            </div>

            <div>
                     <p className='formp mb-[9px]'>Street Address</p>
                    <input type="text" value={cadres} onChange={e=>dispach(Omborchi.actions.ca(e.target.value))}   placeholder="Street Address"  className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${cadres!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
                 </div>

                 <div className='flex gap-[23px] mt-[25px]'>
            <div >
            <p className='formp mb-[9px]'>City</p>
                <input type="text" placeholder="City" value={ccity} onChange={e=>dispach(Omborchi.actions.cc(e.target.value))}    className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${ccity!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
            </div>

            <div>
            <p className='formp mb-[9px]'>Post Code</p>
                <input type="text" placeholder="Post Code" value={cpostcode} onChange={e=>dispach(Omborchi.actions.cp(e.target.value))}   className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${cpostcode!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
            </div>
            <div className='hidden md:block'>
            <p className='formp mb-[9px]'>Country</p>
                <input type="text" placeholder="country" value={ccountry} onChange={e=>dispach(Omborchi.actions.ccy(e.target.value))}    className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${ccountry!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
            </div>

        </div>
        <div className='mt-[25px] md:hidden'> 
            <p className='formp mb-[9px]'>Country</p>
                <input type="text" placeholder="country" value={ccountry} onChange={e=>dispach(Omborchi.actions.ccy(e.target.value))}    className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${ccountry!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
            </div>


                <div className='md:flex md:mt-[49px]'>

                <div className='mt-[41px] mb-[25px] md:m-0'>
                     <p className='formp mb-[9px]'>Invoice Date</p>
                    <input type="date" value={kun} onChange={e=>dispach(Omborchi.actions.kn(e.target.value))}   className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${kun!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
             </div>

             <div>
                     <p className='formp mb-[9px]'>Payment Terms</p>
                     <select value={muddat} onChange={e=>dispach(Omborchi.actions.mud(e.target.value))}   className='w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2'>
                    <option value="a1">Net 1 days</option>
                    <option value="a7">Net 7 days</option>
                    <option value="a14">Net 14 days</option>
                    <option value="a30 ">Net 30 days</option>

                    </select>
            </div>


                </div>

            <div className='mt-[25px] mb-[69px]'>
                     <p className='formp mb-[9px]' >Project / Description</p>
                    <input type="text" value={pd} onChange={e=>dispach(Omborchi.actions.pd(e.target.value))}   placeholder="Project / Description" className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${pd!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
                 </div>

            </div>



            <h4 className='itm'>Item List</h4>
            {arr?.map(a=>            <div className='md:flex md:gap-4 mt-[22px]'>
                    <div>
                            <p className='formp mb-[9px]'>Item Name</p>
                            <input type="text" placeholder="Item Name" value={itm[a-1].itname} onChange={e=>dispach(Omborchi.actions.itname([e.target.value, a-1]))}   className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${itm[a-1].itname!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
                    </div>

                    <div className='flex gap-[23px] mt-[25px] mb-[49px] md:m-0'>
                    <div>
                    <p className='formp mb-[9px]'>Qty.</p>
                        <input type="number"  placeholder="Qty" value={itm[a-1].qty} onChange={e=>dispach(Omborchi.actions.qty([e.target.value, a-1]))}  className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${itm[a-1].qty!='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
                    </div>

                    <div>
                    <p className='formp mb-[9px]'>Prise</p>
                        <input type="number" placeholder="Prise" value={itm[a-1].prise} onChange={e=>dispach(Omborchi.actions.price([e.target.value, a-1]))}   className={`w-full h-12 yz rbg px-5 outline-[#9277FF] border-[#DFE3FA] border-solid border-2 ${ itm[a-1].prise !='' || vl ? 'border-[#DFE3FA] outline-[#9277FF]' :'border-red-500 outline-red-500' }`}/>
                    </div>

                    <div>
                    <p className='formp mb-[9px]'>Total</p>
                    <div className='flex h-12 items-center justify-between w-[100px]'>
                        <p className='yz'>{itm[a-1].prise*itm[a-1].qty}</p>
                        <svg onClick={()=>Ochr(a)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM9 4V6H15V4H9Z"></path></svg>
                    </div>
                    </div>
                    
                      </div>

           
        </div>)}

        <h3 className='w-[327px] h-12 add rbg mt-12 rounded-full mx-auto flex items-center justify-center' onClick={()=>Qosh()}>+ Add New Item</h3>
   
        <div className="h-[91px] mt-[56px] flex gap-2 items-center justify-center roybg">
            <button className="fsft text-white px-6 pt-[18px] pb-[15px] roybg rounded-full dsc" onClick={e=>Hendl(e, 'Paid')}>Discard</button>
            <button className="fsft text-white px-6 pt-[18px] pb-[15px] bg-[#252945] rounded-full" onClick={e=>Hendl(e, 'Draft')}>Save as Draft</button>
            <button className="fsft text-white px-7 pt-[18px] pb-[15px] bg-[#7C5DFA] rounded-full" onClick={e=>Hendl(e, 'Pending')}>Save & Send</button>
        </div>
      
    </form>
  );
}; 