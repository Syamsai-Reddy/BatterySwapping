import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("signed out successful");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            {authUser ? (
                <>
                    <p>{`Signed In as ${authUser.email}`}</p>
                    <button
                        className="bg-green-400 w-20 m-5 p-2  rounded-lg"
                        onClick={userSignOut}
                    >
                        Sign Out
                    </button>
                </>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    );
};

export default AuthDetails;
