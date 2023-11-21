import { User } from 'lucide-react';
import '/Users/ayush/Desktop/sih/src/app/globals.css'
import { useState } from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // You can use the 'email' and 'password' state variables to get user input
  };

  return (
    <>
    
    <div className='w-full h-screen flex'>
    
        <div className='w-[100%] h-[100%] bg-[#ffffff] text-white flex justify-center items-center'>
        <div className='text-3xl absolute top-4 left-4'>
        <Link href="/" className="flex z-40 font-semibold">
            <span className='text-black'>E-Nyay Vault</span>
        </Link>
        </div> 
            <form className='text-center border-4 border-slate-700 border-dashed rounded-md w-[600px] h-[400px] p-9'
            onSubmit={handleLogin}
            >
            <div className='bg-blue-500 h-full w-full rounded-2xl'>
              <br/>
              <p className='text-2xl'>LogIn</p>
                 {/*Username Input */}
                
                <br />
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2 text-white hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring focus:ring-violet-300'
                type='text'
                placeholder='Email Id'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                 {/* Password Input */}
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2 text-white hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring focus:ring-violet-300'
                type='password'
                placeholder='**********'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                {/* Button */}
                {/* <button className='w-[200px] h-[50px] border hover:bg-teal-900'
                type='submit'>Login</button> */}
                <Link 
                href="/dashboard" 
                className={`${buttonVariants({
                variant: "ghost",
                size: "lg",
              })} text-white bg-teal-800 ease-in duration-300`}>Login</Link>
            </div>
            </form>
            
        </div>
        <div className='w-[50%] h-[100%] flex justify-center items-center bg-blue-500'>
            {/* <h2 className='text-3xl text-white '>Login</h2> */}
            <User className='h-52 w-52 text-white shadow-slate-700 shadow-2xl rounded-full hover:scale-150 ease-in duration-300' />
        </div>
    </div>
    </>
  );
};

export default Login;
