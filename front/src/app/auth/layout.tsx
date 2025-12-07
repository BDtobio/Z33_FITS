export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md bg-white text-black p-10 rounded-xl shadow-xl">
        {children}
      </div>
    </main>
  );
}
