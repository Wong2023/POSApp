import React, { useState, useEffect } from "react";
import {
  PageWrapper, Header, Title, AddButton, ExpenseForm, Input, SaveButton,
  ExpenseList, ExpenseItem, ExpenseInfo, DeleteButton, EditButton,
  ActionButtons, Toast, TopBar, DatePickerStyled, SearchInput, SummaryBar,
} from "../styles/ExpensesStyles";

export default function ExpensesPage({ expanded }) {
  const [expenses, setExpenses] = useState(() =>
    JSON.parse(localStorage.getItem("expenses") || "[]")
  );
  const [form, setForm] = useState({ name: "", quantity: "", price: "" });
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "", type: "error" });
  const [selectedDate, setSelectedDate] = useState(""), [search, setSearch] = useState("");

  useEffect(() => localStorage.setItem("expenses", JSON.stringify(expenses)), [expenses]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if ((name === "price" || name === "quantity") && value !== "")
      value = value.replace(/[^0-9.]/g, "");
    setForm({ ...form, [name]: value });
  };

  const showToast = (msg, type = "error") => {
    setToast({ show: true, message: msg, type });
    setTimeout(() => setToast({ show: false, message: "", type }), 3000);
  };

  const saveExpense = () => {
    if (!form.name || !form.price || !form.quantity)
      return showToast("Please fill all fields!");
    if (editId) {
      setExpenses(expenses.map((e) =>
        e.id === editId ? { ...form, id: e.id, date: e.date } : e
      ));
      showToast("Expense updated successfully!", "success");
    } else {
      const exp = { ...form, id: Date.now(), date: new Date().toLocaleDateString("en-CA") };
      setExpenses([exp, ...expenses]);
      showToast("Expense added successfully!", "success");
    }
    setForm({ name: "", quantity: "", price: "" });
    setEditId(null);
    setShowForm(false);
  };

  const deleteExpense = (id) => setExpenses(expenses.filter((e) => e.id !== id));
  const startEdit = (e) => {
    setForm({ name: e.name, quantity: e.quantity, price: e.price });
    setEditId(e.id);
    setShowForm(true);
  };

  const filtered = expenses.filter((e) => {
    const byDate = selectedDate ? e.date === selectedDate : true;
    const bySearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.date.includes(search);
    return byDate && bySearch;
  });

  const total = filtered.reduce(
    (sum, e) => sum + parseFloat(e.price || 0) * parseFloat(e.quantity || 1),
    0
  );

  return (
    <PageWrapper expanded={expanded}>
      <Header>
        <Title>Expenses</Title>
        <AddButton onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "+ Add Expense"}
        </AddButton>
      </Header>

      <TopBar>
        <DatePickerStyled type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
        <SearchInput placeholder="Search by name or date..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </TopBar>

      {showForm && (
        <ExpenseForm>
          {["name", "quantity", "price"].map((f) => (
            <Input key={f} name={f} placeholder={f === "name" ? "Product name" : f === "quantity" ? "Quantity" : "Price (€)"} value={form[f]} onChange={handleChange} />
          ))}
          <SaveButton onClick={saveExpense}>{editId ? "Update" : "Save"}</SaveButton>
        </ExpenseForm>
      )}

      <ExpenseList>
        {filtered.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filtered.map((e) => (
            <ExpenseItem key={e.id}>
              <ExpenseInfo>
                <span><b>{e.name}</b></span>
                <span>Qty: {e.quantity}</span>
                <span>Price: €{e.price}</span>
                <span>Date: {e.date}</span>
              </ExpenseInfo>
              <ActionButtons>
                <EditButton onClick={() => startEdit(e)}>Edit</EditButton>
                <DeleteButton onClick={() => deleteExpense(e.id)}>Delete</DeleteButton>
              </ActionButtons>
            </ExpenseItem>
          ))
        )}
      </ExpenseList>

      {selectedDate && filtered.length > 0 && (
        <SummaryBar>Total for {selectedDate}: <b>€{total.toFixed(2)}</b></SummaryBar>
      )}

      <Toast show={toast.show} type={toast.type}>{toast.message}</Toast>
    </PageWrapper>
  );
}
