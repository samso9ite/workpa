import Image from 'next/image'
import { Inter } from 'next/font/google'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <section className="" style={{marginTop:"5rem"}}>
        <div className="grid h-screen grid-cols-2">
          <div className="">
           
            
            <form className='form-control'>
              <h1 style={{fontWeight:"600"}} className='text-center mb-4'>Login with your socials below</h1>
              <center>
                <select className="mb-10 block w-3/4 appearance-none h-14 bg-white text-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option disabled>Choose account</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </center>

              <h2 className='text-center'>Login with email.</h2>
                <center>
                  <input
                  id="inputField"
                  type="text"
                  className="mt-4 w-3/4 px-3 py-2 mt-1 bg-transparent text-gray-700 border-2 h-14 rounded-full focus:ring focus:ring-indigo-400 focus:outline-none focus:border-indigo-300 hover:border-gray-400"
                  placeholder="Enter your email"
                />
                </center>
                <center>
                 <input
                  type="text"
                  className="mt-4 w-3/4 bg-transparent px-3 py-2 mt-1 text-gray-700 border-2 h-14 rounded-full focus:ring focus:ring-indigo-400 focus:outline-none focus:border-indigo-300 hover:border-gray-400"
                  placeholder="Enter Password"
                />
                </center>
                <button className="hover:bg-blue-700 text-black  py-2 px-4 rounded-full mt-3" style={{background:"#7B61FF", marginLeft:"3.5rem"}}>
                  Log in
                </button>
              </form>
          </div>
       
          <div className="">
          <AwesomeSlider>
            <div>  
                <img
                  src="/images/carousel1.svg"
                  className="block w-full"
                  alt="Wild Landscape" />
            </div>
            <div>  <img
                  src="/images/carousel1.svg"
                  className="block w-full"
                  alt="Wild Landscape" /></div>
            <div>  <img
                  src="/images/carousel1.svg"
                  className="block w-full"
                  alt="Wild Landscape" /></div>
            <div>  <img
                  src="/images/carousel1.svg"
                  className="block w-full"
                  alt="Wild Landscape" /></div>
          </AwesomeSlider>
          <h1 className='text-center' style={{color:'#7B61FF', fontSize:"30px", fontWeight:"700"}}>Join a community of podcast<br /> lovers and creators</h1>
           
          </div>
        </div>
      </section>

     
    </main>
  )
}

