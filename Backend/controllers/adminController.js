// backend/controllers/adminController.js
import Workspace from '../workSpaceModel.js';

export const getAllWorkspaces = async (req, res) => {
  try {
    const workspaces = await Workspace.find();
    res.json(workspaces);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createWorkspace = async (req, res) => {
  try {
    const workspace = new Workspace(req.body);
    await workspace.save();
    res.status(201).json(workspace);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateWorkspace = async (req, res) => {
  try {
    const workspace = await Workspace.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(workspace);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteWorkspace = async (req, res) => {
  try {
    await Workspace.findByIdAndDelete(req.params.id);
    res.json({ message: 'Workspace deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
