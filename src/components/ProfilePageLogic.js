import React, { useState, useEffect } from "react";
import ProfilePageView from "./ProfilePageView"; // подключаем верстку

const ProfilePage = ({ onLogout }) => {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("userProfile");
    return saved
      ? JSON.parse(saved)
      : {
          firstName: "Predrag",
          lastName: "Dimitrijevic",
          email: "pekidzmaj@gmail.com",
          phone: "+34 613 926 369"
        };
  });

  const [editing, setEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState(profile);

  const [editingPassword, setEditingPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: ""
  });

  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success"
  });

  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
  }, [profile]);

  const handleChange = (e) => {
    setTempProfile({ ...tempProfile, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    if (!editing) {
      setTempProfile(profile);
      setEditing(true);
    } else {
      setEditing(false);
    }
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setEditing(false);
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handlePasswordEditToggle = () => {
    setEditingPassword(!editingPassword);
  };

  const handlePasswordSave = () => {
    if (!passwords.current || !passwords.newPass || !passwords.confirm) {
      showToast("Please fill in all fields", "error");
      return;
    }
    if (passwords.newPass !== passwords.confirm) {
      showToast("New passwords do not match", "error");
      return;
    }

    setPasswords({ current: "", newPass: "", confirm: "" });
    setEditingPassword(false);

    showToast("Password successfully changed!", "success");
  };

  const showToast = (message, type) => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast({ visible: false, message: "", type }), 3000);
  };

  return (
    <ProfilePageView
      onLogout={onLogout}
      profile={profile}
      tempProfile={tempProfile}
      editing={editing}
      handleChange={handleChange}
      handleEditToggle={handleEditToggle}
      handleSave={handleSave}
      editingPassword={editingPassword}
      handlePasswordEditToggle={handlePasswordEditToggle}
      handlePasswordChange={handlePasswordChange}
      passwords={passwords}
      handlePasswordSave={handlePasswordSave}
      toast={toast}
    />
  );
};

export default ProfilePage;
