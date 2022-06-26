/* Preguntas y respuestas del quiz,
pense en meter mas pregunta pero pense que con 30 estaba bien jajaj
comentario por cada pregunta
voy a escribir de que personaje trata cierta cantidad de Preguntas */

// Pregunta 1: Thrall


const quiz= [{
    numero:1, 
    pregunta: "¿Cuál es el objetivo de Thrall en Warcraft 3?", 
    respuesta:"Encontrar un lugar tranquilo para crear un hogar para todos", 
    respuesta2:"Para invadir y dominar Kalimdor", 
    respuesta3:"Para buscar el oraculo",
    respuesta4:"Para matar a los refugiados de Jaina"
},

// Pregunta 2
{   numero:2, 
    pregunta: "¿Qué es lo más cercano que tuvo Thrall como familia?", 
    respuesta:"Grom Hellscream", 
    respuesta2:"Cairne Bloodhoof", 
    respuesta3:"Rexxar",
    respuesta4:"Durotan, su padre"
},

// Pregunta 3
{   numero:3, 
    pregunta: "¿Quién crio a Go'el?", 
    respuesta:"Un esclavista", 
    respuesta2:"Los orcos", 
    respuesta3:"Los trolls",
    respuesta4:"Los magos"
},


// Pregunta 4
{   numero:4, 
    pregunta: "¿Que profesion sigue Thrall o Go'el?", 
    respuesta:"Vidente", 
    respuesta2:"Guerrero", 
    respuesta3:"Asesino",
    respuesta4:"Lider"
},

// Pregunta 5: Illidan
{   numero:5, 
    pregunta: "¿Por qué Ilidan destruyo la calavera de Gul'dan?", 
    respuesta:"Liberar a los bosques y matar a Tichondrius", 
    respuesta2:"Para conseguir poder y derrotar a Tichondrius", 
    respuesta3:"Para que deje de hablarle que le molestaba mucho",
    respuesta4:"Para romper la maldicion"
},

// Pregunta 6
{   numero:6, 
    pregunta: "¿Por qué apresaron a Ilidan?", 
    respuesta:"Porque busco poder por encima de su raza", 
    respuesta2:"Porque mato a su hermano", 
    respuesta3:"Porque se allio con los enemigos",
    respuesta4:"Porque queria descansar en una carcel un tiempo"
},

// Pregunta 7
{   numero:7, 
    pregunta: "¿Ilidan ama a alguien?", 
    respuesta:"A Tyrande", 
    respuesta2:"A si mismo", 
    respuesta3:"A Arthas",
    respuesta4:"A Elune"
},

// Pregunta 8
{   numero:8, 
    pregunta: "¿Cual fue el motivo de la pelea entre Malfurion e Ilidan?", 
    respuesta:"Por la ambicion de Illidan", 
    respuesta2:"Por Tyrande", 
    respuesta3:"Porque Illidan le robo el desayuno",
    respuesta4:"Porque Illidan es un traidor"
},

// Pregunta 9
{   numero:9, 
    pregunta: "¿Quien es Illidan?", 
    respuesta:"Un elfo autoproclamado cazador de demonios", 
    respuesta2:"Alguien muy poderoso", 
    respuesta3:"Alguien que odia a Arthas",
    respuesta4:"El mayor enemigo de Arthas"
},

// Pregunta 10: Malfurion
{   numero:10, 
    pregunta: "¿Quién es Malfurion?", 
    respuesta:"Un elfo conocido como el 1er archidruida", 
    respuesta2:"El medio hermano de Illidan", 
    respuesta3:"Un manco",
    respuesta4:"Un mago extremadamente poderoso que gano el titulo de archidruida"
},

// Pregunta 11
{   numero:11, 
    pregunta: "¿Cuántos hermanos tiene Malfurion?", 
    respuesta:"1", 
    respuesta2:"2", 
    respuesta3:"3",
    respuesta4:"0"
},

// Pregunta 12: Tyrande
{   numero:12, 
    pregunta: "¿Quien es Tyrande?", 
    respuesta:"La sacerdotisa de la luna", 
    respuesta2:"Una arquera de excelencia", 
    respuesta3:"Una acolita",
    respuesta4:"Una elfa normal"
},

// Pregunta 13
{   numero:13, 
    pregunta: "¿A quien adora Tyrande y su pueblo?", 
    respuesta:"A Elune", 
    respuesta2:"A un planeta", 
    respuesta3:"A si mismos",
    respuesta4:"A sus armas"
},

// Pregunta 14: Kael
{   numero:14, 
    pregunta: "¿Quien es Kael? Antes de la masacre de Arthas", 
    respuesta:"Un elfo de sangre", 
    respuesta2:"Un mago de sangre", 
    respuesta3:"Un elfo mago de Dalaran",
    respuesta4:"un muerto viviente que sirve a Arthas"
},

// Pregunta 15
{   numero:15, 
    pregunta: "¿Quien le destruye el reino a Kael?", 
    respuesta:"Arthas", 
    respuesta2:"El mismo", 
    respuesta3:"Su padre",
    respuesta4:"Los muertos vivientes"
},

// Pregunta 16
{   numero:16, 
    pregunta: "¿Cual es el mayor problema de Kael?", 
    respuesta:"Su sed de magia", 
    respuesta2:"La sed que hace 1 semana que no toma agua", 
    respuesta3:"Arthas",
    respuesta4:"Jaina"
},

// Pregunta 17
{   numero:17, 
    pregunta: "¿A quien amaba Kael?", 
    respuesta:"A Jaina", 
    respuesta2:"A Malfurion", 
    respuesta3:"A Arthas",
    respuesta4:"A Tyrande"
},

// Pregunta 18: Arthas cuando servia a la luz
{   numero:18, 
    pregunta: "¿De que orden era miembro y aprendiz Arthas?", 
    respuesta:"De la orden de los paladines", 
    respuesta2:"De la nobleza", 
    respuesta3:"De la corona",
    respuesta4:"De la orden de los magos, donde conocio a Jaina"
},

// Pregunta 19
{   numero:19, 
    pregunta: "¿Quien era el maestro de Arthas?", 
    respuesta:"Uther", 
    respuesta2:"Arius", 
    respuesta3:"Granis",
    respuesta4:"Manadar"
},

// Pregunta 20
{   numero:20, 
    pregunta: "¿Que fue lo que mas le costo a Arthas? Cuando servia a la luz", 
    respuesta:"La matanza de Stratholme", 
    respuesta2:"Ver a Jaina en Dalaran", 
    respuesta3:"Matar a Uther",
    respuesta4:"Desobedeser a Uther y a su padre y rey Therenas"
},

// Pregunta 21
{   numero:21, 
    pregunta: "¿Quien era el maximo adversario de Arthas cuando servia a la luz?", 
    respuesta:"Malganis", 
    respuesta2:"Kael", 
    respuesta3:"Kel'thuzad",
    respuesta4:"Illidan"
},

// Pregunta 22
{   numero:22, 
    pregunta: "¿Porque Arthas va a Northrend?", 
    respuesta:"Para acabar con Malganis", 
    respuesta2:"Queria unas vacaciones", 
    respuesta3:"Para salvar a Muradin",
    respuesta4:"Por la espada Frostmoure"
},

// Pregunta 23
{   numero:23, 
    pregunta: "¿Que le advierte murarin sobre la Frostmoure a Arthas?", 
    respuesta:"Que la espada estaba maldita", 
    respuesta2:"Que la espada la queria para el", 
    respuesta3:"Que no la rompa",
    respuesta4:"Que la espada era muy fea y tenia mala pinta"
},

// Pregunta 24
{   numero:24, 
    pregunta: "¿Con quien se encontro Arthas en Northrend?", 
    respuesta:"Con Muradin y sus soldados", 
    respuesta2:"Con Malganis esperandolo", 
    respuesta3:"Con Uther con un humor de perros",
    respuesta4:"Con mercenarios"
},

// Pregunta 25: Arthas cuando abandono la luz
{   numero:25, 
    pregunta: "¿Porque Arthas abandono la luz?", 
    respuesta:"Porque enloquecio gracias a la Frostmoure", 
    respuesta2:"Por poder", 
    respuesta3:"Por la corona de Therenas",
    respuesta4:"Por que la luz le ilumino tanto la cara que se harto y queria oscuridad"
},

// Pregunta 26
{   numero:26, 
    pregunta: "¿En que se convirtio Arthas?", 
    respuesta:"En Caballero de la muerte", 
    respuesta2:"En el Rey Arthas", 
    respuesta3:"En la mano derecha de la legion",
    respuesta4:"En mago"
},

// Pregunta 27
{   numero:27, 
    pregunta: "¿Quien casi derrota al Arthas caballero de la muerte?", 
    respuesta:"Uther", 
    respuesta2:"Tichondrius", 
    respuesta3:"Illidan",
    respuesta4:"El rey lich"
},

// Pregunta 28
{   numero:28, 
    pregunta: "¿Cuando Arthas fue a Dalaran a quien no queria ver?", 
    respuesta:"A Jaina", 
    respuesta2:"A Antonidas, maestro de Jaina", 
    respuesta3:"Al espejo",
    respuesta4:"A Kael"
},

// Pregunta 29
{   numero:29, 
    pregunta: "Quien es Uther", 
    respuesta:"El paladin maestro de Arthas", 
    respuesta2:"El paladin sirviente de Arthas", 
    respuesta3:"El sirviente de Arthas",
    respuesta4:"El capitan de los barcos"
},

// Pregunta 30
{   numero:30, 
    pregunta: "Que queria Arthas", 
    respuesta:"Convertirse en el nuevo Rey lich", 
    respuesta2:"Convertirse en un rey absoluto", 
    respuesta3:"Ser dios",
    respuesta4:"Volver a ser paladin"
}]


