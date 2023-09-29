// src/main.ts
import './style.css';
import Swal from 'sweetalert2';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="header">
      <h1>¡Para vos que eres alguien especial!</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/1068/1068731.png" class="icon-heart-header" alt="Corazón" />
    </div>
    <button id="counter" type="button">Dame clic!</button>
  </div>
`;

// Función para mostrar el modal
function mostrarModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.style.display = 'block'; // Mostrar el modal
  }
}

// Modificar el manejo del botón para mostrar la alerta personalizada
const counterButton = document.querySelector<HTMLButtonElement>('#counter')!;
counterButton.addEventListener('click', () => {
  Swal.fire({
    title: '¡Hola!',
    html: `
      <div class="heart-container-alert">
        <img src="https://cdn-icons-png.flaticon.com/512/1068/1068731.png" class="icon-heart-alert" alt="Corazón" />
      </div>
      <div>
        Ya sé que pasó la fecha de las flores amarillas, pero recordé que puedo hacer esto y espero que te guste. Te quiero <3
      </div>
      <br>
      <button id="btnAceptarAlert" class="modal-button">Aceptar</button>
    `,
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: false, // Evita que se cierre haciendo clic fuera
    didOpen: () => {
      // Agregar lógica para el botón "Aceptar" en la alerta
      const btnAceptarAlert = document.getElementById('btnAceptarAlert');
      if (btnAceptarAlert) {
        btnAceptarAlert.addEventListener('click', () => {
          Swal.close(); // Cerrar la alerta al hacer clic en "Aceptar"
          mostrarModal(); // Mostrar el modal
        });
      }

      // Agregar lógica para el botón "OK" en la alerta
      const btnOkAlert = document.getElementById('btnOkAlert');
      if (btnOkAlert) {
        btnOkAlert.addEventListener('click', () => {
          Swal.close(); // Cerrar la alerta al hacer clic en "OK"
        });
      }
    },
  });
});

// Agregar lógica para cerrar el modal al hacer clic en el botón "Aceptar" del modal
const btnAceptarModal = document.getElementById('btnAceptar');
if (btnAceptarModal) {
  btnAceptarModal.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = 'none'; // Ocultar el modal
    }
  });
}

// Agregar lógica para el botón "¿Una flor?"
const btnMostrarFlor = document.getElementById('btnMostrarFlor');
if (btnMostrarFlor) {
  btnMostrarFlor.addEventListener('click', () => {
    // Cierra el modal actual
    const modalActual = document.querySelector('.modal.show');
    if (modalActual) {
      (modalActual as HTMLElement).style.display = 'none';
    }

    const modalFlor = document.getElementById('modalFlor');
    if (modalFlor) {
      modalFlor.style.display = 'block'; // Muestra el nuevo modal de la flor
    }
  });
}

// Agregar lógica para el botón de cerrar del nuevo modal
const closeModalFlor = document.getElementById('close-modal-flor');
if (closeModalFlor) {
  closeModalFlor.addEventListener('click', () => {
    const modalFlor = document.getElementById('modalFlor');
    if (modalFlor) {
      modalFlor.style.display = 'none'; // Ocultar el nuevo modal
    }
  });
}

// Agregar lógica para el botón "Regresar"
const btnRegresar = document.getElementById('btnRegresar');
if (btnRegresar) {
  btnRegresar.addEventListener('click', () => {
    const modalFlor = document.getElementById('modalFlor');
    if (modalFlor) {
      modalFlor.style.display = 'none'; // Ocultar el nuevo modal
    }
  });
}

// Agregar lógica para el botón "Montón de Flores"
const btnMontonFlores = document.getElementById('btnMontonFlores');
if (btnMontonFlores) {
  btnMontonFlores.addEventListener('click', () => {
    // Cierra el modal actual
    const modalActual = document.querySelector('.modal.show');
    if (modalActual) {
      (modalActual as HTMLElement).style.display = 'none';
    }

    const modalMontonFlores = document.getElementById('modalMontonFlores');
    if (modalMontonFlores) {
      modalMontonFlores.style.display = 'block'; // Muestra el nuevo modal del montón de flores
    }
  });
}

// Agregar lógica para el botón "Regresar" en el modal del montón de flores
const btnRegresarMontonFlores = document.getElementById('btnRegresarMontonFlores');
if (btnRegresarMontonFlores) {
  btnRegresarMontonFlores.addEventListener('click', () => {
    const modalMontonFlores = document.getElementById('modalMontonFlores');
    if (modalMontonFlores) {
      modalMontonFlores.style.display = 'none'; // Ocultar el modal del montón de flores
    }
  });
}
