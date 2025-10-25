import React, { useState, useEffect } from "react";
import {
  SettingsItem,
  EditButton,
  UsersTable,
  AddUserButton
} from "../../styles/SettingsStyles";
const UsersSection = ({ setToastMessage }) => {
  const [users, setUsers] = useState([]);
  const [tempUsers, setTempUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [savingMode, setSavingMode] = useState(false);
  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
      setTempUsers(JSON.parse(savedUsers));
    }
  }, []);
  const handleUserChange = (index, field, value) => {
    const newUsers = [...tempUsers];
    newUsers[index][field] = value;
    setTempUsers(newUsers);
  };
  const handleAddUserClick = () => {
    if (!savingMode) {
      setSavingMode(true);
      setTempUsers([...users, { name: "", role: "", mail: "" }]);
    } else {
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
    }
  };

  const handleClose = () => {
    setTempUsers(users);
    setEditMode(false);
    setSavingMode(false);
    setIsOpen(false);
  };

  return (
    <SettingsItem open={isOpen}>
      <div
        className="item-header"
        onClick={() => {
          if (!editMode) setIsOpen((prev) => !prev);
        }}
      >
        <span>Users & Roles</span>
        <EditButton
          onClick={(e) => {
            e.stopPropagation();
            if (editMode) {
              handleClose();
            } else {
              setIsOpen(true);
              setEditMode(true);
            }
          }}
        >
          {editMode ? "Close" : "Edit"}
        </EditButton>
      </div>
      <div className="item-body">
        <div className="item-body-inner">
          <UsersTable>
            <table>
              <thead>
                <tr>
                  <th>Name</th><th>Role</th><th>Mail</th>
                </tr>
              </thead>
              <tbody>
                {(savingMode ? tempUsers : users)
  .filter(u => u) 
  .map((u, i) => (

                  <tr key={i}>
                    <td>
                      <input value={u.name} disabled={!editMode} onChange={(e) => handleUserChange(i, "name", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input value={u.role} disabled={!editMode} onChange={(e) => handleUserChange(i, "role", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input value={u.mail} disabled={!editMode} onChange={(e) => handleUserChange(i, "mail", e.target.value)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </UsersTable>
          {editMode && (
            <AddUserButton type="button" saving={savingMode} onClick={handleAddUserClick}> {savingMode ? "Save Users" : "Add New User"}
            </AddUserButton>
          )}
        </div>
      </div>
    </SettingsItem>
  );
};
export default UsersSection;