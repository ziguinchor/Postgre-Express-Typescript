import { Router } from "express"
const router: Router = Router()


import { createUser, getAllUsers, showUser, deleteUser, updateUser } from './../controllers/userController';
import { requireSignin } from './../middlewares/userAuth';


router.post('/create',createUser)
router.get('/all',[requireSignin],getAllUsers)
router.get('/:id',[requireSignin],showUser)
router.delete('/delete/:id',[requireSignin],deleteUser)
router.patch('/update/:id',updateUser)




export const userRouter: Router = router