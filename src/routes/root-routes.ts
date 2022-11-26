import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
  response.send("<h1>Road runner app is running...</h1>");
});

export default router;
