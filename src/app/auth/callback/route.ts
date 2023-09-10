import { Database } from "@/types/database-generated.types";
import { createRouteHandlerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createRouteHandlerSupabaseClient<Database>({
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      headers: headers,
      cookies: cookies,
    });
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(requestUrl.origin);
}
