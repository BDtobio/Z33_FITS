// src/config/NavConfig.ts

export interface NavItem {
  text: string;
  path: string;
  auth?: "public" | "private" | "hiddenWhenAuth"; 
  role?: "admin" | "user";
}

export const navConfig: NavItem[] = [
  { text: "Home", path: "/home", auth: "public" },
  { text: "Hombre", path: "/hombre", auth: "public" },
  { text: "Mujer", path: "/mujer", auth: "public" },
  { text: "Drops", path: "/drops", auth: "public" },
  { text: "Contact", path: "/contact", auth: "public" },
  { text: "InfoPay", path: "/infoPay", auth: "public" },

  // Visible solo si NO está logueado
  { text: "Iniciar Sesion", path: "/auth/login", auth: "hiddenWhenAuth" },
  { text: "Crear Cuenta", path: "/auth/register", auth: "hiddenWhenAuth" },

  // Panel Admin solo si user.role === "admin"
  { text: "Admin", path: "/admin", auth: "private", role: "admin" },
];
