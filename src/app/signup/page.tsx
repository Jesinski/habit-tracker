"use client";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { BaseSyntheticEvent, useEffect, useState } from "react";

type LoginFormData = {
  email: HTMLInputElement;
  password: HTMLInputElement;
};
export default function Page() {
  const [error, setError] = useState<boolean>(false);
  const { push } = useRouter();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const checkIfUserIsLogged = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        push("/");
      }
    };
    checkIfUserIsLogged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignUp = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const formData = e.target.elements as LoginFormData;

    try {
      const newUser = await supabase.auth.signUp({
        email: formData.email.value,
        password: formData.password.value,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      push("/"); // Should redirect to page asking to confirm email
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
      <h1> Health Tracker </h1>
      <h2> Sign Up </h2>
      <form className="w-[50vw] flex flex-col gap-3" onSubmit={handleSignUp}>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input name="email" className="pl-1" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Senha</label>
          <input name="password" type="password" className="pl-1" />
        </div>

        <span hidden={!error} className="text-red-600 self-center">
          An Issue Occurred! Damn!
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