//aca es donde esta el Quiz y su logica
var numeroPregunta=0
mostrarPregunta(numeroPregunta)
function mostrarPregunta(numeroPregunta){ 
    let pregunta=document.getElementById("pregunta");
    pregunta.innerHTML="<p>"+quiz[numeroPregunta].pregunta+"</p>"

    let respuesta1=document.getElementById("respuesta1");
    respuesta1.innerHTML="<p>"+quiz[numeroPregunta].respuesta+"</p>"

    let respuesta2=document.getElementById("respuesta2");
    respuesta2.innerHTML="<p>"+quiz[numeroPregunta].respuesta2+"</p>"

    let respuesta3=document.getElementById("respuesta3");
    respuesta3.innerHTML="<p>"+quiz[numeroPregunta].respuesta3+"</p>"

    let respuesta4=document.getElementById("respuesta4");
    respuesta4.innerHTML="<p>"+quiz[numeroPregunta].respuesta4+"</p>"
}

let respondio= function respondio(numeroboton) {
    let respuestaUsada
    if(numeroboton===1){respuestaUsada=quiz[numeroPregunta].respuesta}

    if(numeroboton===2){respuestaUsada=quiz[numeroPregunta].respuesta2}

    if(numeroboton===3){respuestaUsada=quiz[numeroPregunta].respuesta3}

    if(numeroboton===4){respuestaUsada=quiz[numeroPregunta].respuesta4}

    let mensaje
    if (respuestaUsada===quiz[numeroPregunta].respuesta) {
        mensaje="acertaste la pregunta" 
    }
    else{
        mensaje="has fallado! mas suerte la proxima pregunta! Elegiste mal "+respuestaUsada+" La respuesta correcta era "+quiz[numeroPregunta].respuesta
    }

    Swal.fire({
    title: '',
    icon: '',
    html: mensaje,
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText:'OK!',
    confirmButtonAriaLabel: 'cerrar, Ok!',
    cancelButtonText:'',
    cancelButtonAriaLabel:''
    })
    numeroPregunta=numeroPregunta+1
    mostrarPregunta(numeroPregunta)
}


let boton1=document.getElementById ("respuesta1")
boton1.addEventListener("click", ()=> respondio(1));

let boton2=document.getElementById ("respuesta2")
boton2.addEventListener("click", ()=> respondio(2));

let boton3=document.getElementById ("respuesta3")
boton3.addEventListener("click", ()=> respondio(3));

let boton4=document.getElementById ("respuesta4")
boton4.addEventListener("click", ()=> respondio(4));




