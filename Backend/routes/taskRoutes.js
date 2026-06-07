import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  toggleTaskStatus,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/", protect, createTask);

router.get("/", protect, getTasks);

router.put("/:id", protect, updateTask);

router.delete("/:id", protect, deleteTask);

router.patch(
  "/:id/status",
  protect,
  toggleTaskStatus
);

export default router;