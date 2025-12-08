"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAdmin = () => {
  const { isAdmin, loading } = useAuth();
  const router = useRouter();

  // Redirige si NO es admin
  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push("/login");
    }
  }, [loading, isAdmin, router]);

  return { isAdmin, loading };
};
