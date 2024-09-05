document.addEventListener('DOMContentLoaded', function(){
    const itemInput = document.getElementById('item');
    const agregarButton = document.getElementById('agregar');
    const limpiarButton = document.getElementById('limpiar');
    const contenedor = document.getElementById('contenedor');

    // Función para actualizar la vista del listado
    function updateList() {
        // Limpia la lista actual
        contenedor.innerHTML = '';
        
        // Obtiene los ítems del localStorage
        const items = JSON.parse(localStorage.getItem('items')) || [];
        
        // Agrega cada ítem a la lista
        items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = item;
            contenedor.appendChild(li);
        });
    }

    // Función para agregar un ítem
    function addItem() {
        const newItem = itemInput.value.trim();
        
        if (newItem) {
            // Obtiene los ítems actuales del localStorage
            const items = JSON.parse(localStorage.getItem('items')) || [];
            
            // Agrega el nuevo ítem a la lista
            items.push(newItem);
            
            // Guarda la lista actualizada en el localStorage
            localStorage.setItem('items', JSON.stringify(items));
            
            // Actualiza la vista del listado
            updateList();
            
            // Limpia el campo de entrada
            itemInput.value = '';
        }
    }

    // Función para limpiar el listado
    function clearList() {
        // Elimina los ítems del localStorage
        localStorage.removeItem('items');
        
        // Actualiza la vista del listado
        updateList();
    }

    // Configura los eventos de los botones
    agregarButton.addEventListener('click', addItem);
    limpiarButton.addEventListener('click', clearList);

    // Actualiza la vista del listado al cargar la página
    updateList();
})
