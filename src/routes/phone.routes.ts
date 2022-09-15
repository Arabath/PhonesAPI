import { Router } from "express"
import * as controller from "../controllers/phone.controller"

const router = Router()

router.get('/', controller.getAll)
router.get('/count', controller.count)
router.get('/id:', controller.findByID)

router.post('/', controller.create)

router.put('/:id', controller.update)

router.delete('/:id', controller.remove)

export default router

