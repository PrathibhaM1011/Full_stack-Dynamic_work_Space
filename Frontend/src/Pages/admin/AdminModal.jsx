// src/components/Admin/AdminModal.jsx
import React, { useState, useEffect } from "react";

/*
  Reusable modal for Add / Edit workspace.
  Props:
    visible: boolean
    onClose: fn
    onSubmit: fn(payload) => called with workspace object
    initialData: object | null  (when editing)
*/
const AdminModal = ({ visible, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    city: "",
    subcity: "",
    tagline: "",
    type: "",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
    else setForm({ id: "", name: "", city: "", subcity: "", tagline: "", type: "" });
  }, [initialData, visible]);

  const styles = {
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      display: visible ? "flex" : "none",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999,
    },
    modal: {
      width: "92%",
      maxWidth: 680,
      background: "#fff",
      borderRadius: 12,
      padding: 20,
      boxSizing: "border-box",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    },
    header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
    title: { fontSize: 18, fontWeight: 700 },
    closeBtn: { border: "none", background: "transparent", cursor: "pointer", fontSize: 18 },
    formRow: { display: "flex", gap: 12, marginBottom: 12, flexWrap: "wrap" },
    input: { flex: 1, padding: 10, borderRadius: 8, border: "1px solid #ddd", minWidth: 160 },
    label: { fontSize: 13, marginBottom: 6, color: "#333" },
    actions: { display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 8 },
    btnPrimary: { background: "#0b74ff", color: "#fff", border: "none", padding: "10px 14px", borderRadius: 8, cursor: "pointer" },
    btnGhost: { background: "#f3f4f6", border: "none", padding: "10px 14px", borderRadius: 8, cursor: "pointer" },
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function submit(e) {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.city) {
      alert("Please provide at least name and city.");
      return;
    }
    onSubmit(form);
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <div style={styles.title}>{form.id ? "Edit Workspace" : "Add Workspace"}</div>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        <form onSubmit={submit}>
          <div style={styles.formRow}>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Workspace Name</label>
              <input name="name" value={form.name} onChange={handleChange} style={styles.input} placeholder="e.g. SkyTower Premium" />
            </div>

            <div style={{ flex: 1 }}>
              <label style={styles.label}>City</label>
              <input name="city" value={form.city} onChange={handleChange} style={styles.input} placeholder="Hyderabad" />
            </div>
          </div>

          <div style={styles.formRow}>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Subcity</label>
              <input name="subcity" value={form.subcity} onChange={handleChange} style={styles.input} placeholder="Jubilee Hills" />
            </div>

            <div style={{ flex: 1 }}>
              <label style={styles.label}>Type</label>
              <input name="type" value={form.type} onChange={handleChange} style={styles.input} placeholder="Private Office / Day Pass" />
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={styles.label}>Tagline / Short Description</label>
            <input name="tagline" value={form.tagline} onChange={handleChange} style={{ ...styles.input }} placeholder="Premium workspace in Jubilee Hills" />
          </div>

          <div style={styles.actions}>
            <button type="button" style={styles.btnGhost} onClick={onClose}>Cancel</button>
            <button type="submit" style={styles.btnPrimary}>{form.id ? "Update" : "Add"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminModal;
