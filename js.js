let puma = document.getElementById('puma');
let gato = document.getElementById('gato');
let loro = document.getElementById('loro');
let droZone = document.getElementById('droZone');
let dropPuma = document.getElementById('dropPuma');
let dropGato = document.getElementById('dropGato');
let dropLoro = document.getElementById('dropLoro');
let agregarImg = document.getElementById('imagen');
let titulo = document.getElementById('titulo');

let draggedElement = null;

//Funcion para que variable tome valor del objeto tomado
function handleDragStart(event) {
    draggedElement = event.target.cloneNode(true)

}

//Cuando comienza arrastre se debe tomar el valor del objeto
puma.addEventListener('dragstart', handleDragStart)
gato.addEventListener('dragstart', handleDragStart)
loro.addEventListener('dragstart', handleDragStart)


//Cuando se arrastre sobre la zona debe prevenir que quiera
//abrir el elemento como un enlace y se pueda aladir un elemento
droZone.addEventListener('dragover', function(event) {
    event.preventDefault();
});


//Cuando en dropZone se suelte un elemento en una zona, esta zona
//se debe analizar si esa zona tiene el id o empieza con drop
//que es zona para dejar, si es una zona para dejar se agrega el
//elemento a la zona
droZone.addEventListener('drop', function(event) {
    let dropTarget = event.target;

    if (dropTarget.id && dropTarget.id.startsWith('drop')) {
        dropTarget.prepend(draggedElement); 

        
         // Verificar si todos los elementos han sido soltados en las zonas correspondientes
         if (dropPuma.children.length > 0 && dropGato.children.length > 0 && dropLoro.children.length > 0) {
           
            }if (
                dropPuma.children[0].dataset.value == 1 &&
                dropGato.children[0].dataset.value == 2 &&
                dropLoro.children[0].dataset.value == 3
            ){
                setTimeout(function(){
                    let nombre = prompt("Por favor escribe tu nombre")
                    titulo.innerText = "¡Acertasteeeeee! " + nombre + " 😁";
                },1000)
                
            }else{
                
            }
    

        
    }

   
});


