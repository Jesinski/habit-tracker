"use client";
import signUpWithEmail from "@/lib/signup";
import { BaseSyntheticEvent, useState } from "react";

type LoginFormData = {
  email: HTMLInputElement;
  password: HTMLInputElement;
};
export default function Page() {
  const [error, setError] = useState<boolean>(false);

  const signUp = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const formData = e.target.elements as LoginFormData;

    try {
      const newUser = await signUpWithEmail(
        formData.email.value,
        formData.password.value
      );
      console.log(newUser);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
      <h1> Health Tracker </h1>
      <h2> Sign Up </h2>
      <form className="w-[50vw] flex flex-col gap-3" onSubmit={signUp}>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input name="email" className="pl-1" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Senha</label>
          <input name="password" type="password" className="pl-1" />
        </div>

        <span hidden={!error} className="text-red-600 self-center">
          Invalid Credentials
        </span>

        <button
          onClick={() => setError(false)}
          type="submit"
          className=" bg-green-400 w-full hover:bg-green-700"
        >
          Sign Up
        </button>

        <div className="mt-3 w-full text-center flex flex-col">
          <span>Have an account?</span>
          <a className=" text-green-800 underline" href="/login">
            Sign In Now
          </a>
        </div>
      </form>
    </>
  );
}
