// Array creado 
const peliculas = [
    {
        titulo: 'los vengadores',
        estreno: 2019,
        genero: 'Ciencia Ficción',
        horario: '21.00 PM',
        director: 'Anthony Russo',
        descripcion: 'Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que destruyo el planeta y el universo.',
        premiosGanados: 'Premios Annie, Gremio de Directores de Arte, Premios Golden Tomato, Premios de Cine de Hollywood, Premio a Mejores efectos visuales',
        actoresPrincipales: 'Robert Downey Jr, Chris Evans, Chris Hemsworth, Mark Ruffalo, Josh Brolin, Scarlett Johansson.'
    },
    {
        titulo: 'capitan america',
        estreno: 2014,
        genero: 'Ciencia Ficción',
        horario: '18.00 PM',
        director: 'Anthony Russo',
        descripcion: 'Capitán América, Viuda Negra y un nuevo aliado, Falcon, se enfrentan a un enemigo inesperado mientras intentan exponer una conspiración que pone en riesgo al mundo.',
        premiosGanados: 'Golden Trailer Awards, Actor de acción favorito',
        actoresPrincipales: 'Chris Evans, Scarlett Johansson, Sebastian Stan, Anthony Mackie, Samuel L. Jackson.'
    },
    {
        titulo:'batman vs superman',
        estreno: 2016,
        genero: 'accion',
        horario:'21.00 PM',
        director: 'zack snyder',
        descripcion: 'Batman se enfrenta a Superman, temeroso de que su afán de poder termine nublando su lucha contra la injusticia y lo convierta en un villano. Mientras los héroes pelean, una amenaza terrible se acerca sobre la humanidad.',
        premiosGanados: 'Golden Trailer Awards, obtuvo numerosas nominaciones pero en ninguna otra oportunidad fue capaz de llevarse el premio',
        actoresPrincipales: 'Ben Affleck, Henry Cavill, Jesse Eisenberg, Amy Adams, Jeremy Irons.'
    },
    {
        titulo:'300',
        estreno: 2006,
        genero: 'accion',
        horario:'20.00 PM',
        director: 'zack snyder',
        descripcion: 'En el año 480 antes de Cristo, existe un estado de guerra entre Persia, dirigidos por el Rey Xerxes, y Grecia. En la Batalla de Thermopylae, Leonidas, rey de la ciudad griega de Esparta, encabeza a sus guerreros en contra del numeroso ejército persa.',
        premiosGanados: 'Premio Satellite a los Mejores Efectos Visuales, MTV Movie Award a la Mejor Pelea, Premio Saturn al mejor director, BMI Film Music Award ',
        actoresPrincipales: 'Gerard Butler, Lena Headey, David Wenham, Rodrigo Santoro, Vincent Regan.'
    }, 
    {
        titulo:'transformers',
        estreno: 2014,
        genero: 'ciencia ficcion',
        horario:'17.00 PM',
        director: 'michael bay',
        descripcion: 'El Mientras la humanidad recoge las piezas después de una batalla épica, un grupo oscuro emerge para ganar control de la historia. Mientras tanto, una poderosa y nueva amenaza pone su mirada en la Tierra. América lidera un equipo de héroes para proteger al mundo de un villano malvado.',
        premiosGanados: 'Mejores efectos visuales del año, Golden Trailer Awards, Premios Annie',
        actoresPrincipales: 'Mark Wahlberg, Nicola Peltz, Jack Reynor, Bumblebee'
    }, 
];

//Funcion para dar la bienvenida al programa
function mostrarSaludo() {
    // Un agregado para mostrar la hora actual
    const fechaActual = new Date();
    const horaActual = fechaActual.toLocaleTimeString();

    // Mostrar un mensaje de bienvenida
    alert(`¡Bienvenidos a nuestra Cartelera de Cine!\nHora actual: ${horaActual}`);

    // Mostrar las películas disponibles que estan dentro del array 
    console.log('Peliculas disponibles:');
    peliculas.forEach(pelicula => {
        console.log(`Titulo: ${pelicula.titulo} - Estreno: ${pelicula.estreno} - Genero: ${pelicula.genero} - Horario: ${pelicula.horario} - Director: ${pelicula.director}`);
        console.log("---------------------------");
    });

    // Pedirle al usuario que ingrese el título de la película
    let tituloElegido = prompt('Ingrese el título de la película que desea ver:');
    mostrarDescripcionPelicula(tituloElegido);
}

// Funcion para mostrar la descripcion de la pelicula
function mostrarDescripcionPelicula(titulo) {
    // Buscar la película seleccionada por el usuario
    const peliculaElegida = peliculas.find(pelicula => pelicula.titulo.toLowerCase() === titulo.toLowerCase());

    if (peliculaElegida) {
        console.log(`Breve sinopsis de  "${peliculaElegida.titulo}": ${peliculaElegida.descripcion}`);
        alert(`Has elegido la película "${peliculaElegida.titulo}"`);
        preguntarDetalleAdicional(peliculaElegida);
    } 
}

// Funcion para decirle al usuario si desea ver mas detalles o no
function preguntarDetalleAdicional(pelicula) {
    let verDetalle = prompt('¿Desea ver más detalles de la película? (si/no)');
    if (verDetalle === 'si') {
        console.log(`Premios Principales obtenidos:  ${pelicula.premiosGanados}`);
        console.log(`Actores Principales:   ${pelicula.actoresPrincipales}`)
    } else {
        console.log('Gracias por visitar nuestra Cartelera de Cine. ¡Que tengas un buen día!');
    }
}

// Llamar a la función para mostrar el saludo y la lista de películas al cargar la página
mostrarSaludo();
