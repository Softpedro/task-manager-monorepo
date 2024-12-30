import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token"); // Leer el token desde las cookies

  // Si no hay token y no estamos en la página de login, redirigir al login
  if (!token && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Si el usuario intenta acceder a la página de login estando autenticado, redirigir
  if (token && req.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/tasks", req.url));
  }

  return NextResponse.next();
}

// Configurar el middleware para que se aplique a rutas específicas
export const config = {
  matcher: ["/tasks/:path*", "/login"] // Proteger /tasks y redirigir en /login
};
