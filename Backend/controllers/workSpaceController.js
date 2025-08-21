const {
  getAllWorkspaces,
  getWorkspaceById,
  createworkSpace,
  updateWorkSPace,
  deleteWorkSpace
} = require("../Models/workSpaceModel");

// 1. GET /workspaces
function fetchAllWorkspaces(req, res) {
  const workspaces = getAllWorkspaces();
  res.status(200).json(workspaces);
}

// 2. GET /workspaces/:id
function fetchWorkspaceById(req, res) {
  const { id } = req.params;
  const workspace = getWorkspaceById(id);

  if (!workspace) {
    return res.status(404).json({ message: "Workspace not found" });
  }

  res.status(200).json(workspace);
}

// 3. POST /workspaces
function createWorkspaceHandler(req, res) {
  const newWorkspace = req.body;

  if (!newWorkspace || !newWorkspace.id || !newWorkspace.name) {
    return res.status(400).json({ message: "Invalid workspace data" });
  }

  const created = createworkSpace(newWorkspace);
  res.status(201).json(created);
}

// 4. PUT /workspaces/:id
function updateWorkspaceHandler(req, res) {
  const { id } = req.params;
  const updatedData = req.body;

  const updated = updateWorkSPace(id, updatedData);
  if (!updated) {
    return res.status(404).json({ message: "Workspace not found" });
  }

  res.status(200).json(updated);
}

// 5. DELETE /workspaces/:id
function deleteWorkspaceHandler(req, res) {
  const { id } = req.params;

  const deleted = deleteWorkSpace(id);
  if (!deleted) {
    return res.status(404).json({ message: "Workspace not found" });
  }

  res.status(200).json({ message: "Workspace deleted successfully" });
}

// Export all handlers
module.exports = {
  fetchAllWorkspaces,
  fetchWorkspaceById,
  createWorkspaceHandler,
  updateWorkspaceHandler,
  deleteWorkspaceHandler
};


