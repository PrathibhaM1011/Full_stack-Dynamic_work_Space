const {
  fetchAllWorkspaces,
  fetchWorkspaceById,
  createWorkspaceHandler,
  updateWorkspaceHandler,
  deleteWorkspaceHandler
} = require("../controllers/workSpaceController");

function workspaceRouter(req, res) {
  const url = req.url;
  const method = req.method;

  // Get all workspaces
  if (url === "/workspaces" && method === "GET") {
    return fetchAllWorkspaces(req, res);
  }

  // Get a workspace by ID
  if (url.startsWith("/workspaces/") && method === "GET") {
    const id = url.split("/")[2];
    return fetchWorkspaceById(req, res, id);
  }

  // Create new workspace
  if (url === "/workspaces" && method === "POST") {
    return createWorkspaceHandler(req, res);
  }

  // Update workspace
  if (url.startsWith("/workspaces/") && method === "PUT") {
    const id = url.split("/")[2];
    return updateWorkspaceHandler(req, res, id);
  }

  // Delete workspace
  if (url.startsWith("/workspaces/") && method === "DELETE") {
    const id = url.split("/")[2];
    return deleteWorkspaceHandler(req, res, id);
  }

  // If no matching route
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
}

module.exports = workspaceRouter;
