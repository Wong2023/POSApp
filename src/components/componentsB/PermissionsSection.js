import React, { useState } from "react";
import { SettingsItem, EditButton, PermissionsTable } from "../../styles/SettingsStyles";

const roles = ["Admin", "Manager", "Cashier", "Staff"];
const actions = [
  "View Dashboard","Edit Catalog","View Orders","Create Orders","Edit Orders",
  "Refund Orders","View Analytics","Access Settings","Manage Employees","Change Permissions",
];

const defaultPermissions = {
  Admin: Object.fromEntries(actions.map(a => [a, true])),
  Manager: {
    "View Dashboard": true, "Edit Catalog": true, "View Orders": true, "Create Orders": true,
    "Edit Orders": true, "Refund Orders": true, "View Analytics": true,
    "Access Settings": false, "Manage Employees": false, "Change Permissions": false,
  },
  Cashier: {
    "View Dashboard": true, "Edit Catalog": false, "View Orders": true, "Create Orders": true,
    "Edit Orders": false, "Refund Orders": false, "View Analytics": false,
    "Access Settings": false, "Manage Employees": false, "Change Permissions": false,
  },
  Staff: {
    "View Dashboard": true, "Edit Catalog": false, "View Orders": true, "Create Orders": false,
    "Edit Orders": false, "Refund Orders": false, "View Analytics": false,
    "Access Settings": false, "Manage Employees": false, "Change Permissions": false,
  },
};

const PermissionsSection = () => {
  const [permissions, setPermissions] = useState(defaultPermissions);
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const togglePermission = (role, action) =>
    setPermissions(p => ({ ...p, [role]: { ...p[role], [action]: !p[role][action] } }));

  const handleClose = () => { setIsOpen(false); setEditMode(false); };

  const handleEditClick = (e) => {
    e.stopPropagation();
    if (editMode) handleClose();
    else { setIsOpen(true); setEditMode(true); }
  };

  return (
    <SettingsItem open={isOpen}>
      <div className="item-header" onClick={() => !editMode && setIsOpen(v => !v)}>
        <span>Permissions</span>
        <EditButton onClick={handleEditClick}>{editMode ? "Close" : "Edit"}</EditButton>
      </div>

      <div className="item-body">
        <div className="item-body-inner">
          <PermissionsTable>
            <h4>2. Permission Matrix Table</h4>
            <p>
              Table with <b>Roles</b> as columns and <b>Actions</b> as rows. Click to toggle.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Action / Role</th>
                  {roles.map(r => <th key={r}>{r}</th>)}
                </tr>
              </thead>
              <tbody>
                {actions.map(a => (
                  <tr key={a}>
                    <td>{a}</td>
                    {roles.map(r => (
                      <td key={r}>
                        <span
                          className={permissions[r][a] ? "check" : "cross"}
                          onClick={() => editMode && togglePermission(r, a)}
                        >
                          {permissions[r][a] ? "✅" : "❌"}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </PermissionsTable>
        </div>
      </div>
    </SettingsItem>
  );
}

export default PermissionsSection;