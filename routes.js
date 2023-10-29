const { response, request } = require("express");

const productosController = require("./api/controlador/productosController.js").productosController

app.post('/Productos/Guardar',function(request, response) {
  productosController.Guardar(request,response)
 });
  
app.post('/Productos/Modificar',function(request, response) {
   productosController.modificar(request,response)
});
  

app.delete('/Productos/Eliminar', (request, response) => {
    productosController.eliminar(request,response)
});
  
app.get('/Productos/ListarTodos', (request, response) => {
   productosController.listar(request,response)
});
  
app.get('/Productos/ListarporCodigo/:codigo', (request, response) => {
   productosController.ListarporCodigo(request,response)
});