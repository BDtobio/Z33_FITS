// src/config/NavConfig.ts

export interface NavItem {
  text: string;
  path: string;
  auth?: "public" | "private" | "hiddenWhenAuth";
  role?: "admin" | "user" | "all";
}

export const navConfig: NavItem[] = [
  // ==== USUARIO NORMAL ====
  { text: "Home", path: "/home", auth: "public", role: "user" },
  { text: "Contact", path: "/contact", auth: "public", role: "user" },
  { text: "InfoPay", path: "/infoPay", auth: "public", role: "user" },

  // ==== VISTAS QUE USAN ADMIN Y USER ====
  { text: "Hombre", path: "/hombre", auth: "public", role: "all" },
  { text: "Mujer", path: "/mujer", auth: "public", role: "all" },
  { text: "Drops", path: "/drops", auth: "public", role: "all" },

  // ==== LOGIN/REGISTER ====
  { text: "Iniciar Sesion", path: "/auth/login", auth: "hiddenWhenAuth", role: "user" },
  { text: "Crear Cuenta", path: "/auth/register", auth: "hiddenWhenAuth", role: "user" },

  // ==== ADMIN PANEL ====
  { text: "Admin", path: "/admin", auth: "private", role: "admin" },
];
