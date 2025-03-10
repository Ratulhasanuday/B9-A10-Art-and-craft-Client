import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const { userLogIn, signInGoogle, signInFacebook, } = useContext(AuthContext);
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(<FaEyeSlash />);
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(<FaEye />);
            setType('text');
        } else {
            setIcon(<FaEyeSlash />);
            setType('password');
        }
    };
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        //email andpassword authentication
        userLogIn(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success('Login successfully!');
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            })
            .catch((error) => {
                console.error(error);

                toast.error('Invalid email or password!');
            });

    }
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        console.log('google login successfuly');

        signInGoogle()
            .then(result => {
                console.log(result.user);
                toast.success("Google Login Success!", { autoClose: 3000, position: "top-right" });
                setTimeout(() => {
                    navigate("/");
                }, 3000);

            })
            .catch(error => {
                console.error(error);
                toast.error("Google Login Failed!", { autoClose: 3000, position: "top-right" });
            }

            )
    }
    const handleFacebookLogin = (e) => {
        e.preventDefault();
        signInFacebook()
            .then(result => {
                console.log(result.user);
                toast.success("Facebook Login Success!", { autoClose: 3000, position: "top-right" });
                setTimeout(() => {
                    navigate("/");
                }, 3000);

            })
            .catch(error => {
                console.error(error);
                toast.error("Facebook Login Failed!", { autoClose: 3000, position: "top-right" });
            }

            )

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
                            <input name='email' type="email" placeholder="Enter your email" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="mb-4 flex">
                                <input
                                    type={type}
                                    name="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    className="input w-full input-bordered"
                                />
                                <span className="absolute right-8 p-2 text-xl cursor-pointer" onClick={handleToggle}>
                                    {icon}
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login " className='btn btn-primary w-full text-xl' />
                            <p className='text-lg text-center'>Don't have an account? Pleace <Link to='/signup' className='text-gray-500'>Register</Link></p>
                        </div>

                        <div className='text-center p-4'>
                            <h2 className='text-xl font-bold'>Login With</h2>
                            <button onClick={handleGoogleLogin} className='btn mt-4 mr-4 rounded-full text-2xl '> <FcGoogle className=" " /></button>

                            <button onClick={handleFacebookLogin} className='btn mt-4 ml-4 rounded-full text-2xl '>                     <FaFacebook className="" />
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Login;