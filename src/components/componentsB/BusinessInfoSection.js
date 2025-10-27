import React, { useState, useEffect } from "react";
import { SettingsItem, EditButton, BusinessInfoForm } from "../../styles/SettingsStyles";

const defaultFields = {
  businessName: "", phone: "", businessAddress: "", email: "",
  cityZip: "", country: "", website: "",
};

const BusinessInfoSection = ({ setToastMessage }) => {
  const [fields, setFields] = useState(defaultFields);
  const [tempFields, setTempFields] = useState(defaultFields);
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const loadBusinessInfo = () => {
    const saved = localStorage.getItem("business-info");
    if (saved) {
      const parsed = JSON.parse(saved);
      setFields(parsed);
      setTempFields(parsed);
    }
  };

  useEffect(() => { loadBusinessInfo(); }, []);

  const handleChange = (e) =>
    setTempFields((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSave = (e) => {
    e.preventDefault();
    setFields(tempFields);
    localStorage.setItem("business-info", JSON.stringify(tempFields));
    setEditMode(false);
    setToastMessage("✅ Business info saved");
    setTimeout(() => setToastMessage(""), 2500);
  };

  const handleClose = () => {
    setTempFields(fields);
    setEditMode(false);
    setIsOpen(false);
  };

  const toggleEdit = (e) => {
    e.stopPropagation();
    if (editMode) {
      handleClose();
    } else {
      setIsOpen(true);
      setEditMode(true);
    }
  };

  return (
    <SettingsItem open={isOpen}>
      <div className="item-header" onClick={() => !editMode && setIsOpen((p) => !p)}>
        <span>Business Info</span>
        <EditButton onClick={toggleEdit}>{editMode ? "Close" : "Edit"}</EditButton>
      </div>

      <div className="item-body">
        <div className="item-body-inner">
          <BusinessInfoForm onSubmit={handleSave} autoComplete="off">
            {[
              ["Business Name", "businessName", "Phone Number", "phone"],
              ["Business Address", "businessAddress", "Email Address", "email"],
              ["City & ZIP Code", "cityZip", "Country", "country"],
              ["Website", "website", "", ""],
            ].map(([l1, n1, l2, n2], i) => (
              <div className="inputs-row" key={i}>
                <div>
                  <label>{l1}</label>
                  <input
                    name={n1}
                    value={tempFields[n1]}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </div>
                {n2 && (
                  <div>
                    <label>{l2}</label>
                    <input
                      name={n2}
                      value={tempFields[n2]}
                      onChange={handleChange}
                      disabled={!editMode}
                    />
                  </div>
                )}
              </div>
            ))}
            {editMode && <button className="save-btn">Save Changes</button>}
          </BusinessInfoForm>
        </div>
      </div>
    </SettingsItem>
  );
};

export default BusinessInfoSection;
