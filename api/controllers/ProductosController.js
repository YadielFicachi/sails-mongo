/**
 * ProductosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    //funcion list
    list:function(req,res){
        Productos.find({}).exec(function(err, productos){
            if (err){
                res.send(500,{error: 'Error de Base de datos'});
            }
            res.view('list', {productos:productos})

        });

    },

    //funcion new
    new:function (req,res){
        console.log('entre al formulario de registro de productos');
        res.view('new');
    },

    //funcion create
    /*create:function(req, res){
        var productosObj={
            codigo_producto:req.param('codigo_producto'),
            descripcion_prod:req.param('descripcion_prod'),
            unidad_venta:req.param('unidad_venta')
        }
        Productos.create(productosObj, function (err, productos){
            if (err)
            {
                res.send(500, {error:'Error de Base de Datos'});
            }
            res.redirect('/productos/list');
        });
    },*/

    create:function(req,res){
        var codigo_producto = req.body.codigo_producto;
        var descripcion_prod = req.body.descripcion_prod;
        var unidad_venta = req.body.unidad_venta;

        Productos.create({codigo_producto:codigo_producto, descripcion_prod:descripcion_prod,unidad_venta:unidad_venta}).exec(function(err){
            if (err){
                res.send(500, {error: 'Error de base de datos'});
            }
            res.redirect('/productos/list');
        });
    },
//funcion delete
/*destroy:function(req, res, next){
Producto.findOne(req.param('id'), function foundProducto (err, producto){
    if (err) return next(err);
    if (!producto) return next('Producto no existe.');
    Producto.destroy(req.param('id'), function productoDestroyed(err){
        if (err) return next(err);
    });
    res.redirect('/productos/list');
});
},*/
    destroy:function(req, res){
       /* Productos.destroy({id:req.params.id}).then(function (result) {
            console.log(result);
            res.redirect('/productos/list');
         }).catch(function (err) {
              console.log(err);
         });*/

      
         
            /*Productos.destroy(req.param('id')).exec(function(err, producto){
                if(err) return res.serverError();
                return res.redirect('/productos/list');
            });*/
       
          Productos.destroy({id:req.param('id')}).exec(function(err){
            if (err)
            {
                console.log(err);
                res.send(500, {error:'Error de Base de Datos'});
            }
            res.redirect('/productos/list');
        });
        
        return false;
    },

//funcion edit
    edit:function(req, res){
        Productos.findOne({id:req.params.id}).exec(function(err, product){
            if (err)
            {
                console.log(err);
                res.send(500, {error:'Error de Base de Datos'});
            }
            res.view('productos/edit', {producto:producto});
        });
    },
    //funcion update
    update:function(req,res){
        var productosObj={
            codigo_producto:req.param('codigo_producto'),
            descripcion_prod:req.param('descripcion_prod'),
            unidad_venta:req.param('unidad_venta')
        }
        Productos.update({id:req.params.id},productosObj, function (err, productos){
            if (err)
            {
                res.send(500, {error:'Error de Base de Datos'});
            }
            res.redirect('/productos/list');
        });
        return false;
    },

    buscar:function(req, res){
        Productos.find({id:req.params.id}).exec(function(err, productos){
            if (err){
                res.send(500,{error: 'Error de Base de datos'});
            }
            res.view('list', {productos:productos})

        });

    },
   

};

