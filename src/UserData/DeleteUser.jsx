import { deleteUser } from "firebase/auth";
import { auth } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { Omborchi } from "../Omborchi";


function DeleteUser() {
        const display=useSelector(k=>k.udt)
        const dispach=useDispatch()
    function Delet(){
        
        const user = auth.currentUser;
        localStorage.setItem('nm','');
        localStorage.setItem('ras', '');
        dispach(Omborchi.actions.urd())
        dispach(Omborchi.actions.url(''))
        deleteUser(user).then(() => {
          
        }).catch((error) => {
        
        });
    }

  return (
    <div className={`absolute w-[100vw] h-[100vh] bg-[#ffffffc7] top-0 sahifa z-50 left-0  justify-center gap-5 items-center flex-col ${display ? 'flex':'hidden'}`} onClick={()=>dispach(Omborchi.actions.urd())}>
        <img src={localStorage.getItem('ras')} alt="" className="w-[30%] rounded-md"/>
         <h2 className="invo">Name: {localStorage.getItem('nm')}</h2>
        <button className="btn" onClick={e=>{Delet(); e.stopPropagation()}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path></svg> Delet ackaunt</button>
       
    </div>
  )
}

export default DeleteUser