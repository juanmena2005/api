const productosModel= require("../modelos/productosModel.js").productosModel
const productosController={}

productosController.Guardar = function(request,response){
    try{
        const post ={
        
            
             codigo: request.body.codigo,
             nombre: request.body.nombre,
             descripcion: request.body.descripcion,
            precio: request.body.precio
        }
        
                console.log(post)
              
                  if (post.codigo == undefined || post.codigo == null || post.codigo ==""){
                    response.json({ state: false, mensaje:"el  codigo es obligatorio"})
                    return false
               
                  }
                  if (post.nombre == undefined || post.nombre == null || post.nombre ==""){
                    response.json({ state: false, mensaje:"el nombre es obligatorio"})
                    return false
                  }
                  if (post.descripcion == undefined || post.descripcion == null || post.descripcion ==""){
                    response.json({ state: false, mensaje:"el  descripcion  es obligatorio"})
                    return false
                  }
                
                  if (post.precio == undefined || post.precio == null || post.precio ==""){
                    response.json({ state: false, mensaje:"el  precio es obligatorio"})
                    return false
                  }
              
                   
                   productosModel.Guardar(post,function(respuesta){
                    response.json(respuesta)
                   })
                
              }catch (error){
                  response.json({state: false, mensaje:"algo paso"})
                  console.log(error)
                  
              }
              
        }
productosController.listar = function(request,response){
    productosModel.listar(null,function(respuesta){
        response.json(respuesta)
    })
}

productosController.modificar = function(request,response){

    const post ={

     nombre : request.body.nombre,
     codigo : request.body.codigo,
     descripcion : request.body.descripcion,
     precio : request.body.precio
    }
   
  
    if (post.codigo == undefined ||post.codigo == null || post.codigo ==""){
      response. json({ state: false, mensaje:"el campo codigo es obligatorio"})
      return false
    }
    if (post.nombre == undefined || post.nombre == null || post.nombre ==""){
      response. json({ state: false, mensaje:"el nombre es obligatorio"})
      return false
    }
    if (post.descripcion == undefined || post.descripcion== null || post.descripcion ==""){
      response. json({ state: false, mensaje:"el campo descripcion  es obligatorio"})
      return false
    }
  
    if (post.precio == undefined || post.precio == null || post.precio ==""){
      response. json({ state: false, mensaje:"el campo precio es obligatorio"})
      return false
    }
  
  productosModel.modificar(post, function(respuesta){
    response.json(respuesta)
  })
  
}

productosController.eliminar = function(request,response){
    
    const post ={
        codigo: request.body.codigo
    }
    if (post.codigo == undefined ||post.codigo == null || post.codigo ==""){
        response. json({ state: false, mensaje:"el campo codigo es obligatorio"})
        return false
      }
    productosModel.eliminar(post,function(respuesta){
        response.json(respuesta)
    })
}

productosController.ListarporCodigo = function(request,response){
    const post ={
        codigo: request.body.codigo
    }
    
    if (post.codigo == undefined ||post.codigo == null || post.codigo ==""){
        response. json({ state: false, mensaje:"el campo codigo es obligatorio"})
        return false
      }
      
      productosModel.listarporCodigo(post,function(respuesta){
        response.json(respuesta)
    })
  
  
    
}
module.exports.productosController = productosController