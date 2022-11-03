// Defino valor de ticket
const valorTicket = 200;

// Defino porcentajes de descuento según categoría
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

// Elementos en variables
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");

let totalValorTickets=(cantidadTickets.value)*valorTicket;


//aplico descuentos

function total_a_pagar() {
    if (categoria.value==0) 
    {
        totalValorTickets=totalValorTickets;
    }
    if (categoria.value==1) 
    {
        totalValorTickets=totalValorTickets-(descuentoEstudiante/100 * totalValorTickets)
    }
    if (categoria.value==2) 
    {
       totalValorTickets=totalValorTickets-(descuentoTrainee/100 *totalValorTickets) 
    }
    if (categoria.value==3)
     {
        totalValorTickets=totalValorTickets-(descuentoJunior/100 *totalValorTickets) 
    }


totalPago.innerHTML=totalValorTickets;


}

function reset() {
    totalPago.innerHTML="";
}
//evento de escucha del botón resumen
btnResumen.addEventListener("click",total_a_pagar)

//evento de escucha del botón borrar
btnBorrar.addEventListener("click",reset)

/*  //Desarrollo funcion 
function reset_total_a_pagar()
{
    quitarClaseError();
    totalPago.innerHTML="";
}


//evento de escucha boton resumen.
btnResumen.addEventListener("click",total_a_pagar);
//evento de escucha boton borrar.

btnBorrar.addEventListener("click",reset_total_a_pagar);
*/