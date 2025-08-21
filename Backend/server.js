import express from 'express';
import cors from 'cors';
import adminRoutes from './Routes/adminRoutes.js';
import {
  getAllWorkspaces,
  getWorkspaceById,
  createworkSpace,
  updateWorkSPace,
  deleteWorkSpace
} from './Models/workSpaceModel.js';

const app = express();
const PORT = 8000;

// Middlewares
app.use(cors());
app.use(express.json());

// Mount admin routes
app.use('/admin', adminRoutes);

// ---- GET /workspaces ----
app.get('/workspaces', (req, res) => {
  const workspaces = getAllWorkspaces();
  res.json(workspaces);
});

// ---- GET /workspaces/:id ----
app.get('/workspaces/:id', (req, res) => {
  const workspace = getWorkspaceById(req.params.id);
  if (workspace) {
    res.json(workspace);
  } else {
    res.status(404).json({ message: "Workspace not found" });
  }
});

// ---- POST /workspaces ----
app.post('/workspaces', (req, res) => {
  const newWorkspace = req.body;
  const created = createworkSpace(newWorkspace);
  res.status(201).json(created);
});

// ---- PUT /workspaces/:id ----
app.put('/workspaces/:id', (req, res) => {
  const updated = updateWorkSPace(req.params.id, req.body);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).json({ message: "Workspace not found to update" });
  }
});

// ---- DELETE /workspaces/:id ----
app.delete('/workspaces/:id', (req, res) => {
  const deleted = deleteWorkSpace(req.params.id);
  if (deleted) {
    res.json({ message: "Workspace deleted successfully" });
  } else {
    res.status(404).json({ message: "Workspace not found to delete" });
  }
});

// ---- Invalid Route ----
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
