import { Router } from "express";
import { getTestAnswer } from "./response.controller";

const responseRouter = Router();

responseRouter.get('/api/response/test_answer/:formId/:questionId/:answer', getTestAnswer)


export default responseRouter;