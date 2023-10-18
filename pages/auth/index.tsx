import Image from 'next/image'
import { Inter } from 'next/font/google'
import Slider from '@/UI/slider';
import Api from '@/Api';
import { useState } from 'react';
import React from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const emailHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
  }
  const passwordHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
  }

  const submitHandler = () => {
        
      setIsSubmitting(true)
      Api.axios_instance.post(Api.baseUrl+'post_api_listeners_login')
      .then(res => {
          console.log(res);
      }).catch((error) => {console.log(error);
      }).finally(()=> {
          setIsSubmitting(false)
      })
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <section className="" style={{marginTop:"5rem"}}>
        <div className="grid h-screen grid-cols-2">
          <div className="">
           <form className='form-control'>
              <h1 style={{fontWeight:"600", marginLeft:"4.5rem"}} className=' mb-4'>Login with your socials below</h1>
                <select className="mb-10 block w-3/4 appearance-none h-14 bg-white text-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option data-image="/images/carousel1.svg" >
                    <div className="flex items-center" >
                        <img src='/images/carousel1.svg'/> Continue with facebook
                       </div>
                  </option>
                  <option value="option1" data-icon="🌞">Continue with apple ID</option>
                  <option value="option2" >Continue with google</option>
                </select>
              
           
              <h2 className='' style={{ marginLeft:"7.5rem"}} >Login with email.</h2>
                  <input
                  id="inputField"
                  type="text"
                  className="mt-4 w-3/4 px-3 py-2 mt-1 bg-transparent text-gray-700 border-2 h-14 rounded-full focus:ring focus:ring-indigo-400 focus:outline-none focus:border-indigo-300 hover:border-gray-400"
                  placeholder="Enter your email"
                  onChange={emailHandler}
                />
                {/* </center>
                <center> */}
                 <input
                  type="text"
                  className="mt-4 w-3/4 bg-transparent px-3 py-2 mt-1 text-gray-700 border-2 h-14 rounded-full focus:ring focus:ring-indigo-400 focus:outline-none focus:border-indigo-300 hover:border-gray-400"
                  placeholder="Enter Password"
                  onChange={passwordHandler}
                /><br />
                {/* </center> */}
                <button className="hover:bg-blue-700 text-black  py-2 px-4 rounded-full mt-3" style={{background:"#7B61FF", }}>
                  Log in
                </button> <span style={{marginLeft:'8rem'}}>Forgot Password?</span> 
              </form>
          </div>
       
          <div className="">
        
            <Slider />

          <h1 className='text-center' style={{color:'#7B61FF', fontSize:"30px", fontWeight:"700"}}>Join a community of podcast<br /> lovers and creators</h1>
         
          </div>
        </div>
      </section>

     
    </main>
  )
}

