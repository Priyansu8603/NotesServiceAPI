const express = require("express");
const noteRouter = express.Router();
const {getNote,createNote,updateNote,deleteNote} = require("../Controllers/noteController");
const auth = require("../Middleware/auth");

noteRouter.get("/",auth, getNote);

noteRouter.post("/",auth,createNote );

noteRouter.delete("/:id",auth,deleteNote);

noteRouter.put("/:id",auth,updateNote);

module.exports = noteRouter;