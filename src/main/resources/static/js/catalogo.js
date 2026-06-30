document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo
    const productos = [
                    {
                id: 1,
                nombre: 'Gorra AVICCI',
                descripcion: 'Gorra deportiva de algodón con ajuste trasero y logo bordado.',
                imagen: '/img/1.avif',
                stock: 25
            },
            {
                id: 2,
                nombre: 'Gorra Marea Originals',
                descripcion: 'Gorra clásica con visera plana y diseño cómodo para uso diario.',
                imagen: '/img/2.avif',
                stock: 18
            },
            {
                id: 3,
                nombre: 'Gorra RVCA 59FIFTY',
                descripcion: 'Gorra de estilo urbano con estructura rígida y ajuste cerrado.',
                imagen: '/img/3.avif',
                stock: 12
            },
            {
                id: 4,
                nombre: 'Gorra RVCA Essentials',
                descripcion: 'Gorra ligera y transpirable, ideal para actividades al aire libre.',
                imagen: '/img/4.avif',
                stock: 30
            }
    ];

    const productGrid = document.getElementById('product-grid');

    // Para crear una tarjeta de producto
    function createProductCard(producto) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-id', producto.id);
        
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
            <div class="product-info">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p><strong>Stock:</strong> ${producto.stock}</p>
            </div>
            <div class="product-actions">
                <button class="action-button edit" title="Modificar Producto">
                    <span class="material-icons">edit</span>
                </button>
                <button class="action-button delete" title="Eliminar Producto">
                    <span class="material-icons">delete</span>
                </button>
            </div>
        `;
        
        // Agregar eventos a los botones
        card.querySelector('.edit').addEventListener('click', () => {
            // Llama a la función global del otro script para abrir el modal en modo edición
            if (window.openEditModal) {
                window.openEditModal(producto);
            }
        });
        
        card.querySelector('.delete').addEventListener('click', () => {
            if (confirm(`¿Estás seguro de que quieres eliminar el producto: ${producto.nombre}?`)) {
                //Aqui va la logica para eliminar en una BD
                card.remove();
            }
        });
        
        return card;
    }

    // Renderizar tarjetas de producto
    productos.forEach(producto => {
        const card = createProductCard(producto);
        productGrid.appendChild(card);
    });
    //declaramos productcart para que funcione en el otro script
    window.createProductCard = createProductCard;
    window.productos = productos;

});
