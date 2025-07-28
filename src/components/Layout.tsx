import React from "react";
import Navbar from "@/components/Navbar";


interface ILayoutProps{
    children:React.ReactNode;
}

export default function Layout({children}:ILayoutProps){

return(

    <>
    <Navbar/>
        {children}
    </>
);



}