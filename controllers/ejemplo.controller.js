import { request, response } from "express";

const ejemControl = (req = request, res = response) => {
  res.json({ msg: "ruta funcionando correctamente" });
};

export { ejemControl };
