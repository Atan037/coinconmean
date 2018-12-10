const express = require("express");
const expenseController = require("../controller/expense.controller");
const cors = require("cors");

const router = express.Router();

router.get("/expenses", expenseController.getExpenses);
router.get("/expenses/:id", expenseController.getExpense);
router.post("/expenses", expenseController.createExpense);
router.put("/expenses/:id", expenseController.updateExpense);
router.delete("/expenses/:id", expenseController.deleteExpense);

module.exports = router;
