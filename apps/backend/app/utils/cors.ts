import { NextResponse } from "next/server";

export function withCORS(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", "http://localhost:3001");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
