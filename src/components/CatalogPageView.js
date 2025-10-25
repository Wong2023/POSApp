import React from "react";
import {
  CatalogContainer, Header, Title, Tabs, TabButton, Actions, AddButton,
  OrderButton, CatalogList, CatalogItem, ItemName, ItemActions,
  ModalOverlay, ModalContent, ModalHeader, ModalForm, Input, Textarea,
  ModalActions, SaveButton, CancelButton, CloseButton,
} from "../styles/CatalogStyles";

export default function CatalogPageView({
  expanded, activeTab, setActiveTab, items,
  showItemModal, setShowItemModal, showCatalogModal, setShowCatalogModal,
  newItem, setNewItem, editMode, handleSaveItem, handleDelete,
  openEditModal, openAddModal, navigate
}) {
  const render = () => {
    const arr = [];
    const cats = activeTab === "all" ? Object.keys(items) : [activeTab];
    cats.forEach(cat => {
      arr.push(<h4 key={cat} style={{ color: "#c77c7c", marginTop: 15 }}>{cat.toUpperCase()}</h4>);
      items[cat].forEach((it, i) => arr.push(
        <CatalogItem key={cat + i}>
          <ItemName>
            <span style={{ color: "#b22222", fontWeight: 600 }}>{it.name}</span> / {it.description || "No description"}
            {it.size ? `/ Size: ${it.size}` : ""} / ({cat}) / {it.price}
          </ItemName>
          <ItemActions>
            <span onClick={() => openEditModal(cat, i)}>Edit</span>
            <span onClick={() => handleDelete(cat, i)}>Delete</span>
          </ItemActions>
        </CatalogItem>
      ));
    });
    return arr;
  };

  return (
    <CatalogContainer expanded={expanded}>
      <Header>
        <div><span style={{ fontSize: 14, color: "#555" }}>All</span><Title>Catalog</Title></div>
        <OrderButton onClick={() => navigate("/order")}>+ NEW ORDER</OrderButton>
      </Header>

      <Tabs>
        {["all", "coffee", "teas", "food"].map(t => (
          <TabButton key={t} active={activeTab === t} onClick={() => setActiveTab(t)}>
            {t === "all" ? "ALL PRODUCTS" : t === "teas" ? "TEAS & LATTES" : t.toUpperCase()}
          </TabButton>
        ))}
      </Tabs>

      <Actions>
        <AddButton onClick={() => setShowCatalogModal(true)}>+ ADD CATALOG</AddButton>
        <AddButton onClick={openAddModal}>+ ADD ITEM</AddButton>
      </Actions>

      <CatalogList>{render()}</CatalogList>

      {showItemModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <h3>{editMode ? "Change Item" : "Add Item"}</h3>
              <CloseButton onClick={() => setShowItemModal(false)}>×</CloseButton>
            </ModalHeader>
            <ModalForm>
              {["Name", "Price"].map((f) => (
                <React.Fragment key={f}>
                  <label>{f}</label>
                  <Input value={newItem[f.toLowerCase()]} onChange={(e) => setNewItem({ ...newItem, [f.toLowerCase()]: e.target.value })} />
                </React.Fragment>
              ))}
              <label>Category</label>
              <select value={newItem.category} onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}>
                <option value="coffee">Coffee</option><option value="teas">Teas</option><option value="food">Food</option>
              </select>

              {["coffee", "teas"].includes(newItem.category) && (
                <>
                  <label>Size</label>
                  <select value={newItem.size} onChange={(e) => setNewItem({ ...newItem, size: e.target.value })}>
                    <option value="">Select size</option><option value="Small">Small</option>
                    <option value="Medium">Medium</option><option value="Big">Big</option>
                  </select>
                </>
              )}

              <label>Description</label>
              <Textarea value={newItem.description} onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} />

              <ModalActions>
                <CancelButton onClick={() => setShowItemModal(false)}>Cancel</CancelButton>
                <SaveButton onClick={handleSaveItem}>{editMode ? "Save" : "Add"}</SaveButton>
              </ModalActions>
            </ModalForm>
          </ModalContent>
        </ModalOverlay>
      )}
    </CatalogContainer>
  );
}
