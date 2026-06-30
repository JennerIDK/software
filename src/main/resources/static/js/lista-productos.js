document.addEventListener('DOMContentLoaded', function () {

    // --- Elementos principales ---
    const productTableBody = document.getElementById('productTableBody');
    const modal = document.getElementById('product-modal');
    const form = document.getElementById('product-form');
    const modalTitle = document.getElementById('modal-title');

    const codeGroup = document.getElementById('product-code-group');
    const inputCodigo = document.getElementById('product-code');
    const inputNombre = document.getElementById('product-name');
    const inputPrecio = document.getElementById('product-price');
    const inputCantidad = document.getElementById('product-quantity');
    const inputEstado = document.getElementById('product-stock');
    const inputTipo = document.getElementById('product-type'); // SELECT tipos

    // --- Abrir modal con datos de producto (EDITAR) ---
    productTableBody.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;

        const codigo = button.dataset.codigo;

        if (button.classList.contains('edit-btn')) {
            const producto = {
                codigo: codigo,
                nombre: button.dataset.nombre,
                precio: button.dataset.precio,
                stock: button.dataset.stock,
                estado: button.dataset.estado,
                tipoId: button.dataset.tipo // viene del SELECT
            };
            openModal(producto);
        }

        // --- Eliminar producto ---
        if (button.classList.contains('delete-btn')) {
            if (confirm(`¿Seguro que deseas eliminar el producto N° ${codigo}?`)) {
                window.location.href = `/productos/eliminar/${codigo}`;
            }
        }
    });

    // --- Abrir modal NUEVO producto ---
    const addProductBtn = document.getElementById('addListedProductBtn');
    addProductBtn.addEventListener('click', () => {
        openModal(); // sin producto = nuevo
    });

    // --- Función principal para abrir el modal ---
    function openModal(producto = null) {
        form.reset();
        form.action = '/productos/agregar';
        modal.classList.remove('hidden');

        if (producto) {
            // Editar
            modalTitle.textContent = 'Editar Producto';
            codeGroup.style.display = 'block';
            inputCodigo.value = producto.codigo;
            inputCodigo.readOnly = true;
            inputNombre.value = producto.nombre;
            inputPrecio.value = producto.precio;
            inputCantidad.value = producto.stock;
            inputEstado.value = producto.estado;
            inputTipo.value = producto.tipoId || ""; // asigna tipo
        } else {
            // Agregar
            modalTitle.textContent = 'Agregar Producto';
            codeGroup.style.display = 'none'; // ocultar código
            inputCodigo.readOnly = false;
            inputTipo.value = "";
        }
    }

    // --- Cerrar modal ---
    document.querySelector('.close-btn').addEventListener('click', () => {
        modal.classList.add('hidden');
    });
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // --- Ocultar mensajes de éxito/error si hay ---
    const successMessage = document.querySelector('.alert-success');
    const errorMessage = document.querySelector('.alert-danger');
    if (successMessage) setTimeout(() => successMessage.style.display = 'none', 4000);
    if (errorMessage) setTimeout(() => errorMessage.style.display = 'none', 4000);

});
