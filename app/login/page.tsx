'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import toast from 'react-hot-toast';

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (email && password) {
    //   router.push('/dashboard');
    // }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      console.log("User logged in: ", user);
      toast.success("Login successful!");
      router.push('/dashboard');
    } catch (error) {
      console.error("Error logging in: ", error);
      toast.error("Failed to log in. Please check your credentials.");
    }
  };

  return (
   
    <div className=' h-auto min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#3E5F44] via-[#5E936C] to-[#93DA97]'>

      <div className='bg-amber-500 w-full max-w-6xl rounded-2xl overflow-hidden flex flex-col sm:flex-row bg-gradient-to-br from-[#5E936C] via-[#93DA97] to-[#78C841] shadow-[inset_0_0_30px_rgba(255,255,255,0.3),_0_0_60px_rgba(0,0,0,0.3)]'>
        <div className='w-full sm:w-1/2 relative hidden sm:flex items-center justify-center rounded-bl-2xl rounded-tl-2xl'>

          <div className="w-[60vmin] max-w-[500px] aspect-square rounded-full absolute -top-[12vmin] -left-[10vmin] bg-gradient-to-br from-[#78C841] via-[#93DA97] to-[#5E936C] shadow-[inset_0_0_15px_rgba(255,255,255,0.2),_0_0_30px_rgba(0,0,0,0.2)] flex items-center justify-center text-white text-3xl font-semibold z-1 flex-col gap-1">
            <p className='font-stretch-50% text-4xl text-[#3E5F44]'>Welcome
            </p>
            <p className='text-lg font-stretch-100% text-[#5E936C]'>Please enter your details.</p>
          </div>

          <div className='w-[20vmin] max-w-[144px] aspect-square rounded-full absolute top-[26vmin] left-[28vmin] bg-gradient-to-tr from-blue-300 via-blue-400 to-blue-500 shadow-[inset_0_0_10px_rgba(255,255,255,0.2),_0_0_20px_rgba(0,0,0,0.2)] '>
          </div>

          <div className='w-[25vmin] max-w-[256px] aspect-square rounded-full absolute top-[30vmin] -left-[10vmin] bg-gradient-to-tl from-yellow-100 via-amber-100 to-amber-200 shadow-[inset_0_0_10px_rgba(255,255,255,0.15),_0_0_25px_rgba(0,0,0,0.2)] z-10'>
          </div>

        </div>




        {/* signup section */}
        <div className='w-1/2 sm:w-1/2 p-8'>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-center text-white ">Log in</h2>
            <Link href="/">
              <p className='text-2xl font-semibold italic text-white'>
                Url Scrapper</p>
            </Link>
          </div>



          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md bg-white/90 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B13BFF]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md bg-white/90 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B13BFF]"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-medium rounded-md text-white bg-gradient-to-tr from-blue-300 via-blue-400 to-blue-500 shadow-[inset_0_0_10px_rgba(255,255,255,0.2),_0_0_20px_rgba(0,0,0,0.2)] hover:brightness-110 transition duration-300"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm mt-4 text-center">
            Don’t have an account?{' '}
            <a href="/signup" className="underline text-purple-200 hover:text-purple-100 transition">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div >
  );
}
