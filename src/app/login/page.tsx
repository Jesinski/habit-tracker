"use client";
import loginWithEmail from "@/lib/login";
import { BaseSyntheticEvent, useState } from "react";

type LoginFormData = {
  email: HTMLInputElement;
  password: HTMLInputElement;
};
export default function Page() {
  const [error, setError] = useState<boolean>(false);

  const signInWithEmail = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const formData = e.target.elements as LoginFormData;

    try {
      const loggedUser = await loginWithEmail(
        formData.email.value,
        formData.password.value
      );
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
      <h1> Health Tracker </h1>
      <h2> Login </h2>
      <form className="w-[50vw] flex flex-col gap-3" onSubmit={signInWithEmail}>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input id="email" className="pl-1" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" className="pl-1" />
        </div>

        <span hidden={!error} className="text-red-600 self-center">
          Invalid Credentials
        </span>

        <button
          onClick={() => setError(false)}
          type="submit"
          className=" bg-green-400 w-full hover:bg-green-700"
        >
          Sign In
        </button>
      </form>

      <span className="mt-3">
        Don&apos;t have an account yet?{" "}
        <a className=" text-green-800 underline" href="/signup">
          Sign Up Now
        </a>
      </span>
    </>
  );
}
