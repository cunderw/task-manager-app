import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post("/tasks", async (req, res) => {
  const { title, description, deadline } = req.body;
  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        deadline: new Date(deadline),
      },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, deadline, completed } = req.body;
  try {
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        deadline: new Date(deadline),
        completed,
      },
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({
      where: { id: Number(id) },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

const PORT = process.env.PORT || 3080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
