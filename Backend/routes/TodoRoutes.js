const { Router } = require("express");
const {
    getToDos,
    saveToDos,
    updateToDo,
    deleteToDo,
} = require("../controller/TodoController");
const router = Router();

router.get("/get", getToDos);
router.post("/save", saveToDos);
router.put("/update/:id", updateToDo);
router.delete("/delete/:id", deleteToDo);

module.exports = router;
