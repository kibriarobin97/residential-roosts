import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UserProfile = () => {

    const { user } = useContext(AuthContext)

    console.log(user)

    const { displayName, photoURL, email } = user;

    return (
        <div className="flex flex-col justify-center max-w-md w-full mx-auto my-5 p-6 shadow-md rounded-xl sm:px-12  text-black">
            <img src={photoURL} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
            <div className="space-y-4 text-center divide-y divide-gray-700">
                <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl">User Name: <span className="font-medium text-gray-500 text-xl">
                    {displayName}    
                    </span></h2>
                    <p className="text-xl font-semibold sm:text-2xl">User Email: <span className="font-medium text-gray-500 text-xl">{email}</span></p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;