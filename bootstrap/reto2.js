
let carrito= [];

 /*agregar al carrito*/

    $(".agregar").click (function() {
        let articulo = {

             nombre: $(this).attr("nombre"),
             precio: $(this).attr("precio")
        }
        console.log(articulo);

        carrito.push(articulo);
   })

 /*mostrar carrito*/

   $(".carrito").click(function(){

       console.log(carrito);

   })


   function total(){

       let total =0;

       for(i=0; i<carrito.length; i++){

            total += Number(carrito[i].precio);
       }
       $(".total").text(total);
    }




