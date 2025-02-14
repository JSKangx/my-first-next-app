export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Admin Page 헤더</h1>
      {children}
    </>
  );
}
