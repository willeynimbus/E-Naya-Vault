// import Link from "next/link"
// import MaxWidthWrapper from "./MaxWidthWrapper"
// import { buttonVariants } from "./ui/button"

// const Navbar =() => {
//     return(
//         <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
//             <MaxWidthWrapper>
//                 <div className="flex h-14 items-center justify-between border-b border-zinc-200">
//                     <Link href='/' className='flex z-40 font-semibold'><span>E-Nyay Vault</span></Link>
//                 </div>
//                 <div className='hidden items-center space-x-4 sm:flex'>
//                 <>
//                 <Link
//                     href='/pricing'
//                     className={buttonVariants({
//                     variant: 'ghost',
//                     size: 'sm',
//                 })}>
//                 Pricing
//                 </Link>
//                 </>
//                 </div>
//             </MaxWidthWrapper>
//         </nav>
//     )
// }
// export default Navbar

import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
    <MaxWidthWrapper>
    <div className="flex h-14 items-center justify-between border-b border-zinc-200">
        <Link href="/" className="flex z-40 font-semibold">
            <span>E-Nyay Vault</span>
        </Link>
        <div className="flex items-center space-x-4 sm:flex justify-end"> 
        <Link
            href="/pricing"
            className={buttonVariants({
                variant: "ghost",
                size: "sm",
            })}
        >
            Pricing
        </Link>
        <Link
            href="/login"
            className={`${buttonVariants({
                variant: "ghost",
                size: "sm",
              })} text-white bg-blue-700 hover:bg-blue-600`} // Add blue background color
            >
                LogIn
        </Link>

        <Link
        href="/signup"
        className={`${buttonVariants({
            variant: "ghost",
            size: "sm",
        })} text-white bg-black hover:bg-gray-700`} // Add blue background color
        >
            Get Started{' '}
            <ArrowRight className='ml-1.5 h-5 w-5' />
        </Link>
        </div>
        
    </div>
        
    </MaxWidthWrapper>
    </nav>
);
};

export default Navbar;


