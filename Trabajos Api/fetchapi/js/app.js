document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);
document.getElementById('pokeBtn').addEventListener('click', buscarPokemon);

function cargarTXT() {
    fetch('datos.txt')
        .then(function(res) {
            return res.text();
        })
        .then(function(empleados) {
            console.log(empleados);
            document.getElementById('resultado').innerHTML = empleados;
        })
        .catch(function(error) {
            console.log(error);
        });
}

function cargarJSON() {
    fetch('empleados.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            let html = '';

            data.forEach(function(empleado) {
                html += `
                    <li></br>${empleado.nombre} </br>-${empleado.puesto}</li>
                `;
            });

            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        });
}

function cargarREST() {
    fetch('https://picsum.photos/list')
        .then(function(res) {
            return res.json();
        })
        .then(function(imagenes) {

            const grupos = {};

            imagenes.forEach(function(imagen) {
                if (!grupos[imagen.author]) {
                    grupos[imagen.author] = [];
                }

                grupos[imagen.author].push(imagen);
            });

            let html = `
                <div class="autores-container">
            `;

            for (const author in grupos) {

                html += `
                    <div class="autor-card">

                        <div class="autor-header">
                            <h2>${author}</h2>
                            <span>${grupos[author].length} imágenes</span>
                        </div>

                        <div class="autor-imagenes">
                `;

                grupos[author].forEach(function(imagen) {
                    html += `
                        <div class="imagen-card">
                            <img 
                                src="https://picsum.photos/id/${imagen.id}/300/200"
                                alt="${imagen.author}"
                            >
                            <p>ID: ${imagen.id}</p>
                        </div>
                    `;
                });

                html += `
                        </div>
                    </div>
                `;
            }

            html += `
                </div>
            `;

            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);

            document.getElementById('resultado').innerHTML = `
                <p class="error">
                    ❌ No se pudieron cargar las imágenes.
                </p>
            `;
        });
}


async function buscarPokemon(e) {
    e.preventDefault();

    const nombreInput = document.getElementById('pokeInput').value.trim().toLowerCase();
    const resultadoDiv = document.getElementById('resultado');

    if (nombreInput === '') {
        resultadoDiv.innerHTML = '<p style="color: orange;">⚠️ Por favor, ingresa el nombre o número de un Pokémon.</p>';
        return;
    }

    resultadoDiv.innerHTML = '<p>🔄 Cargando información del Pokémon...</p>';

    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombreInput}`);
        if (!respuesta.ok) {
            throw new Error(`El Pokémon "${nombreInput}" no existe o no fue encontrado.`);
        }
        const data = await respuesta.json();

        const tipos = data.types.map(t => t.type.name).join(', ');

        const html = `
            <div class="pokemon-card">
                <h2>${data.name.toUpperCase()} (#${data.id})</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p><strong>Tipo(s):</strong> ${tipos}</p>
                <p><strong>Peso:</strong> ${data.weight / 10} kg | <strong>Altura:</strong> ${data.height / 10} m</p>
            </div>
        `;
        resultadoDiv.innerHTML = html;

    } catch (error) {
        console.error('Detalle del error atrapado:', error);
        resultadoDiv.innerHTML = `<p style="color: red;">❌ Error: ${error.message}</p>`;
    }
}