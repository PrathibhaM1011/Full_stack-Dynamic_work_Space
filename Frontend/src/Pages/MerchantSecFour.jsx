
import React, { useState } from "react";
import axios from "axios";

const MerchantSecFour = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    ownerImage: null,       // single file
    building: "",
    workspaceCount: "",
    workspaceTypes: [],    // max 2
    tagline: "",
    images: [],            // multiple files
    city: "",
    subcity: "",
    customSubcity: "",
    amenities: [],         // multiple
    location: { lat: "", lng: "" }
  });

  const workspaceTypeOptions = [
    "Coworking",
    "Event Space",
    "Advertisement Space",
    "Private Office",
    "Meeting Room"
  ];

  const amenitiesOptions = [
    "Wi-Fi",
    "Parking",
    "Cafeteria",
    "Conference Room",
    "AC",
    "Security"
  ];

  // generic input for text/select
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // file inputs
  const handleFileChange = (e) => {
    const { name, files, multiple } = e.target;
    if (multiple) {
      setFormData(prev => ({ ...prev, [name]: Array.from(files) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: files[0] || null }));
    }
  };

  // workspace type checkboxes (limit 2)
  const toggleWorkspaceType = (type) => {
    setFormData(prev => {
      const current = new Set(prev.workspaceTypes);
      if (current.has(type)) {
        current.delete(type);
      } else {
        // enforce max 2
        if (current.size >= 2) {
          alert("You can select up to 2 workspace types.");
          return prev;
        }
        current.add(type);
      }
      return { ...prev, workspaceTypes: Array.from(current) };
    });
  };

  // amenities checkboxes (no limit)
  const toggleAmenity = (amenity) => {
    setFormData(prev => {
      const arr = new Set(prev.amenities);
      if (arr.has(amenity)) arr.delete(amenity);
      else arr.add(amenity);
      return { ...prev, amenities: Array.from(arr) };
    });
  };

  // get location from browser
  const handleLocate = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setFormData(prev => ({ ...prev, location: { lat, lng } }));
      },
      (err) => {
        console.error(err);
        alert("Could not get location (permission denied or error).");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  // submit using multipart/form-data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = new FormData();

      // append text fields
      payload.append("ownerName", formData.ownerName);
      payload.append("ownerEmail", formData.ownerEmail);
      payload.append("ownerPhone", formData.ownerPhone);
      payload.append("building", formData.building);
      payload.append("workspaceCount", formData.workspaceCount);
      payload.append("tagline", formData.tagline);
      payload.append("city", formData.city);
      payload.append("subcity", formData.subcity);
      payload.append("customSubcity", formData.customSubcity || "");
      // arrays as JSON strings (backend can parse)
      payload.append("workspaceTypes", JSON.stringify(formData.workspaceTypes));
      payload.append("amenities", JSON.stringify(formData.amenities));
      payload.append("location", JSON.stringify(formData.location));

      // owner image (single)
      if (formData.ownerImage) {
        payload.append("ownerImage", formData.ownerImage);
      }

      // workspace images (multiple)
      if (formData.images && formData.images.length > 0) {
        formData.images.forEach((file, idx) => {
          payload.append("images", file); // append same key multiple times
        });
      }

      // axios POST
      const res = await axios.post(
        "http://localhost:5000/merchantSubmissions",
        payload,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.status === 201 || res.status === 200) {
        alert("Submission successful!");
        // reset lightly
        setShowForm(false);
        setFormData({
          ownerName: "",
          ownerEmail: "",
          ownerPhone: "",
          ownerImage: null,
          building: "",
          workspaceCount: "",
          workspaceTypes: [],
          tagline: "",
          images: [],
          city: "",
          subcity: "",
          customSubcity: "",
          amenities: [],
          location: { lat: "", lng: "" }
        });
      } else {
        alert("Submission completed but server returned non-OK status");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Submission failed — check console for error.");
    }
  };

  // small helper to open coordinates on google maps
  const openInMaps = () => {
    const { lat, lng } = formData.location;
    if (!lat || !lng) {
      alert("No coordinates yet. Click 'Locate on Map' first.");
      return;
    }
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  // basic modern inline styles (you can move to CSS file later)
  const styles = {
    section: { padding: 40, background: "#fff", color: "#111" },
    container: { maxWidth: 1200, margin: "0 auto", display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" },
    left: { flex: 1, minWidth: 300 },
    right: { flex: 1, minWidth: 300, textAlign: "center" },
    heading: { fontSize: 28, marginBottom: 12, fontWeight: 700 },
    sub: { color: "#555", marginBottom: 20 },
    button: { padding: "10px 18px", background: "#111", color: "#fff", borderRadius: 8, border: "none", cursor: "pointer" },
    formContainer: { background: "#f8f8f8", padding: 20, borderRadius: 12, boxShadow: "0 6px 24px rgba(0,0,0,0.06)" },
    field: { width: "100%", padding: 10, marginBottom: 10, borderRadius: 8, border: "1px solid #ddd" },
    fileNote: { fontSize: 13, color: "#666", marginBottom: 8 },
    checkboxRow: { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 10 },
    smallBtn: { padding: "8px 12px", background: "#fff", border: "1px solid #ddd", borderRadius: 8, cursor: "pointer" },
    coordsBox: { marginTop: 8, fontSize: 14, color: "#333" }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.left}>
          <h2 style={styles.heading}>Ready to Start Business With Us?</h2>
          <p style={styles.sub}>List your building and earn — share photos, location and workspace details. We'll take care of visibility & bookings.</p>
          <button style={styles.button} onClick={() => setShowForm(true)}>Fill the Form</button>
        </div>

        <div style={styles.right}>
          <img
            alt="Partnership"
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
            style={{ width: "100%", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
          />
        </div>
      </div>

      {/* Overlay Form */}
      {showForm && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)",
          display: "flex", justifyContent: "center", alignItems: "center", zIndex: 999
        }}>
          <div style={{ width: "95%", maxWidth: 920, background: "#fff", borderRadius: 12, padding: 20, maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <h3 style={{ margin: 0 }}>Merchant Submission — Detailed</h3>
              <div>
                <button style={{ ...styles.smallBtn, marginRight: 8 }} onClick={() => { openInMaps(); }}>Open in Maps</button>
                <button style={styles.smallBtn} onClick={() => setShowForm(false)}>Close</button>
              </div>
            </div>

            <div style={styles.formContainer}>
              <form onSubmit={handleSubmit}>

                {/* Owner info */}
                <h4>Owner Details</h4>
                <input name="ownerName" placeholder="Owner full name" value={formData.ownerName} onChange={handleInputChange} style={styles.field} required />
                <input name="ownerEmail" placeholder="Owner email" value={formData.ownerEmail} onChange={handleInputChange} style={styles.field} required />
                <input name="ownerPhone" placeholder="Owner phone" value={formData.ownerPhone} onChange={handleInputChange} style={styles.field} required />
                <div style={styles.fileNote}>Add owner picture (profile)</div>
                <input name="ownerImage" type="file" accept="image/*" onChange={handleFileChange} style={{ marginBottom: 12 }} />

                <hr />

                {/* Workspace basic */}
                <h4>Workspace Details</h4>
                <input name="building" placeholder="Building / Workspace name" value={formData.building} onChange={handleInputChange} style={styles.field} required />
                <input name="workspaceCount" placeholder="Number of workspaces" value={formData.workspaceCount} onChange={handleInputChange} style={styles.field} required />
                <input name="tagline" placeholder="Short tagline" value={formData.tagline} onChange={handleInputChange} style={styles.field} />

                <div style={{ marginBottom: 8, fontWeight: 600 }}>Workspace Types (choose up to 2)</div>
                <div style={styles.checkboxRow}>
                  {workspaceTypeOptions.map((t) => (
                    <label key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <input type="checkbox" checked={formData.workspaceTypes.includes(t)} onChange={() => toggleWorkspaceType(t)} />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>

                <div style={{ marginBottom: 8, fontWeight: 600 }}>Amenities</div>
                <div style={styles.checkboxRow}>
                  {amenitiesOptions.map(a => (
                    <label key={a} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <input type="checkbox" checked={formData.amenities.includes(a)} onChange={() => toggleAmenity(a)} />
                      <span>{a}</span>
                    </label>
                  ))}
                </div>

                <div style={{ marginTop: 10 }}>
                  <div style={styles.fileNote}>Add workspace pictures (you can select multiple)</div>
                  <input name="images" type="file" accept="image/*" multiple onChange={handleFileChange} />
                </div>

                <hr />

                {/* Location */}
                <h4>Location</h4>
                <input name="city" placeholder="City" value={formData.city} onChange={handleInputChange} style={styles.field} required />
                <input name="subcity" placeholder="Subcity (or choose Other below)" value={formData.subcity} onChange={handleInputChange} style={styles.field} />
                <select name="subcity" value={formData.subcity} onChange={handleInputChange} style={styles.field}>
                  <option value="">Select subcity (optional)</option>
                  <option>Jubilee Hills</option>
                  <option>Madhapur</option>
                  <option>Banjara Hills</option>
                  <option>Other</option>
                </select>
                {formData.subcity === "Other" && (
                  <input name="customSubcity" placeholder="Enter custom subcity" value={formData.customSubcity} onChange={handleInputChange} style={styles.field} />
                )}

                <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 8 }}>
                  <button type="button" onClick={handleLocate} style={styles.smallBtn}>Locate on Map (use GPS)</button>
                  <div style={styles.coordsBox}>
                    Lat: {formData.location.lat || "—"} &nbsp; Lng: {formData.location.lng || "—"}
                  </div>
                </div>

                <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
                  <button type="submit" style={{ ...styles.button }}>Submit</button>
                  <button type="button" onClick={() => setShowForm(false)} style={{ ...styles.smallBtn }}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default MerchantSecFour;
