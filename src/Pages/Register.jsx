import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="w-full max-w-md mx-auto min-h-[calc(100vh-341px)] p-8 space-y-3 rounded-xl text-black">
            <h1 className="text-2xl font-bold text-center">Please Register</h1>
            <p className="text-sm text-center text-gray-500">Register to create your account</p>
            <form noValidate="" action="" className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block text-black">Name</label>
                    <input type="text" name="name" id="name" required placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-700  text-gray-100 focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photo" className="block text-black">Photo URL</label>
                    <input type="text" name="photo" id="photo" placeholder="Your Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700  text-gray-100 focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-black">Email</label>
                    <input type="email" name="email" id="email" required placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-700  text-gray-100 focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-black">Password</label>
                    <input type="password" name="password" id="password" required placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-100 focus:border-violet-400" />
                </div>
                <button className="block w-full p-3 text-center rounded-md font-bold bg-[#403F3F] text-white">Register</button>
            </form>
            <p className="text-xs text-center sm:px-6 text-black">Already have an account?
                <Link to='/login' className="underline text-primary"> Login</Link>
            </p>
        </div>
    );
};

export default Register;