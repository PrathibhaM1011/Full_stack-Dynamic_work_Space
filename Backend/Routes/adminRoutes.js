// backend/routes/adminRoutes.js
import express from 'express';
import { 
  getAllWorkspaces, 
  createWorkspace, 
  updateWorkspace, 
  deleteWorkspace 
} from '../controllers/adminController.js';

const router = express.Router();

// Workspaces
router.get('/workspaces', getAllWorkspaces);
router.post('/workspaces', createWorkspace);
router.put('/workspaces/:id', updateWorkspace);
router.delete('/workspaces/:id', deleteWorkspace);

export default router;
