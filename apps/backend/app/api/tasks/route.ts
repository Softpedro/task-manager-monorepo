import { withCORS } from "@/app/utils/cors";
import { NextRequest, NextResponse } from "next/server";

// Simulación de tareas en memoria
const tasks = [
  { id: 1, title: "Task 1", description: "Description 1", status: "todo" },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    status: "in-progress"
  },
  { id: 3, title: "Task 3", description: "Description 3", status: "completed" }
];

// Manejo de solicitudes GET para listar todas las tareas
export async function GET() {
  return withCORS(NextResponse.json(tasks));
}

// Manejo de solicitudes POST para crear una nueva tarea
export async function POST(req: NextRequest) {
  try {
    const { title, description, status } = await req.json();

    if (!title || !description || !status) {
      return withCORS(
        NextResponse.json({ error: "Missing fields" }, { status: 400 })
      );
    }

    const newTask = { id: Date.now(), title, description, status };
    tasks.push(newTask);

    return withCORS(NextResponse.json(newTask, { status: 201 }));
  } catch (error) {
    return withCORS(
      NextResponse.json(
        { error: error instanceof Error ? error.message : "Invalid request" },
        { status: 400 }
      )
    );
  }
}

// Manejo de solicitudes OPTIONS para preflight CORS
export async function OPTIONS() {
  return withCORS(new NextResponse(null, { status: 204 }));
}
