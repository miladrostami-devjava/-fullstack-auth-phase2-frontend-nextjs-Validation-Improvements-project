"use client";

import React, { useState } from "react";
import { register } from "@/services/api";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import {isValidEmail} from "@/utility/validationUtil";
import {isValidPassword} from "@/utility/validationUtil";


type FormErrorsRegister = { username?: string; password?: string;email:string };
export default function RegisterPage() {




    const [form, setForm] = useState({
        username: "",
        password: "",
        email: ""   // ✅ اضافه کردن مقدار اولیه ایمیل

    });


    const [errors,setErrors] = useState<FormErrorsRegister>({email: "", password: "", username: ""});
    const validationForm = () => {

        const newError: FormErrorsRegister ={email: "", password: "", username: ""};

        if (!form.username.trim()) newError.username = "Username is required";
        if (!form.email.trim()) newError.email = "Email is required";
        else if (!isValidEmail(form.email)) newError.email = "Email format is invalid";
        if (!form.password)  newError.password = "Password is required";
        else if (!isValidPassword(form.password)) newError.password = "Password does not meet criteria";

        setErrors(newError);
      //  return Object.keys(newError).length === 0;
        // چک کردن اینکه همه خطاها خالی هستند یا نه:
        // const isValid = Object.values(newError).every(value => value === "");
        // return isValid;
       // return Object.values(newError).every(value => value === "");

        // Object.keys(...) تعداد کلیدها را می‌دهد، اما ما به تعداد خطاها باید توجه کنیم
        // بهتر این است شرط return این باشد که هیچ اروری نباشد:
        return !newError.username && !newError.email && !newError.password;
    };


    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validationForm()){
            console.log("Validation failed", errors);
            return;
        }
        try {
            await register(form);
            router.push("/login");
        } catch (error) {
            console.error("Registration failed:", error);
            alert("Registration failed. See console for details.");
        }
    };

    return (
        <Container>
            <div className="max-w-sm mx-auto mt-20 bg-white p-6 rounded shadow">
                <h1 className="text-xl mb-4 font-bold">Register</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        placeholder="Username"
                        className="w-full p-2 border rounded"
                        value={form.username}
                        onChange={(e) => setForm({...form, username: e.target.value})}
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border rounded"
                        value={form.password}
                        onChange={(e) => setForm({...form, password: e.target.value})}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                    <button className="bg-blue-600 text-white w-full p-2 rounded">
                        Register
                    </button>
                </form>
            </div>
        </Container>
    );
}
