import {Router} from "express";

const v1 = Router();

v1.get("/songs/search", (_, res) => {
  return res.status(200).send({
    message: "All good!"
  });
});

export default v1;
