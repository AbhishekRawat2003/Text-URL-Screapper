'use client'

import { useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig' // Adjust the import path as necessary

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    // 
    console.log(formData);
    e.preventDefault();
    try{
      const userCredential= await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log(userCredential,);
      const user = userCredential.user;
      console.log("User created: ",user);
      toast.success("Account created successfully!");
      router.push('/dashboard');

    }catch (error) {
      console.error("Error creating user: ", error);
      toast.error("Failed to create account. Please try again.");
    }
  }

  return (


    <div className=' h-auto min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#3E5F44] via-[#5E936C] to-[#93DA97]'>

      <div className='bg-amber-500 w-full max-w-6xl rounded-2xl overflow-hidden flex flex-col sm:flex-row bg-gradient-to-br from-[#5E936C] via-[#93DA97] to-[#78C841] shadow-[inset_0_0_30px_rgba(255,255,255,0.3),_0_0_60px_rgba(0,0,0,0.3)]'>
        <div className='w-full sm:w-1/2 relative hidden sm:flex items-center justify-center rounded-bl-2xl rounded-tl-2xl'>

          <div className="w-[60vmin] max-w-[500px] aspect-square rounded-full absolute -top-[12vmin] -left-[10vmin] bg-gradient-to-br from-[#78C841] via-[#93DA97] to-[#5E936C] shadow-[inset_0_0_15px_rgba(255,255,255,0.2),_0_0_30px_rgba(0,0,0,0.2)] flex items-center justify-center text-white text-3xl font-semibold z-1 flex-col gap-1">
           <p className='font-stretch-50% text-4xl text-[#3E5F44]'>Welcome
           </p>
           <p className='text-lg font-stretch-100% text-[#5E936C]'>Create your account to continue.</p>
          </div>

          <div className='w-[20vmin] max-w-[144px] aspect-square rounded-full absolute top-[26vmin] left-[28vmin] bg-gradient-to-tr from-blue-300 via-blue-400 to-blue-500 shadow-[inset_0_0_10px_rgba(255,255,255,0.2),_0_0_20px_rgba(0,0,0,0.2)] '>
          </div>

          <div className='w-[25vmin] max-w-[256px] aspect-square rounded-full absolute top-[30vmin] -left-[10vmin] bg-gradient-to-tl from-yellow-100 via-amber-100 to-amber-200 shadow-[inset_0_0_10px_rgba(255,255,255,0.15),_0_0_25px_rgba(0,0,0,0.2)] z-10'>
          </div>

        </div>




        {/* signup section */}
        <div className='w-1/2 sm:w-1/2 p-8'>
          <div className="text-center mb-8">
            <Link href="/">
              <p className='text-2xl font-semibold italic text-white'>Url Scrapper</p>
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="text-[#ccffa7] text-md font-medium mb-2 block">Email Id</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm text-white font-medium bg-primary border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="text-[#ccffa7] text-md font-medium mb-2 block">Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm text-white font-medium bg-primary border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter password"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="text-slate-600 ml-3 text-sm">
                  I accept the
                  <a href="#" className="text-[#E8FFD7] font-medium hover:underline ml-1">Terms and Conditions</a>
                </label>
              </div>
            </div>

            <div className="mt-8">
  <button
    type="submit"
    className="w-full py-3 px-4 text-sm font-medium rounded-md text-white bg-gradient-to-tr from-blue-300 via-blue-400 to-blue-500
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2),_0_0_20px_rgba(0,0,0,0.2)]
               hover:from-blue-400 hover:via-blue-500 hover:to-blue-600
               active:scale-[0.97] active:shadow-inner
               transition-all duration-300 ease-in-out transform
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    Create an account
  </button>
</div>


            <p className="text-slate-600 text-sm mt-6 text-center">
              Already have an account?
              <Link href="/login" className="text-blue-600 font-medium hover:underline ml-1">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </div >
  )
}



