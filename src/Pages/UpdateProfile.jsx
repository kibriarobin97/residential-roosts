import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {

    const navigate = useNavigate()

    const { updateUserProfile, user } = useContext(AuthContext)

    const {displayName, photoURL, email} = user

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')

        //create user
        updateUserProfile(name, photo)
            .then(() => {
                toast.success("Successfully Updated", { position: "top-center" })
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message, { position: "top-center" })
            })
    }

    return (
        <div className="max-w-md mx-auto min-h-[calc(100vh-341px)] p-8 space-y-3 rounded-xl text-black">
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center">Update Profile</h1>
            <form onSubmit={handleUpdate} className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block text-black">Name</label>
                    <input
                    defaultValue={displayName}
                    type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photo" className="block text-black">Photo URL</label>
                    <input 
                    defaultValue={photoURL}
                    type="text" name="photo" id="photo" placeholder="Your Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-black">Email</label>
                    <input
                    defaultValue={email}
                    type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                </div>
                <button className="block w-full p-3 text-center rounded-md font-bold bg-[#403F3F] text-white">Save</button>
            </form>

        </div>
    );
};

export default UpdateProfile;