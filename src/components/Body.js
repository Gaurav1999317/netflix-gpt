import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Body=()=>{
    const dispatch= useDispatch();


    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }

    ]);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                //user is already logged in or signed up
                const {uid,email,displayName,photoURL}=user;
                dispatch(addUser({
                    email:email,
                    uid:uid,
                    displayName:displayName,
                    photoURL:photoURL
                }));
            }
            else{
                dispatch(removeUser());
            }
        })
    },[])
    return(
        <div>
            <RouterProvider router={appRouter}/>
         </div>
    )
}
export default Body;