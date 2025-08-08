"use client";

import React, { useState } from "react";
import { login } from "@/services/api";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import {isValidPassword} from "@/utility/validationUtil";



type FormErrors = { username?: string; password?: string };


export default function LoginPage() {
    const [form, setForm] = useState({ username: "", password: "" });
    const router = useRouter();

    //for validation input
//    const [errors,setErrors] = useState<{username?:string;password?:string}>({});
    const [errors,setErrors] = useState<FormErrors>({});
    const validationForm = () => {
   //     const newError:any = {};
      //  const newError:{username?:string;password?:string} ={};
        const newError: FormErrors ={};

        if (!form.username.trim()) newError.username = "Username is required";
        if (!form.password)  newError.password = "Password is required";
        else if (!isValidPassword(form.password)) newError.password = "Password does not meet criteria";

        setErrors(newError);
        return Object.keys(newError).length === 0;
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validationForm()) return;
        const response = await login(form);
        const token = response.data.token;
        localStorage.setItem("jwt", token);
        router.push("/profile");
    };

    return (
        <Container>
            <div className="max-w-sm mx-auto mt-20 bg-white p-6 rounded shadow">
                <h1 className="text-xl mb-4 font-bold">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        placeholder="Username"
                        className="w-full p-2 border rounded"
                        value={form.username}
                        onChange={(e) => setForm({...form, username: e.target.value})}
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border rounded"
                        value={form.password}
                        onChange={(e) => setForm({...form, password: e.target.value})}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    <button className="bg-green-600 text-white w-full p-2 rounded">Login</button>
                </form>
            </div>
        </Container>
    );
}
