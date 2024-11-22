import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
    const emailRef = useRef();
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            toast.error("Please provide a valid email address")
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.info("Reset email sent!")
            })
        }
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Forget Password</h2>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                    </div>
                    <label onClick={handleResetPassword} className="label">
                        <Link className="label-text-alt link link-hover">Reset password?</Link>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;