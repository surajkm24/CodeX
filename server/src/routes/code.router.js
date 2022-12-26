import { Router } from "express";
import { executeCode } from "../controllers/code.controllers.js";

const app = Router();

app.post('/:lang', executeCode);

export default app;