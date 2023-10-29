const productosModel={}
const productos =[ 

    {nombre:[], codigo:[], descripcion:[], precio:[]}
    ] 
productosModel.Guardar = function(post, callback){

    productos.push({nombre: post.nombre, codigo: post.codigo, descripcion: post.descripcion, precio: post.precio})
    return callback({state:true,mensaje:"se almaceno"})
}
productosModel.listar=function(post,callback){
    return callback(productos)
}

productosModel.modificar=function(post,callback){
    
    const posision= productos.findIndex((item) => item.codigo == post.codigo)
    if (posision == -1){
      callback({ state: false, mensaje:"no se encruntra id"})
      return false
    }
    else{
      productos[posision].nombre = post.nombre
      productos[posision].descripcion = post.descripcion
      productos[posision].precio = post.precio
      callback({state: true, mensaje:"se actualizo trodo"})
    }
}



productosModel.eliminar =function(post,callback){

    const productoIndex = productos.findIndex(p => p.codigo === post.codigo);
    
    if (productoIndex !== -1) {
        productos.splice(productoIndex, 1);
        callback({ message: 'Producto eliminado correctamente' });
      } else {
        callback({ error: 'Producto no encontrado' });
      }
}

productosModel.listarporCodigo =function(post,callback){
    const producto = productos.find(p => p.codigo === post.codigo);

    if (producto) {
        callback(producto);
      } else {
        callback({ error: 'Producto no encontrado' });
      }
}
module.exports.productosModel = productosModel