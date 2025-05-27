const boton1 = document.getElementById('boton1');

let boton1X = 0;
let boton1Y = 0;
let boton1VelX = 2;
let boton1VelY = 2;

function moveBoton1() {
  boton1X += boton1VelX;
  boton1Y += boton1VelY;

  const maxX = window.innerWidth - boton1.offsetWidth + 1750;
  const maxY = window.innerHeight - boton1.offsetHeight + 150;

  if (boton1X <= 0 || boton1X >= maxX) {
    boton1VelX *= -1;
  }

  if (boton1Y <= 0 || boton1Y >= maxY) {
    boton1VelY *= -1;
  }

  boton1.style.left = boton1X + 'px';
  boton1.style.top = boton1Y + 'px';
}

setInterval(moveBoton1, 1000 / 60);

boton1.addEventListener('click', () => {
  boton1.style.display = 'none';
  createBotones("esto no es un verso", 5);
});

function createBotones(texto, cantidad) {
  const botones = Array.from({ length: cantidad }, () => ({
    texto: texto,
    contenido: 'notfound.html',
    velocidadX: Math.random() * 4 - 2, // Velocidad aleatoria en el rango [-2, 2]
    velocidadY: Math.random() * 4 - 2 // Velocidad aleatoria en el rango [-2, 2]
  }));

  const botonesActuales = document.querySelectorAll('.boton');
  botonesActuales.forEach(boton => {
    boton.style.display = 'none';
  });

  botones.forEach((botonInfo) => {
    const boton = document.createElement('div');
    boton.classList.add('boton');
    boton.textContent = botonInfo.texto;
    boton.style.left = Math.random() * (window.innerWidth + 1750) + 'px';
    boton.style.top = Math.random() * (window.innerHeight + 150) + 'px';
    document.body.appendChild(boton);

    let velX = botonInfo.velocidadX;
    let velY = botonInfo.velocidadY;
    let posX = parseInt(boton.style.left);
    let posY = parseInt(boton.style.top);

    function moveBoton() {
      posX += velX;
      posY += velY;

      const maxX = window.innerWidth - boton.offsetWidth + 1750;
      const maxY = window.innerHeight - boton.offsetHeight + 150;

      if (posX <= 0 || posX >= maxX) {
        velX *= -1;
      }

      if (posY <= 0 || posY >= maxY) {
        velY *= -1;
      }

      boton.style.left = posX + 'px';
      boton.style.top = posY + 'px';
    }

    setInterval(moveBoton, 1000 / 60);

    boton.addEventListener('click', () => {
      let newTexto = '';
      switch (botonInfo.texto) {
        case "esto no es un verso":
          newTexto = "esto no es una palabra";
          createBotones(newTexto, 25);
          break;
        case "esto no es una palabra":
          newTexto = "esto no es una letra";
          createBotones(newTexto, 125);
          break;
        case "esto no es una letra":
          newTexto = "es un jardín descuidado";
          createBotones(newTexto, 325);
          break;
        case "es un jardín descuidado":
          newTexto = "lleno de maleza";
          createBotones(newTexto, 500);
          break;  
        case "lleno de maleza":
          newTexto = "y de otras cosas lindas";
          createBotones(newTexto, 1000);
          break;
        case "y de otras cosas lindas":
          newTexto = "que se mueren";
          createBotones(newTexto, 2000);
          break;
        case "que se mueren":
          newTexto = "todo el tiempo";
          createBotones(newTexto, 3000);
          break;
        case "todo el tiempo":
          newTexto = "esto no es un poema";
          createBotones(newTexto, 1);
          break;
        case "esto no es un poema":
          newTexto = "es un problema";
          createBotones(newTexto, 20000);
          break;  
        case "es un problema":
          window.open('sembrar.html', 'popupWindow', 'width=1400,height=600,left=20,top=200');
          break;
        default:
          newTexto = "esto no es un verso";
          break;
      }
    });
  });
}

let timeout;

  function reiniciarTemporizador() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      location.reload();
    }, 600000); // 10 segundos
  }

  function iniciarDetecciónInactividad() {
    const eventos = ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'];
    eventos.forEach(evento => {
      document.addEventListener(evento, reiniciarTemporizador);
    });
    reiniciarTemporizador();
  }

  window.onload = iniciarDetecciónInactividad;
