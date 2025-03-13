import React, { useContext, useState } from 'react';
import Navbar from './Shared/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Font Awesome icons

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(<FaEyeSlash />); // Initial icon
    const navigate = useNavigate();

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');
        // Password validation
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long!');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must include at least one uppercase letter!');
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must include at least one lowercase letter!');
            return;
        }
        if (!/\d/.test(password)) {
            toast.error('Password must include at least one number!');
            return;
        }

        // Create the user
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success('Registration successful!');
                const user = { email, password, photo, name };

                // Send user data to your server
                fetch('https://unice-jute-wooden-crafts-server-gniwardfp.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        
                    },
                    body: JSON.stringify(user),
                })
                .then(res => res.json())
                .then(data => {
                    console.log('User added to the database', data);
                })
                .catch((error) => {
                    console.error('Error adding user to the database:', error);
                    toast.error('Error adding user to the database.');
                });

                setTimeout(() => {
                    navigate('/');
                }, 3000);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(<FaEye />); // Change to eye icon
            setType('text');
        } else {
            setIcon(<FaEyeSlash />); // Change to eye-slash icon
            setType('password');
        }
    };

    return (
        <>
            <Navbar />
            <div className="hero min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegisterSubmit} className="card-body">
                        <h1 className="md:text-4xl font-semibold text-center">Registration now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="abc@abc.abc" className="input w-full input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter your photo URL" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={type}
                                    name="password"
                                    placeholder="Aaaaaa1!"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    className="input w-full input-bordered"
                                />
                                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-xl cursor-pointer" onClick={handleToggle}>
                                    {icon}
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-primary w-full text-xl" />
                            <p className="text-lg text-center">
                                You have an account? Please <Link to="/login" className="text-gray-500">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default SignUp;
