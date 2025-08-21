import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workSPaceFilePath = path.join(__dirname, "../data/workspaces.json");

export function getAllWorkspaces() {
  const data = fs.readFileSync(workSPaceFilePath, "utf-8");
  return JSON.parse(data);
}

export function getWorkspaceById(id) {
  return getAllWorkspaces().find(ws => ws.id === id);
}

export function createworkSpace(newWorkSpace) {
  const workspaces = getAllWorkspaces();
  workspaces.push(newWorkSpace);
  fs.writeFileSync(workSPaceFilePath, JSON.stringify(workspaces, null, 2));
  return newWorkSpace;
}

export function updateWorkSPace(id, updatedData) {
  const workspaces = getAllWorkspaces();
  const index = workspaces.findIndex(ws => ws.id === id);
  if (index === -1) return null;
  workspaces[index] = { ...workspaces[index], ...updatedData };
  fs.writeFileSync(workSPaceFilePath, JSON.stringify(workspaces, null, 2));
  return workspaces[index];
}

export function deleteWorkSpace(id) {
  const workspaces = getAllWorkspaces();
  const updatedList = workspaces.filter(ws => ws.id !== id);
  if (updatedList.length === workspaces.length) return false;
  fs.writeFileSync(workSPaceFilePath, JSON.stringify(updatedList, null, 2));
  return true;
}
