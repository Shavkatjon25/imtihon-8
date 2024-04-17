import {getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../Firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Omborchi } from "../Omborchi";







function User(b) {
  const [dz, setDz]=useState(false);

    



    const uploadFile = (file) => {
      setDz(true)
        if (!file) {
            alert("Faqatgina rasm faylini yuklashingiz mumkin!");
            setDz(false)
            return;
          }
      
        
          if (!file.type.startsWith('image/')) {
            alert("Faqatgina rasm faylini yuklashingiz mumkin!");
            setDz(false)
            return;
          }
        const storageRef = ref(storage, 'images/' + file.name);
      
        uploadBytes(storageRef, file).then((snapshot) => {
          console.log('Fayl muvaffaqiyatli yuklandi');
          b.a()

          getDownloadURL(storageRef).then((downloadURL) => { 
            console.log('Faylning URL manzili:', downloadURL);
            
            localStorage.setItem('ras', downloadURL)
          }).catch((error) => {
            console.error('Faylni URL sifatida olishda xatolik yuz berdi', error);
            setDz(false)
          });
        }).catch((error) => {
          console.error('Faylni yuklashda xatolik yuz berdi', error);
          setDz(false)
        });
      }



  return (
    <div className="mx-auto" >
        <label htmlFor="fl"  className=" w-[103px] h-[103px] flex graf3 rounded-md p-2 hover:opacity-75 shadow-teal-400 shadow"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg> Rasm kiritish uchun bosing </label>
    <input  type="file" disabled={dz}   className="hidden" id="fl" onChange={(e) => uploadFile(e.target.files[0])} />
    </div>

  )
}

export default User