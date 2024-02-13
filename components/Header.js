import {useSession} from 'next-auth/react'
import { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Header(){
  const {data: session, status} = useSession()
  const userEmail = session?.user?.email;
  const [isAunthenticated, SetisAunthenticated] = useState(false)

  useEffect(() => {
    if(status === 'authenticated'){
        SetisAunthenticated(true)
    }
  },[status])

    return(
        <>
        <div className=' flex flex-wrap items-center justify-between py-2 md:gap-0 relative'>
         <h1 className=' text-2xl font-bold text-blue-500'>
          futurebaby.ai
         </h1>
        </div>
        <header>
           <div className=" flex justify-end">
          { isAunthenticated ? (
            <>
            <div className=' mt-12 lg:mt-0'>
            <button>
            <Link href='/dashboard'> dashboard</Link>
            </button>
            </div>
            <div className=' mt-12 lg:-0 ml-2'>
            <button>
                <Link href='/api/auth/signout'>signout</Link>
            </button>
            </div>
            </>
          ): (
            <>
            <div className=' mt-12 lg:mt-0'>
            <button>
                <Link href='/api/auth/signin'> login</Link>
            </button>
            <div className=' mt-12 lg:mt-0 ml-2'>
            <button>
                <Link href='/api/auth/signin'> Get started</Link>
            </button>

            </div>
            </div>
            </>
          )}
           </div>
        </header>
        </>
    )
}