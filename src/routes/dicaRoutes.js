import { Router } from 'express';
import dicaController from '../controllers/dicaController.js';
import authMiddleware from '../middlewares/authMiddleware.js';


// import loginRequired from '../middlewares/loginRequired'; futuro

const router = new Router();

router.get('/dicas', dicaController.getAll);
router.post('/dicas', authMiddleware, dicaController.create);
router.put('/dicas/:codigo', authMiddleware, dicaController.update);
router.get('/dicas/:codigo', dicaController.getByCode);
router.delete('/dicas/:codigo', authMiddleware, dicaController.delete);
router.patch('/dicas/:codigo/verificar', authMiddleware, dicaController.verify);
router.get('/:tema/dicas', dicaController.getAllByTheme);
router.get('/:tema/dicas/verificadas', dicaController.getAllVerifiedByTheme);
router.get('/:tema/dicas/nao-verificadas', dicaController.getAllNotVerifiedByTheme);

export default router;

