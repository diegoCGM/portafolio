
const d = document;
const $formNombre = d.querySelector('#form-name');
const $formCorreo = d.querySelector('#form-correo');
const $formmensaje = d.querySelector('#form-mensaje');
const $formulario = d.querySelector('#contact');


const mensaje = d.createElement('p');
mensaje.textContent ="llena todos los campos";
mensaje.classList.add('mensaje');
const error = d.querySelectorAll('.mensaje');

//console.log($formNombre);


ListnerEvents();

function ListnerEvents(){


    $formNombre.addEventListener('blur',validarcampos);
    $formCorreo.addEventListener('blur',validarcampos);
    $formmensaje.addEventListener('blur',validarcampos);

}


function validarcampos(e){
   
    console.log(e.target)

    // if(e.target.value ==""){

    //     mostrarError();
    // }else{
       
        

    // }

    


    if($formCorreo.value !='' && $formNombre !=''&&  $formmensaje.value !=''){

          mensaje.remove();

   // console.log("pasale joven");
    }else{

        mostrarError();
    }

    
   
}

function mostrarError(){

  
    
   

    if(error.length ==0){
        $formulario.appendChild(mensaje);

    }



    

console.log("mensaje de error");

}


