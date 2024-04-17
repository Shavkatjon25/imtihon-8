import { TypeAnimation } from "react-type-animation"


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "../UserData/User";





function Singup() {
  const [alert, setAlert]=useState(false)
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [pwd, setPwd]=useState('');
const [pwdtk, setPwdtk]=useState('');
const [err, setErr]=useState(true)
const navigate=useNavigate()

function Aler(){
  setAlert(true);
  setTimeout(()=>{
    setAlert(false)
  }, 2000)
}

  function Snp(){
    setErr(false)
    if (name=='') {
      return;
    }
    if (pwd!=pwdtk) {
      setPwd('');
      setPwdtk('');
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      setEmail('')
      return;
    }
    createUserWithEmailAndPassword(auth, email, pwd)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate('/userdata')
    
  })
  .catch((error) => {
    setEmail('')
  
  });
  }


  return (
    <div className="w-full rounded-md h-[100vh] roybg mx-auto flex">
        <div className="w-[50%] h-[100%] hidden lg:block">
            <img src="https://picsum.photos/0" alt="" className="h-full w-[100%]" />
        </div>
        <div className="w-[100%] lg:w-[50%] h-[100%] flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
            <User a={Aler}/>
            <TypeAnimation
  sequence={[
    'Assalomu ....',
    500,
    'Assalomu alaykum!',
    500,
    'Assalomu',
    500,
    '',
    500,
    'Hush ....',
    500,
    'Hush kelibsiz!',
    500,
    'Hush',
    500,
    '',
    500,
  ]}
  style={{ fontSize: '2em', textAlign:"center", color:'blue'}}
  repeat={Infinity}
/>
            </div>
            <div className="flex flex-col">
             
            <label htmlFor="fio" className="graf">F.I.O</label>
                <input type="text" placeholder="F.I.O" value={name} onChange={e=>setName(e.target.value)} id="fio" className={`md:w-[400px] w-[250px]   px-2 py-1 rounded-md ${ err || name!="" ? 'outline-blue-400 border':'border-red-500 border-[2px] border-solid outline-red-500'}`} />
               <label htmlFor="email" className="graf mt-3">Email</label>
                <input type="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className={`md:w-[400px] w-[250px]   px-2 py-1 rounded-md ${ err || email.endsWith("@gmail.com") ? 'outline-blue-400 border':'border-red-500 border-[2px] border-solid outline-red-500'}`} />
                <label htmlFor="pasword" className="graf mt-3"> Pasword</label>
                <input type="password" id="pasword" value={pwd} onChange={e=>setPwd(e.target.value)} placeholder="Pasword" className={`md:w-[400px] w-[250px]   px-2 py-1 rounded-md ${ err || pwd.length>=6 ? 'outline-blue-400 border':'border-red-500 border-[2px] border-solid outline-red-500'}`}/>
                <label htmlFor="pt" className="graf mt-3">Paswordni takrorlang</label>
                <input type="password" id="pt" value={pwdtk} onChange={e=>setPwdtk(e.target.value)} placeholder="Paswordni takrorlang" className={`md:w-[400px] w-[250px]   px-2 py-1 rounded-md ${ err || pwdtk.length>=6 ? 'outline-blue-400 border':'border-red-500 border-[2px] border-solid outline-red-500'}`}/>
                <button onClick={Snp} className="md:w-[400px] w-[250px] border bg-blue-500 px-2 py-1 text-white border-none mt-5 rounded-md" >Sign up</button>
            </div>

            <Link to={'/in'} className="mt-5 itm" >Sign in? </Link>
        </div>

        <div role="alert" class={`alert animat alert-success absolute w-[70%]  text-[12px] text-left  md:text-[1rem] md:w-[50%] lg:w-[32%] text-white right-0 h-[60px] ${alert ? 'flex':'hidden'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Rasm yuklandi</span>
            </div>
    </div>
  )
}

export default Singup