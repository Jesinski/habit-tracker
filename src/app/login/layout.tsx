"use client";
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen w-screen items-center justify-center">
        {children}
      </body>
    </html>
  );
}
