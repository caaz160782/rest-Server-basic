const Rol = require('../models/rol');
const User = require('../models/user'); 
const Category=require('../models/category')

const isValidRole = async (rol = '') => {
  const existeRol = await Rol.findOne({ rol });  
  if (!existeRol) {
         throw new Error(`El rol ${rol} no se encuentra en el listado`);
      }
}

const emailExiste = async (email = '') => {
  const findEmail = await User.findOne({ email }).exec();
  if (findEmail) {
         throw new Error(`El email: ${email} ya fue registrado`);
      }
}

const existeUsuarioId = async (id) => {
  const findIdUser = await User.findById( id );
  if (!findIdUser) {
         throw new Error(`El usuario con : ${id} no existe`);
      }
}

const existeCategoryId = async (id) => {
  const findIdCategory = await Category.findById(id);
  if (!findIdCategory) {
         throw new Error(`El Producto con : ${id} no existe`);
      }
}





module.exports = {
  isValidRole,
  emailExiste,
  existeUsuarioId,
  existeCategoryId
}