import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CatalogPageView from "./CatalogPageView";

const CatalogPage = ({ $expanded }) => {
  const navigate = useNavigate();
  const all = {
    coffee: [{ name: "Americano", price: "€2.50", size: "Medium" }, { name: "Latte", price: "€3.00", size: "Large" }],
    teas: [{ name: "Green Tea", price: "€2.20", size: "Small" }],
    food: [{ name: "Ham Sandwich", price: "€4.50" }],
  };
  const [tab, setTab] = useState("all"), [items, setItems] = useState(all);
  const [showItem, setShowItem] = useState(false), [showCat, setShowCat] = useState(false);
  const [newItem, setNew] = useState({ name: "", price: "", category: "coffee", description: "", size: "" });
  const [edit, setEdit] = useState(false), [target, setTarget] = useState({ category: "", index: -1 });
  const [toast, setToast] = useState({ show: false, msg: "", type: "" });

  const toastMsg = (msg, type = "info") => {
    setToast({ show: true, msg, type });
    setTimeout(() => setToast({ show: false, msg: "", type: "" }), 3000);
  };

  const del = (cat, i) => setItems(it => ({ ...it, [cat]: it[cat].filter((_, x) => x !== i) }));

  const save = () => {
    if (!newItem.name || !newItem.price || !newItem.category ||
      ((["coffee", "teas"].includes(newItem.category)) && !newItem.size))
      return toastMsg("Please fill all required fields!", "error");
    const u = { ...items };
    const price = newItem.price.includes("€") ? newItem.price : `€${newItem.price.trim()}`;
    if (edit) {
      u[target.category][target.index] = { ...newItem, price };
      toastMsg("Product updated successfully!", "success");
    } else {
      u[newItem.category] = [...u[newItem.category], { ...newItem, price }];
      toastMsg("Product added successfully!", "success");
    }
    setItems(u); setShowItem(false); setNew({ name: "", price: "", category: "coffee", description: "", size: "" });
    setEdit(false); setTarget({ category: "", index: -1 });
  };

  const editItem = (cat, i) => {
    const item = items[cat][i];
    setNew({ name: item.name, price: item.price, category: cat, description: item.description || "", size: item.size || "" });
    setEdit(true); setTarget({ category: cat, index: i }); setShowItem(true);
  };

  const add = () => {
    setNew({ name: "", price: "", category: "coffee", description: "", size: "" });
    setEdit(false); setShowItem(true);
  };

  return (
    <>
      <CatalogPageView
        {...{ $expanded, activeTab: tab, setActiveTab: setTab, items, showItemModal: showItem, setShowItemModal: setShowItem,
          showCatalogModal: showCat, setShowCatalogModal: setShowCat, newItem, setNewItem: setNew, editMode: edit,
          handleSaveItem: save, handleDelete: del, openEditModal: editItem, openAddModal: add, navigate }}
      />
      {toast.show && (
        <div style={{
          position: "fixed", bottom: 25, right: 25, background: toast.type === "error" ? "#d32f2f" :
            toast.type === "success" ? "#388e3c" : "#333", color: "#fff", padding: "14px 22px",
          borderRadius: 10, fontWeight: 600, fontSize: 14, boxShadow: "0 3px 8px rgba(0,0,0,0.2)", zIndex: 2000,
          transition: "all 0.3s ease", animation: "slideIn 0.3s ease"
        }}>{toast.msg}</div>
      )}
    </>
  );
}

export default CatalogPage;
