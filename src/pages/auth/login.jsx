'use client'

import { useEffect, useState } from "react";
import {login as LoginAPI} from "../../api/user";
import Cookies from "js-cookie";
import { showToast } from "react-next-toast";

export function Login () {
      const [innerEmail, setInnerEmail] = useState("");
      const [innerPassword, setInnerPassword] = useState("");
      const initValue = () => {
            setInnerPassword("");
            setInnerEmail("");
      }
      const handleSubmit = async (e) => {
        e.preventDefault();
      if (innerEmail != "" && innerPassword != "") {
            await LoginAPI({Email: innerEmail, Password: innerPassword}).then(response => {
                  if(response == "error") {
                        toast.warn('Error!', {
                              position: 'bottom-left',
                              autoClose: 3000,
                              hideProgressBar: true,
                              closeOnClick: false,
                              pauseOnHover: false,
                              draggable: false,
                              progress: undefined,
                              theme: 'dark',
                            }); return;
                  } else {
                        showToast.success('Log in successful');
                        Cookies.set('token', response.token);
                        Cookies.set('Name', response.userData.Name);
                        Cookies.set('Email', response.userData.Email);
                        Cookies.set('Password', response.userData.Password);
                        Cookies.set('Avatar', response.userData.Avatar);
                        window.location.href = '/';
                  }
            })
            initValue();
      }
      }
    return (
      <div className="loginPage">
            <div class="container px-4 mx-auto loginMain">
                  <div class="max-w-lg mx-auto">
                        <div class="text-center mb-6">
                              <h2 class="text-3xl md:text-4xl font-extrabold">Sign in</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                              <div class="mb-6">
                              <label class="block mb-2 font-extrabold" for="">Email</label>
                                    <input class="inline-block w-full p-4 leading-6 text-lg font -extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" onChange={(e) => setInnerEmail(e.target.value)} type="email" placeholder="email"/>
                              </div>
                              <div class="mb-6">
                              <label class="block mb-2 font-extrabold" for="">Password</label>
                                    <input class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" onChange={(e) => setInnerPassword(e.target.value)} type="password" placeholder="**********"/>
                              </div>
                              <div class="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                              <div class="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                              <label for="">
                                    <input type="checkbox"/>
                                    <span class="ml-1 font-extrabold">Remember me</span>
                                    </label>
                              </div>
                              <div class="w-full lg:w-auto px-4"><a class="inline-block font-extrabold hover:underline" href="#">Forgot your
                                    password?</a></div>
                              </div>
                              <button type="submit"  class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">Sign in</button>
                              <p class="text-center font-extrabold">Don&rsquo;t have an account? <a class="text-red-500 hover:underline"
                              href="/auth/signup">Sign up</a></p>
                        </form>
                  </div>
            </div>
      </div>
    )
}

export default Login;