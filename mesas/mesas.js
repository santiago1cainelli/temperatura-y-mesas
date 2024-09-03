let mesaIluminada = null;

const mesas = Array.from({length: 10}, () => Math.floor(Math.random() * 5));

function mostrarMesas() {
    const container = document.getElementById('mesas-container');
    container.innerHTML = '';
    mesas.forEach((mesa, index) => {
        const mesaDiv = document.createElement('div');
        mesaDiv.className = 'mesa';
        mesaDiv.id = `mesa-${index + 1}`;

        const mesaContent = document.createElement('div');
        mesaContent.className = 'mesa-content';
        mesaContent.textContent = `Mesa N°${index + 1}: ${mesa === 0 ? 'Vacía' : mesa}`;
        mesaContent.id = `mesa-content-${index + 1}`;
        mesaDiv.appendChild(mesaContent);

        container.appendChild(mesaDiv);
    });
}

function asignarMesa(numClientes) {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = '';

    if (numClientes > 4) {
        mensaje.textContent = 'Lo siento, no admitimos grupos de más de 4 personas. Haga grupos más pequeños e intente de nuevo.';
        return;
    }

    let mesaAsignada = false;

    // Buscar la primera mesa libre
    for (let i = 0; i < mesas.length; i++) {
        if (mesas[i] === 0) {
            mesas[i] = numClientes;
            mensaje.textContent = `Por favor, siéntese en la mesa N°${i + 1}`;
            iluminarMesa(i + 1);
            mesaAsignada = true;
            break;
        }
    }

    // Si no hay mesa libre, buscar una con espacio suficiente
    if (!mesaAsignada) {
        for (let i = 0; i < mesas.length; i++) {
            if (mesas[i] + numClientes <= 4) {
                mesas[i] += numClientes;
                mensaje.textContent = `Por favor, siéntese en la Mesa ${i + 1}`;
                iluminarMesa(i + 1);
                mesaAsignada = true;
                break;
            }
        }
    }

    // Si no se pudo asignar una mesa
    if (!mesaAsignada) {
        mensaje.textContent = 'No hay mesas disponibles para el grupo.';
    }

    mostrarMesas();
}

function iluminarMesa(numeroMesa) {
    if (mesaIluminada !== null) {
        document.getElementById(`mesa-content-${mesaIluminada}`).classList.remove('iluminada');
    }
    mesaIluminada = numeroMesa;
    const mesaContent = document.getElementById(`mesa-content-${numeroMesa}`);
    mesaContent.classList.add('iluminada');
}

function registrar_clientes() {
    if (mesaIluminada !== null) {
        document.getElementById(`mesa-content-${mesaIluminada}`).classList.remove('iluminada');
        mesaIluminada = null;
    }
    const numClientes = prompt("¿Cuántos clientes son?");
    if (numClientes) {
        asignarMesa(parseInt(numClientes));
    }
}

mostrarMesas();