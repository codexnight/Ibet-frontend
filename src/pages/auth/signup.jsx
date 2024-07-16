'use client'

import { useEffect, useState, useRef} from "react";
import { signup } from "@/api/user";
import Cookies from "js-cookie";
import { showToast } from "react-next-toast";

export function Register () {
      const [innerEmail, setInnerEmail] = useState("");
      const [innerName, setInnerName] = useState("");
      const [innerPassword, setInnerPassword] = useState("");
      const [innerConfirm, setInnerConfirm] = useState("");
      const [innerAvatar, setInnerAvater] = useState('https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80');
      const [photoName, setPhotoName] = useState(null);
      const [photoPreview, setPhotoPreview] = useState(null);
      const photoInputRef = useRef(null);
      const initValue = () => {
            setInnerPassword("");
            setInnerEmail("");
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if (innerEmail != "" && innerName != "" && innerPassword != "" && (innerPassword == innerConfirm)) {
            await signup({Avatar: innerAvatar, Name: innerEmail, Email: innerName, Password: innerPassword}).then(response => {
              if(response == 'success') {
                showToast.success('Sign un successful');
                window.location.href = '/auth/login';
              } else {
                showToast.error('Log in error');
              }
            })
            initValue();
          }
        }
       catch {
        showToast.error('Log in error');
       }
      }

      const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        setPhotoName(file.name);
        const reader = new FileReader();
        reader.onload = (e) => {
          setPhotoPreview(e.target.result);
          setInnerAvater(e.target.result);
        };
        reader.readAsDataURL(file);
      };


    return (
      <div className="loginPage">
            <div class="container px-4 mx-auto loginMain">
                  <div class="max-w-lg mx-auto">
                        <div class="text-center mb-6">
                              <h2 class="text-3xl md:text-4xl font-extrabold">Sign up</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                               <div className="col-span-6 ml-2 sm:col-span-4 md:mr-3">
                                  <input
                                    type="file"
                                    className="hidden"
                                    onChange={handlePhotoChange}
                                  />

                                  <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="photo">
                                    Profile Photo <span className="text-red-600"> </span>
                                  </label>

                                  <div className="text-center">
                                    <div className={`mt-2 ${!photoPreview && 'block'}`} style={{ display: photoPreview ? 'none' : 'block' }}>
                                      <img
                                        src={innerAvatar}
                                        className="w-40 h-40 m-auto rounded-full shadow" 
                                      />
                                    </div>
                                    <div className={`mt-2 ${photoPreview && 'block'}`} style={{ display: photoPreview ? 'block' : 'none' }}>
                                      <span
                                        className="block w-40 h-40 rounded-full m-auto shadow"
                                        style={{
                                          backgroundSize: 'cover',
                                          backgroundRepeat: 'no-repeat',
                                          backgroundPosition: 'center center',
                                          backgroundImage: `url('${photoPreview}')`,
                                        }} 
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-2 ml-3"
                                      onClick={() => {
                                        const fileInput = document.querySelector('input[type="file"]');
                                        fileInput.click();
                                      }}
                                    >
                                      Select New Photo
                                    </button>
                                  </div>
                                </div>
                              <div class="mb-6">
                                <label class="block mb-2 font-extrabold" for="">Name</label>
                                <input class="inline-block w-full p-4 leading-6 text-lg font -extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" onChange={(e) => setInnerName(e.target.value)} type="name" placeholder="name"/>
                              </div>
                              <div class="mb-6">
                                <label class="block mb-2 font-extrabold" for="">Email</label>
                                <input class="inline-block w-full p-4 leading-6 text-lg font -extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" onChange={(e) => setInnerEmail(e.target.value)} type="email" placeholder="email"/>
                              </div>
                              <div class="mb-6">
                                <label class="block mb-2 font-extrabold" for="">Password</label>
                                <input class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" onChange={(e) => setInnerPassword(e.target.value)} type="password" placeholder="**********"/>
                              </div>
                               <div class="mb-6">
                                <label class="block mb-2 font-extrabold" for="">Confirm Password</label>
                                <input class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" onChange={(e) => setInnerConfirm(e.target.value)} type="password" placeholder="**********"/>
                              </div>
                              <div class="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                              </div>
                              <button type="submit" class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">Sign Up</button>
                        </form>
                  </div>
            </div>
      </div>
    )
}

export default Register;