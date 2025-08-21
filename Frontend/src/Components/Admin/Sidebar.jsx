
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const styles = {
    wrapper: {
      width: 220,
      background: "#0f172a",
      color: "#fff",
      minHeight: "100vh",
      padding: 20,
      boxSizing: "border-box",
    },
    title: { fontSize: 18, marginBottom: 18, fontWeight: 700 },
    list: { listStyle: "none", padding: 0, margin: 0 },
    item: { marginBottom: 12 },
    link: { color: "#fff", textDecoration: "none", fontSize: 15 },
  };

  return (
    <aside style={styles.wrapper}>
      <div style={styles.title}>Admin Panel</div>
      <ul style={styles.list}>
        <li style={styles.item}><Link style={styles.link} to="/admin/workspaces">Workspaces</Link></li>
        <li style={styles.item}><Link style={styles.link} to="/admin/users">Users</Link></li>
        <li style={styles.item}><Link style={styles.link} to="/admin/merchants">Merchants</Link></li>
        <li style={styles.item}><Link style={styles.link} to="/admin/analytics">Analytics</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
