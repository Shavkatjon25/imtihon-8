import { TypeAnimation } from "react-type-animation"


import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";





function Singin() {

  const [email, setEmail]=useState('');
  const [pwd, setPwd]=useState('');
const navigate=useNavigate()
const [err, setErr]=useState(true)

  function Snp(){
    setErr(false)
    if (pwd.length<6) {
      setPwd('');
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      setEmail('')
      return;
    }
    signInWithEmailAndPassword(auth, email, pwd)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      navigate('/')
    })
    .catch((error) => {
        setPwd('')
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#858BB2"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
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
               <label htmlFor="email" className="graf mt-3">Email</label>
                <input type="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className={`md:w-[400px] w-[250px]   px-2 py-1 rounded-md ${ err || email.endsWith("@gmail.com") ? 'outline-blue-400 border':'border-red-500 border-[2px] border-solid outline-red-500'}`} />
                <label htmlFor="pasword" className="graf mt-3"> Pasword</label>
                <input type="password" id="pasword" value={pwd} onChange={e=>setPwd(e.target.value)} placeholder="Pasword" className={`md:w-[400px] w-[250px]   px-2 py-1 rounded-md ${ err || pwd.length>=6 ? 'outline-blue-400 border':'border-red-500 border-[2px] border-solid outline-red-500'}`}/>
                <button onClick={Snp} className="md:w-[400px] w-[250px] border bg-blue-500 px-2 py-1 text-white border-none mt-5 rounded-md" >Sign in</button>
            </div>

            <Link to={'/user'} className="mt-5 itm" >Sign up? </Link>
        </div>

    </div>
  )
}

export default Singin