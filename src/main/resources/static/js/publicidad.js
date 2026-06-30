    // Datos de ejemplo
    const anuncios = [
    {
        id: 1,
        titulo: ' Descuento en Gorras AVICCI',
        descripcion: 'Aprovecha 2x1 en la Gorra AVICCI por tiempo limitado. Diseño deportivo con ajuste cómodo.',
        imagen: '/img/1.avif',
    },
    {
        id: 2,
        titulo: ' Nuevas Gorras Marea Originals',
        descripcion: 'Acaban de llegar nuevas Marea Originals. Estilo clásico ideal para uso diario.',
        imagen: '/img/2.avif',
    },
    {
        id: 3,
        titulo: ' Colección Urbana RVCA',
        descripcion: 'Descubre las nuevas RVCA 59FIFTY y Essentials con estilo urbano y materiales premium.',
        imagen: '/img/3.avif',
    },
];

    const adGrid = document.getElementById('ad-grid');

    // Para crear un anuncio
    function createAdCard(anuncio) {
        const card = document.createElement('div');
        card.className = 'ad-card';
        card.setAttribute('data-id', anuncio.id);
        
        card.innerHTML = `
            <img src="${anuncio.imagen}" alt="${anuncio.titulo}" class="ad-image">
            <div class="ad-content">
                <h3>${anuncio.titulo}</h3>
                <p>${anuncio.descripcion}</p>
            </div>
            <div class="ad-actions">
                <button class="ad-action-button edit-ad-btn" title="Modificar Anuncio">
                    <span class="material-icons">edit</span>
                </button>
                <button class="ad-action-button delete-ad-btn" title="Eliminar Anuncio">
                    <span class="material-icons">delete</span>
                </button>
            </div>
        `;

        card.querySelector('.edit-ad-btn').addEventListener('click', () => {
            alert(`Modificar anuncio: ${anuncio.titulo}`);
        });
        
        card.querySelector('.delete-ad-btn').addEventListener('click', () => {
            if (confirm(`¿Estás seguro de que quieres eliminar el anuncio "${anuncio.titulo}"?`)) {
                alert(`Anuncio "${anuncio.titulo}" eliminado.`);
                card.remove();
            }
        });
        
        return card;
    }

    // Renderizar tarjetas
    anuncios.forEach(item => {
        const card = createAdCard(item);
        adGrid.appendChild(card);
    });

    // Evento para el botón añadir anuncio
    document.getElementById('addAdButton').addEventListener('click', () => {
        alert('Redirigiendo... para añadir un nuevo anuncio.');
    });
