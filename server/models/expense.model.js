const mongoose = require("../db");

const ExpenseSchema = mongoose.Schema({
  amount: { type: Number, requiered: true },
  category: { type: String, requiered: true },
  subCategory: { type: String, requiered: true },
  expenseDescription: { type: String, requiered: true },
  paymentMethod: { type: String, requiered: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Expense", ExpenseSchema);
