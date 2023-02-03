const { Router } = require('express');
const { check } = require('express-validator');
const { cargarArchivo,uptdateImage } = require('../controllers/uploads');
const { validarCampos,validarArchivosubir } = require('../middlewares');

const { coleccionesPermitidas }= require('../helpers')

const router = Router();

router.post('/',validarArchivosubir,cargarArchivo);

router.put('/:coleccion/:id',[
           validarArchivosubir,
           check('id','El id debe de ser mongo').isMongoId(),
           check('coleccion').custom( c=>coleccionesPermitidas(c,['usuarios','productos'])),
            validarCampos
        ],uptdateImage)


module.exports = router;