import React, { useState, useEffect } from "react";
import {
  SettingsItem, EditButton, UsersTable, AddUserButton
} from "../../styles/SettingsStyles";

const UsersSection = ({ setToastMessage }) => {
  const [users, setUsers] = useState([]);
  const [tempUsers, setTempUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [savingMode, setSavingMode] = useState(false);

  const loadUsers = () => {
    try {
      const saved = localStorage.getItem("users");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setUsers(parsed);
          setTempUsers(parsed);
        } else {
          setUsers([]);
          setTempUsers([]);
        }
      }
    } catch (e) {
      console.error("Error loading users:", e);
      setUsers([]);
      setTempUsers([]);
    }
  };

  useEffect(() => { loadUsers(); }, []);

  const handleUserChange = (index, field, value) => {
    const updated = [...tempUsers];
    updated[index][field] = value;
    setTempUsers(updated);
  };

  const handleAddUserClick = () => {
    if (!savingMode) {
      setSavingMode(true);
      setTempUsers([...users, { name: "", role: "", mail: "" }]);
      return;
    }

    const allValid = tempUsers.every(
      (u) => u.name.trim() && u.role.trim() && u.mail.trim()
    );

    if (!allValid) {
      setToastMessage("❌ Please fill out all fields before saving");
      setTimeout(() => setToastMessage(""), 3000);
      return;
    }

    setUsers(tempUsers);
    localStorage.setItem("users", JSON.stringify(tempUsers));
    setSavingMode(false);
    setToastMessage("✅ Users saved successfully");
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleClose = () => {
    setTempUsers(users);
    setEditMode(false);
    setSavingMode(false);
    setIsOpen(false);
  };

  const toggleEdit = (e) => {
    e.stopPropagation();
    if (editMode) handleClose();
    else {
      setIsOpen(true);
      setEditMode(true);
    }
  };

  return (
    <SettingsItem open={isOpen}>
      <div className="item-header" onClick={() => !editMode && setIsOpen((p) => !p)}>
        <span>Users & Roles</span>
        <EditButton onClick={toggleEdit}>
          {editMode ? "Close" : "Edit"}
        </EditButton>
      </div>

      <div className="item-body">
        <div className="item-body-inner">
          <UsersTable>
            <table>
              <thead>
                <tr><th>Name</th><th>Role</th><th>Mail</th></tr>
              </thead>
              <tbody>
                {Array.isArray(savingMode ? tempUsers : users)
                  ? (savingMode ? tempUsers : users)
                      .filter(Boolean)
                      .map((u, i) => (
                        <tr key={i}>
                          {["name", "role", "mail"].map((field) => (
                            <td key={field}>
                              <input
                                value={u[field]}
                                disabled={!editMode}
                                onChange={(e) =>
                                  handleUserChange(i, field, e.target.value)
                                }
                              />
                            </td>
                          ))}
                        </tr>
                      ))
                  : null}
              </tbody>
            </table>
          </UsersTable>

          {editMode && (
            <AddUserButton
              type="button"
              $saving={savingMode}
              onClick={handleAddUserClick}
            >
              {savingMode ? "Save Users" : "Add New User"}
            </AddUserButton>
          )}
        </div>
      </div>
    </SettingsItem>
  );
};

export default UsersSection;
