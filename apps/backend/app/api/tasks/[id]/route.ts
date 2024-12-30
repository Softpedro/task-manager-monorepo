import { withCORS } from "@/app/utils/cors";
import { NextRequest, NextResponse } from "next/server";

// Simulación de tareas en memoria (reutilizado)
let tasks = [
  { id: 1, title: "Task 1", description: "Description 1", status: "todo" },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    status: "in-progress"
  },
  { id: 3, title: "Task 3", description: "Description 3", status: "completed" }
];

// Manejo de solicitudes GET para obtener una tarea específica
export async function GET(req: NextRequest) {
  const id = Number(req.url.split("/").pop());

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return withCORS(
      NextResponse.json({ error: "Task not found" }, { status: 404 })
    );
  }

  return withCORS(NextResponse.json(task));
}

// Manejo de solicitudes PUT para actualizar una tarea específica
export async function PUT(req: NextRequest) {
  try {
    const id = Number(req.url.split("/").pop()); // Extraer el ID de la URL
    const updates = await req.json();

    if (!id || !updates) {
      return withCORS(
        NextResponse.json(
          { error: "Task ID and updates are required" },
          { status: 400 }
        )
      );
    }

    let taskFound = false;

    tasks = tasks.map((task) => {
      if (task.id === id) {
        taskFound = true;
        return { ...task, ...updates };
      }
      return task;
    });

    if (!taskFound) {
      return withCORS(
        NextResponse.json({ error: "Task not found" }, { status: 404 })
      );
    }

    return withCORS(
      NextResponse.json(
        { message: "Task updated successfully" },
        { status: 200 }
      )
    );
  } catch (error) {
    console.error("Error processing PUT request:", error);
    return withCORS(
      NextResponse.json({ error: "Invalid request" }, { status: 400 })
    );
  }
}

// Manejo de solicitudes DELETE para eliminar una tarea específica
export async function DELETE(req: NextRequest) {
  const id = Number(req.url.split("/").pop());

  const initialLength = tasks.length;
  tasks = tasks.filter((task) => task.id !== id);

  if (tasks.length === initialLength) {
    return withCORS(
      NextResponse.json({ error: "Task not found" }, { status: 404 })
    );
  }

  return withCORS(
    NextResponse.json({ message: "Task deleted successfully" }, { status: 200 })
  );
}

// Manejo de solicitudes OPTIONS para preflight CORS
export async function OPTIONS() {
  return withCORS(new NextResponse(null, { status: 204 }));
}
