import React, { useState, useEffect } from "react";
import {
  SettingsItem, EditButton, TaxesContent, SaveButton
} from "../../styles/SettingsStyles";

const TaxesSection = ({ setToastMessage }) => {
  const [taxText, setTaxText] = useState("");
  const [tempTaxText, setTempTaxText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const loadTaxesData = () => {
    const savedTaxes = localStorage.getItem("taxes-text");
    if (savedTaxes) {
      setTaxText(savedTaxes);
      setTempTaxText(savedTaxes);
    }
  };

  useEffect(() => {
    loadTaxesData();
  }, []);

  const handleSaveTaxes = () => {
    setTaxText(tempTaxText);
    localStorage.setItem("taxes-text", tempTaxText);
    setEditMode(false);
    setToastMessage("✅ Taxes saved");
    setTimeout(() => setToastMessage(""), 2500);
  };

  const handleClose = () => {
    setTempTaxText(taxText);
    setEditMode(false);
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
      <div
        className="item-header"
        onClick={() => !editMode && setIsOpen((p) => !p)}
      >
        <span>Taxes & Currency</span>
        <EditButton onClick={toggleEdit}>
          {editMode ? "Close" : "Edit"}
        </EditButton>
      </div>

      <div className="item-body">
        <div className="item-body-inner">
          {editMode ? (
            <>
              <textarea
                value={tempTaxText}
                onChange={(e) => setTempTaxText(e.target.value)}
                style={{
                  width: "100%",
                  height: "300px",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #e0ddd7",
                  background: "#f9f7f3",
                  resize: "none",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                }}
              />
              <SaveButton onClick={handleSaveTaxes}>Save Changes</SaveButton>
            </>
          ) : (
            <TaxesContent>{taxText}</TaxesContent>
          )}
        </div>
      </div>
    </SettingsItem>
  );
};

export default TaxesSection;
