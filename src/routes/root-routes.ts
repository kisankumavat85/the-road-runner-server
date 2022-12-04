import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
  response.send(
    "<div><h1>Road runner app is running...</h1><h2>Developed By Kisan Kumavat</h2></div>"
  );
});

export default router;
