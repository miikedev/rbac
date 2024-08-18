"use client"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useRouter, usePathname } from "next/navigation"
import React from 'react'
const DashbaordSidebar = ({children}) => {
    const pathname = usePathname();
    const router = useRouter();
    const buttonClass = `p-2 border rounded-md border-white text-white z-10 hover:bg-cyan-500 min-w-[200px] active:bg-cyan-600`
    const handleLogout = () => {
        router.push('/login')
    }
  return (
    <div className='h-screen flex bg-cyan-200'>
    <div className='min-w-[200px] lg:w-[300px] py-3 w-[100px] h-screen bg-black p-3 flex flex-col'>
        <h1 className='text-white font-semibold text-center mt-3 underline'>Teehtwin</h1>
        <div className='w-full mx-auto h-100 flex flex-col gap-y-2 my-2 items-center mt-10'>
            <Link href="/dashboard/order">
                <button className={pathname == '/dashboard/order' ? buttonClass+" bg-cyan-500" : buttonClass}>
                    Orders
                </button>
            </Link>
            <Link href="/dashboard/user">
                <button className={pathname == '/dashboard/user' ? buttonClass+" bg-cyan-500" : buttonClass}>
                    Users
                </button>
            </Link>
            <Link href="/dashboard/product">
                <button className={pathname == '/dashboard/product' ? buttonClass+" bg-cyan-500" : buttonClass}>
                    Products
                </button>
            </Link>
            <Link href="/dashboard/best-sellers">
                <button className={pathname == '/dashboard/best-sellers' ? buttonClass+" bg-cyan-500" : buttonClass}>
                    Best Sellers
                </button>
            </Link>
        </div>
        

        <AlertDialog >
        <AlertDialogTrigger asChild>
          <Button className="absolute bottom-0 left-[45px] min-w-[170px] my-3 border active:bg-red-900 hover:bg-red-800 rounded-md border-white text-white z-10">Logout</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[300px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-semibold text-md text-center">Do you want to logout?</AlertDialogTitle>
            {/* <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription> */}
          </AlertDialogHeader>
          <AlertDialogFooter className="mx-auto flex justify-between">

            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>Continue</AlertDialogAction>

          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>    
    </div>
    {children}
    </div>
  )
}

export default DashbaordSidebar