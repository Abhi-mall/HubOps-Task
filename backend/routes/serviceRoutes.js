import { Router } from "express";
import { getServices } from "../Controllers/serviceController.js";

const serviceRouter = Router();

serviceRouter.get("/", getServices)

export default serviceRouter
