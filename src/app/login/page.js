import Form from '@/components/login-form'

import { SignupFormSchema } from '../lib/definition'
import Link from 'next/link'
const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-cyan-100'>
        <div>
            <div className='mb-4 text-center'>
                <h1 className='font-semibold text-xl'>Login to your account</h1>
                <p className='text-slate-800 text-opacity-50 text-sm'>Enter your information to get started</p>
            </div>
            <Form />
            <div className='text-sm my-1 text-center'>
                Don't you have an account?
                <Link href="/signup">
                    <p className='underline inline ml-2'>Signup</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login