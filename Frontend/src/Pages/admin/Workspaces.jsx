// src/pages/admin/Workspaces.jsx
import React, { useEffect, useState } from "react";
import axios from "../../api/axios"; // your axios instance
import Sidebar from "../../Components/Admin/Sidebar";
import AdminModal from "./AdminModal";

const Workspaces = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  // inline styles
  const styles = {
    page: { display: "flex", minHeight: "100vh", fontFamily: "'Segoe UI', Roboto, sans-serif" },
    content: { flex: 1, padding: 24, background: "#f7f8fb" },
    headerRow: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
    title: { margin: 0, fontSize: 22, fontWeight: 700 },
    addBtn: { background: "#0b74ff", color: "#fff", border: "none", padding: "10px 14px", borderRadius: 8, cursor: "pointer" },
    table: { width: "100%", borderCollapse: "collapse", marginTop: 10 },
    th: { textAlign: "left", padding: "10px 12px", background: "#fff", borderBottom: "1px solid #eee", fontSize: 14 },
    td: { padding: "12px", background: "#fff", borderBottom: "1px solid #eee" },
    actionBtn: { marginRight: 8, padding: "6px 10px", borderRadius: 6, border: "none", cursor: "pointer" },
    editBtn: { background: "#06b6d4", color: "#fff" },
    delBtn: { background: "#ef4444", color: "#fff" },
    smallText: { fontSize: 13, color: "#666" },
  };

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  function fetchWorkspaces() {
    setLoading(true);
    axios.get("/admin/workspaces") 
      .then(res => { setWorkspaces(res.data || []); })
      .catch(err => { console.error("fetch workspaces failed", err); alert("Could not fetch data"); })
      .finally(() => setLoading(false));
  }

  function openAdd() {
    setEditing(null);
    setModalOpen(true);
  }

  function openEdit(ws) {
    setEditing(ws);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setEditing(null);
  }

  async function handleSubmitWorkspace(payload) {
    try {
      if (payload.id) {
        // update
        await axios.put(`/admin/workspaces/${payload.id}`, payload);
        alert("Workspace updated");
      } else {
        // create -> assign simple id here (backend could create proper id)
        payload.id = "WS" + Date.now().toString().slice(-6);
        await axios.post("/admin/workspaces", payload);
        alert("Workspace added");
      }
      closeModal();
      fetchWorkspaces();
    } catch (err) {
      console.error("save failed", err);
      alert("Save failed");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this workspace?")) return;
    try {
      await axios.delete(`/admin/workspaces/${id}`);
      alert("Deleted");
      fetchWorkspaces();
    } catch (err) {
      console.error("delete failed", err);
      alert("Delete failed");
    }
  }

  return (
    <div style={styles.page}>
      <Sidebar />
      <main style={styles.content}>
        <div style={styles.headerRow}>
          <h2 style={styles.title}>Manage Workspaces</h2>
          <div>
            <button style={styles.addBtn} onClick={openAdd}>+ Add Workspace</button>
          </div>
        </div>

        {loading ? <p>Loading...</p> : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>City</th>
                <th style={styles.th}>Subcity</th>
                <th style={styles.th}>Type</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {workspaces.length ? workspaces.map(ws => (
                <tr key={ws.id}>
                  <td style={styles.td}>
                    <div style={{ fontWeight: 600 }}>{ws.name}</div>
                    <div style={styles.smallText}>{ws.tagline}</div>
                  </td>
                  <td style={styles.td}>{ws.city || "-"}</td>
                  <td style={styles.td}>{ws.subcity || "-"}</td>
                  <td style={styles.td}>{ws.type || "-"}</td>
                  <td style={styles.td}>
                    <button style={{ ...styles.actionBtn, ...styles.editBtn }} onClick={() => openEdit(ws)}>Edit</button>
                    <button style={{ ...styles.actionBtn, ...styles.delBtn }} onClick={() => handleDelete(ws.id)}>Delete</button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td style={styles.td} colSpan={5}>No workspaces found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        <AdminModal
          visible={modalOpen}
          onClose={closeModal}
          onSubmit={handleSubmitWorkspace}
          initialData={editing}
        />
      </main>
    </div>
  );
};

export default Workspaces;
