"use client";
export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-green-600 h-screen w-screen items-center justify-center">
        {children}
      </body>
    </html>
  );
}
