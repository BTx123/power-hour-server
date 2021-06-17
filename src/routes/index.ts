import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send({ response: "Hello, World!" }).status(200);
});

export default router;
