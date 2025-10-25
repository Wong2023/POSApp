import React, { useState, useEffect } from "react";
import {
  SettingsItem,
  EditButton,
  BusinessInfoForm
} from "../../styles/SettingsStyles";

const defaultFields = {
  businessName: "",
  phone: "",
  businessAddress: "",
  email: "",
  cityZip: "",
  country: "",
  website: "",
};

const BusinessInfoSection = ({ setToastMessage }) => {
  const [fields, setFields] = useState(defaultFields);
  const [tempFields, setTempFields] = useState(defaultFields);
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("business-info");
    if (saved) {
      setFields(JSON.parse(saved));
      setTempFields(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setTempFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

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
  return (
    <SettingsItem open={isOpen}>
      <div
        className="item-header"
        onClick={() => {
          if (!editMode) setIsOpen((prev) => !prev);
        }}>
        <span>Business Info</span>
        <EditButton
          onClick={(e) => {
            e.stopPropagation();
            if (editMode) {
              handleClose();
            } else {
              setIsOpen(true);
              setEditMode(true);
            }
          }}>
          {editMode ? "Close" : "Edit"}
        </EditButton>
      </div>
      <div className="item-body">
        <div className="item-body-inner">
          <BusinessInfoForm onSubmit={handleSave} autoComplete="off">
            <div className="inputs-row">
              <div>
                <label>Business Name</label>
                <input name="businessName" value={tempFields.businessName} onChange={handleChange} disabled={!editMode}/>
              </div>
              <div>
                <label>Phone Number</label>
                <input name="phone" value={tempFields.phone} onChange={handleChange} disabled={!editMode}/>
              </div>
            </div>

            <div className="inputs-row">
              <div>
                <label>Business Address</label>
                <input name="businessAddress" value={tempFields.businessAddress} onChange={handleChange} disabled={!editMode}/>
              </div>
              <div>
                <label>Email Address</label>
                <input name="email" value={tempFields.email} onChange={handleChange} disabled={!editMode}/>
              </div>
            </div>
            <div className="inputs-row">
              <div>
                <label>City & ZIP Code</label>
                <input name="cityZip" value={tempFields.cityZip} onChange={handleChange} disabled={!editMode}/>
              </div>
              <div>
                <label>Country</label>
                <input name="country" value={tempFields.country} onChange={handleChange}disabled={!editMode}/>
              </div>
            </div>
            <div className="inputs-row">
              <div>
                <label>Website</label>
                <input name="website" value={tempFields.website} onChange={handleChange} disabled={!editMode}/>
              </div>
              <div></div>
            </div>
            {editMode && <button className="save-btn">Save Changes</button>}
          </BusinessInfoForm>
        </div>
      </div>
    </SettingsItem>
  );
};

export default BusinessInfoSection;