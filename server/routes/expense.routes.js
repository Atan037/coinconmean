const express = require("express");
const expenseController = require("../controller/expense.controller");
const cors = require("cors");

const router = express.Router();

router.get("/expenses", cors(), expenseController.getExpenses);
router.get("/expenses/:id", cors(), expenseController.getExpense);
router.post("/expenses", cors(), expenseController.createExpense);
router.put("/expenses/:id", cors(), expenseController.updateExpense);
router.delete("/expenses/:id", cors(), expenseController.deleteExpense);

module.exports = router;
