"use client";

import { useEffect } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    console.log("렌더링시 실행됩니다.");
  }, []);

  return (
    <>
      <h1>Admin Page 헤더</h1>
      {children}
    </>
  );
}
