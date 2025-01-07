"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{message}</h1>
    </div>
  );
}
