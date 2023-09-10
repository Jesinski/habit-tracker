"use client";
import { Database } from "@/types/database-generated.types";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { BaseSyntheticEvent, useEffect, useState } from "react";

type LoginFormData = {
  email: HTMLInputElement;
  password: HTMLInputElement;
};
export default function Page() {
  const [error, setError] = useState<boolean>(false);
  const { push } = useRouter();
  const supabase = createBrowserSupabaseClient<Database>();

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

  const signInWithEmail = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const formData = e.target.elements as LoginFormData;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email.value,
        password: formData.password.value,
      });
      if (!data || error) {
        throw new Error("Could not Login");
      }
      push("/");
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
          Sign In
        </button>
      </form>

      <div className="mt-3 w-full text-center flex flex-col">
        <span>Don&apos;t have an account yet? </span>
        <a className=" text-green-800 underline" href="/signup">
          Sign Up Now
        </a>
      </div>
    </>
  );
}
