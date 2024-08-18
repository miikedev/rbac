import Form from '@/components/signup-form'

import { SignupFormSchema } from '../lib/definition'
import Link from 'next/link'

const Signup = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-cyan-100'>
        <div className=''>
            <div className='mb-4 text-center'>
                <h1 className='font-semibold text-xl'>Create an account</h1>
                <p className='text-slate-800 text-opacity-50 text-sm'>Enter your information to get started</p>
            </div>
            <Form />
            <div className='text-sm my-1 text-center'>
                Already have an account?
                <Link href="/login">
                    <p className='underline inline ml-2'>Login</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Signup