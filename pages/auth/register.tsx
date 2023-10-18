import Image from 'next/image'
import { Inter } from 'next/font/google'
 
import { useState } from 'react';
import React from 'react'
import Api from '../../Api';
import Slider from '@/UI/slider';

const inter = Inter({ subsets: ['latin'] })

export default function Register() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const[createWithEmail, setCreateWithEmail] = useState<boolean>(false)
  
    const emailHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        
        setEmail(event.target.value)
    }
    const passwordHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const submitHandler = () => {
        setIsSubmitting(true)
        const formData = {
            email: email,
            password: password
          }
        Api.axios_instance.post(Api.baseUrl+'post_api_listeners_register', formData)
        .then(res => {
            console.log(res);
        }).catch((error) => {console.log(error);
        }).finally(()=> {
            setIsSubmitting(false)
        })
    }

  return (
    <main
      className={`flex items-center min-h-screen justify-between`}
    >
      <section >
        <div className="grid grid-cols-2">
          <div className="text-center mt-20">
          <h1 style={{fontSize:"30px", fontWeight:"700"}}>Create an account</h1>
            <button className="hover:bg-grey-200 bg-white text-black w-3/4 py-2 px-4 rounded-full mt-3">
                <img src='/images/google.svg' style={{float:"left"}}/><span style={{paddingTop:"30px"}}> Continue with Google</span> <span className='text-center' style={{float:"right", marginTop:"10px"}}><img src='/images/arrow.svg' /></span>
            </button>
            <button className="hover:bg-grey-200 bg-white text-black w-3/4 py-2 px-4 rounded-full mt-3">
                <img src='/images/facebook.svg' style={{float:"left"}}/> Continue with facebook <span className='text-center' style={{float:"right", marginTop:"10px"}}><img src='/images/arrow.svg' /> </span>
            </button>
            <button className="hover:bg-grey-200 bg-white text-black w-3/4 py-2 px-4 rounded-full mt-3">
                <img src='/images/apple.svg' style={{float:"left"}}/> Continue with apple ID <span className='text-center' style={{float:"right", marginTop:"10px"}}><img src='/images/arrow.svg' /> </span>
            </button>
            <button className="hover:bg-grey-200 bg-white text-black w-3/4 py-2 px-4 rounded-full mt-3" onClick={() => {setCreateWithEmail(!createWithEmail)}}>
                <img src='/images/email.svg' style={{float:"left"}}/> Create account with your emails <span className='text-center' style={{float:"right", marginTop:"10px"}}><img src='/images/arrow.svg' /> </span>
            </button>
            
           {createWithEmail &&
                <div>
                    <center>
                        <input type="text"
                            className="mt-4 w-3/4 px-3 py-2 mt-1 bg-transparent text-gray-700 border-2 h-14 rounded-full focus:ring focus:ring-indigo-400 focus:outline-none focus:border-indigo-300 hover:border-gray-400"
                            placeholder="Enter your email"
                            onChange={emailHandler}
                        />
                            
                        <input
                            type="text"
                            className="mt-4 w-3/4 bg-transparent px-3 py-2 mt-1 text-gray-700 border-2 h-14 rounded-full focus:ring focus:ring-indigo-400 focus:outline-none focus:border-indigo-300 hover:border-gray-400"
                            placeholder="Enter Password"
                            onChange={passwordHandler}
                        />
                    </center>
                </div>
               
            }
                <br />
                <button className="hover:bg-blue-700 text-black  py-2 px-4 rounded-full mt-3" style={{background:"#7B61FF"}} onClick={submitHandler} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting' : 'Sign Up'}
                </button>
            <p className='text-center mt-5'>Already have an account? <b>Login</b></p>
          </div>

         <div className="">

            <center>
                <Slider />
                <h1 className='text-center' style={{color:'#7B61FF', fontSize:"30px", fontWeight:"700"}}>Join a community of podcast<br /> lovers and creators</h1>
            </center>
          </div>
        </div>
      </section>

     
    </main>
  )
}

