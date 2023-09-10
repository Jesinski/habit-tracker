import Footer from "@/components/Footer";

export default function GoalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
