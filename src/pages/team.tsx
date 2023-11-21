import Link from 'next/link';
import '/Users/ayush/Desktop/sih/src/app/globals.css'


const Team =()=>{

    return(
        <>
        <div className='text-2xl absolute top-4 left-4'>
        <Link href="/" className="flex z-40 font-semibold">
            <span className='text-black'>E-Nyay Vault</span>
        </Link>
        </div>
        <div className='mx-auto mb--32 mt-32 max--w-5xl sm::mt-56'>
      <div className='mb-12 px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
        <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>Meet With Our Team</h2>
        </div>
        </div>
        </div>
        </>
    );

}
export default Team;