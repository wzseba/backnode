import { Router } from "express";
import { ejemControl } from "../controllers/ejemplo.controller.js";

const router = Router();

router.get("/", ejemControl);

export default router;
