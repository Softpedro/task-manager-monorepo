import { withCORS } from "@/app/utils/cors";
import { NextRequest, NextResponse } from "next/server";

// Simulación de usuarios
const users = [
  { username: "admin", password: "password", token: "fake-jwt-token" }
];

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return withCORS(
      NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    );
  }

  return withCORS(NextResponse.json({ token: user.token }));
}

// Manejo de preflight CORS
export async function OPTIONS() {
  return withCORS(new NextResponse(null, { status: 204 }));
}
