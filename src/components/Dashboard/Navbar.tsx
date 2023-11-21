import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { buttonVariants } from "../ui/button";
import { ArrowRight, BellRing, UserCircle2 } from "lucide-react";
import '/Users/ayush/Desktop/sih/src/app/globals.css'
const Navbar =()=>{
    return(
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
    <MaxWidthWrapper>
    <div className="flex h-14 items-center justify-between border-b border-zinc-200">
        <Link href="/" className="flex z-40 font-semibold">
            <span>E-Nyay Vault</span>
        </Link>
        <div className="flex items-center space-x-4 sm:flex justify-end"> 
        <Link
            href="/notification"
            className={`${buttonVariants({
                variant: "ghost",
                size: "sm",
            })} text-yellow-600`}
        >
            <BellRing />
        </Link>
        <Link
            href="/profile"
            className={`${buttonVariants({
                variant: "ghost",
                size: "sm",
              })} text-black rounded-full`} // Add blue background color
            >
                <UserCircle2 />
        </Link>

        <Link
        href="/signout"
        className={`${buttonVariants({
            variant: "ghost",
            size: "sm",
        })} text-white bg-black hover:bg-gray-700`} // Add blue background color
        >
            SignOut{' '}
            <ArrowRight className='ml-1.5 h-5 w-5' />
        </Link>
        </div>
        
    </div>
        
    </MaxWidthWrapper>
    </nav>








    );
}

export default Navbar