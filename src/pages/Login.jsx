import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Shared/Navbar';

const Login = () => {
    const handleLoginSubmit = (e) => {

    }
    return (
        <>
        <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLoginSubmit} className="card-body">
                        <h1 className="text-5xl font-semibold text-center">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login " className='btn btn-primary w-full text-xl' />
                            <p className='text-lg text-center'>Don't have an account? Pleace <Link to='/signup' className='text-gray-500'>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;