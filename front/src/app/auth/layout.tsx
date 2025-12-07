export default function AuthRegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      {children}
    </div>
  );
}
