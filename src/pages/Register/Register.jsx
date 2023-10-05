import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        //create user
        createUser(email, password)
        .then(result=>{
            console.log(result.user);

        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <main className="">
                <section className=" bg-gradient-to-r from-slate-300 via-blue-500 to-blue-700 w-full mx-auto mt-12 text-center p-8">
                    <form className="mt-10 mb-4 md:w-3/4 lg:w-1/2 mx-auto shadow-lg rounded-2xl" onSubmit={handleRegister}>
                        <h3 className="text-3xl text-white italic mb-6 font-medium ">Welcome to your <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative inline-block"><span className="relative text-white">Register-Page</span></span></h3>

                        <div className="space-y-5">
                            <input className="w-9/12 h-10 px-3  rounded-md" type="name" name="name" placeholder="Your Name " />
                            <input className="w-9/12 h-10 px-3  rounded-md" type="text" name="photo" placeholder="Your Photo URL" />
                            <input className="w-9/12 h-10 px-3  rounded-md" type="email" name="email" placeholder="Your Email Address" />
                            <input className="w-9/12 h-10 px-3  rounded-md" type="password" name="password" placeholder="Your password " />
                            <div className="flex items-center justify-center gap-5  pb-4">
                                <button id="btn-submit" className="bg-gray-50 hover:bg-sky-100  px-8 py-2 font-medium rounded-lg  " >Register</button>
                                <Link to="/login">
                                    <button id="btn-submit" className="bg-gray-50 hover:bg-sky-100  px-8 py-2 font-medium rounded-lg  " >Login</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                    <p>Already have an account <sup className="text-2xl text-white">↑</sup> click there</p>
                </section>
            </main>
        </div>
    );
};

export default Register;