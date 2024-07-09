const PELICULAS_Y_SERIES = [
    {
        título: "John Wick",
        genero: "Acción",
        sinopsis: "John Wick, un exasesino a sueldo, vive en paz tras la muerte de su esposa. Su tranquilidad se quiebra cuando el hijo de un mafioso roba su auto y mata a su cachorro, último regalo de su esposa. Esto lo lleva a retomar su antigua vida y buscar venganza contra quienes le arrebataron lo que más amaba.",
        duración: "1h 41m",
        poster: "./images/JohnWick.jpg",
        categoria: 1,
        video: "https://www.youtube.com/embed/C0BMx-qxsP4?si=bsgR64-_lG5H8OrZ"
    },
    {
        título: "Gambito De Dama",
        genero: "Novela",
        sinopsis: "En un orfanato de los años 50, una chica exhibe un talento extraordinario para el ajedrez. A medida que su fama sube como la espuma, intenta superar su adicción.",
        temporadas: [
            {
                numero: 1,
                capitulos: [
                    {titulo: "Capítulo 1: Apertura", video: "https://www.youtube.com/embed/oZn3qSgmLqI?si=EqAOiIVVc-ft2Qu5"},
                    {titulo: "Capítulo 2: Intercambio", video: "https://www.youtube.com/embed/oZn3qSgmLqI?si=EqAOiIVVc-ft2Qu5"},
                    {titulo: "Capítulo 3: Peones doblados", video: "https://www.youtube.com/embed/oZn3qSgmLqI?si=EqAOiIVVc-ft2Qu5"},
                    {titulo: "Capítulo 4: Medio juego", video: "https://www.youtube.com/embed/oZn3qSgmLqI?si=EqAOiIVVc-ft2Qu5"},
                    {titulo: "Capítulo 5: Ataque doble", video: "https://www.youtube.com/embed/oZn3qSgmLqI?si=EqAOiIVVc-ft2Qu5"},
                    {titulo: "Capítulo 6: Aplazamiento", video: "https://www.youtube.com/embed/oZn3qSgmLqI?si=EqAOiIVVc-ft2Qu5"},
                    {titulo: "Capítulo 7: Final", video: "https://www.youtube.com/embed/oZn3qSgmLqI?si=EqAOiIVVc-ft2Qu5"}
                ]
            }
        ],
        duración: "46 min / 67 min",
        poster: "./images/GambitoDeDamas.jpg",
        categoria: 2,
        video: "https://www.youtube.com/embed/oZn3qSgmLqI?si=EqAOiIVVc-ft2Qu5"
    },
    {
        título: "Frozen",
        genero: "Fantasia",
        sinopsis: "En el reino de Arendelle, la joven princesa Elsa posee poderes mágicos que le permiten crear hielo y nieve. Tras un accidente durante su infancia, Elsa se aísla del mundo, incluyendo de su hermana menor, Anna. Cuando Elsa accidentalmente desata un invierno eterno en Arendelle durante su coronación, huye al monte y se refugia en un palacio de hielo. Anna, con la ayuda de un valiente montañés llamado Kristoff, su reno Sven y un divertido muñeco de nieve llamado Olaf, emprende una aventura épica para encontrar a Elsa y salvar el reino del invierno perpetuo, redescubriendo el vínculo especial que las une como hermanas.",
        duración: "1h 42m",
        poster: "./images/Frozen.jpg",
        categoria: 1,
        video: "https://www.youtube.com/embed/SRRRrCNTVJA?si=c_-llSDBu0WNJ0oS"
    },
    {
        título: "El Maravilloso Mundo de Gumball",
        genero: "Caricaturas",
        sinopsis: "Las aventuras de Gumball, un gato azul, junto con su familia en la ciudad de elmore",
        temporadas: [
            {
                numero: 1,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 2,
                capitulos: [
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            }, {
                numero: 3,
                capitulos: [
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            },
            {
                numero: 4,
                capitulos: [
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"}
                ]
            },
            {
                numero: 5,
                capitulos: [
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 23", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"}
                ]
            }, {
                numero: 6,
                capitulos: [
                    {titulo: "Capítulo 24", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 25", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"}
                ]
            },

        ],
        duración: "24 min",
        poster: "./images/EIMDG.jpg",
        categoria: 2,
        video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"
    },
    {
        título: "Rapido y furiosos",
        genero: "Acción",
        sinopsis:  "El agente encubierto Brian O'Conner se infiltra en el mundo de las carreras callejeras de Los Ángeles para investigar una serie de robos de camiones.",
        temporadas: [
            {
                numero: 1,
                capitulos: [
                    {titulo: "Capítulo 1: A todo gas", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2. A todo gas 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3: Tokyo Race", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4: Aun mas rapido", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5: Fast&Furious 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6: Fast&Furious 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7: Fast&Furious 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8: Fast&Furious 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9: Fast&Furious:Hobbs &Shaw", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10:Fast&Furious 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
      

        ],
        duración: "1h 46m",
        poster: "./images/RapidoYFuriosos.jpg",
        categoria: 1,
        video: "https://www.youtube.com/embed/2TAOizOnNPo?si=N9LF6HGsm-ap2hRO"
    },
    
    {
        título: "Esperando la carroza",
        genero: "Comedia",
        sinopsis: "En Buenos Aires, la familia Musicardi se reúne un domingo para almorzar. Mamá Cora, la anciana matriarca, vive con su hijo Jorge y su nuera Susana, quien está agotada por cuidar de ella. Durante el almuerzo, una serie de malentendidos lleva a la familia a creer que Mamá Cora ha desaparecido y posiblemente muerto. Este evento desencadena una serie de situaciones cómicas y revelaciones familiares mientras intentan lidiar con la supuesta muerte de la abuela. La película, una sátira sobre la hipocresía y los conflictos en las familias, es un clásico del cine argentino, conocido por sus diálogos ingeniosos y personajes memorables.",
        duración: "1h 36m",
        poster: "./images/EsperandoLaCarroza.jpg",
        categoria: 1,
        video: "https://www.youtube.com/embed/KIgOuEPQZsU?si=Rg5Zao5PX_uv-VND"
    },
    {
        título: "Querida, encogí a los niños",
        genero: "Familiar",
        sinopsis: "El excéntrico inventor Wayne Szalinski crea una máquina para encoger objetos, pero su experimento parece ser un fracaso. Todo cambia cuando, accidentalmente, la máquina encoge a sus hijos, Amy y Nick, junto con los niños del vecino, Ron y Russ. Ahora, del tamaño de insectos, los cuatro niños deben enfrentarse a los peligros del jardín trasero, que se ha convertido en un vasto y peligroso terreno. Mientras Wayne y su esposa Diane intentan desesperadamente encontrarlos y revertir el proceso, los niños deben usar su ingenio y trabajar juntos para sobrevivir y volver a su tamaño normal. La película combina aventura, comedia y efectos especiales innovadores, convirtiéndola en un clásico familiar.",
        duración: "1h 33m",
        poster: "./images/CHEALN.jpg",
        categoria: 1,
        video: "https://www.youtube.com/embed/cN19AazIWLk?si=W7HeqTKvIXB12bhA"
    },
    {
        título: "El Secreto De Sus Ojos",
        genero: "Suspenso",
        sinopsis: "Un juez tiene dudas acerca de los planes de un oficial de justicia recientemente retirado que intenta descubrir al culpable de la violación y el asesinato de una joven, crimen ocurrido varias décadas atrás.",
        duración: "2h 9m",
        poster: "./images/ESEDSO.jpg",
        categoria: 1,
        video: "https://www.youtube.com/embed/hKa8U-8vsfU?si=NphNMGpLInoT9FdU"
    },
    {
        título: "Crepusculo",
        genero: "Romance",
        sinopsis: "Bella Swan se va a vivir con su padre al pequeño pueblo de Forks, donde conoce a Edward, un atractivo y misterioso chico del que se enamora y quien esconde un gran secreto: es un vampiro. Pero la familia del chico guarda una peculiaridad, y es que no se alimenta de sangre humana.",
        duración: "2h 2m",
        poster: "./images/Crepusculo.jpg",
        categoria: 1,
        video: "https://www.youtube.com/embed/kX2DKZcDM-o?si=xcXti2L_Y7iswl0a"
    },
    {
        título: "El diablo viste a la moda",
        genero: "Comedia",
        sinopsis: "El mundo de la moda está gobernado por la déspota y sofisticada Miranda Priestly. Trabajar como su ayudante podría abrirle cualquier puerta a la inocente Andy Sachs, pero para ello tendrá que encajar entre las periodistas de la revista Runway.",
        duración: "1h 49m",
        poster: "./images/EDVP.jpg",
        categoria: 1,
        video: "https://www.youtube.com/embed/6ZOZwUQKu3E?si=jsrNN_3lTUGcKWg4"
    },
    {
        título: "Scream",
        genero: "Terror",
        sinopsis: "Un asesino en serie, que viste una máscara blanca y una túnica negra, siembra el pánico entre los adolescentes de un pueblo californiano.",
        duración: "1h 51m",
        poster: "./images/Scream.jpg",
        categoria: 1,
        video: "https://www.youtube.com/embed/i3J6ACKQ7K0?si=0gTzIXQ4qUMZ6KPj"
    },
    {
        título: "Los Simpsons",
        genero: "Comedia",
        sinopsis: "El día a día de la familia Simpsons en Springfield, una ciudad de los Estados Unidos",
        temporadas: [
            {
                numero: 1,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/aDcFhYtiIEM?si=gF9PYibgIdn8Utuc"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/aDcFhYtiIEM?si=gF9PYibgIdn8Utuc"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/aDcFhYtiIEM?si=gF9PYibgIdn8Utuc"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/aDcFhYtiIEM?si=gF9PYibgIdn8Utuc"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 2,
                capitulos: [
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            }, {
                numero: 3,
                capitulos: [
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            },
            {
                numero: 4,
                capitulos: [
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 5,
                capitulos: [
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 23", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            }, {
                numero: 6,
                capitulos: [
                    {titulo: "Capítulo 24", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 25", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero:7,
                capitulos: [
                    {titulo: "Capítulo 26", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 27", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 8,
                capitulos: [
                    {titulo: "Capítulo 28", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 29", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 9,
                capitulos: [
                    {titulo: "Capítulo 30", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 31", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 10,
                capitulos: [
                    {titulo: "Capítulo 32", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 33", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 11,
                capitulos: [
                    {titulo: "Capítulo 34", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 35", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 12,
                capitulos: [
                    {titulo: "Capítulo 36", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 37", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 13,
                capitulos: [
                    {titulo: "Capítulo 38", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 39", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 14,
                capitulos: [
                    {titulo: "Capítulo 40", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 41", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 15,
                capitulos: [
                    {titulo: "Capítulo 42", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 43", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 16,
                capitulos: [
                    {titulo: "Capítulo 44", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 45", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 17,
                capitulos: [
                    {titulo: "Capítulo 46", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 47", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 18,
                capitulos: [
                    {titulo: "Capítulo 48", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 49", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 19,
                capitulos: [
                    {titulo: "Capítulo 50", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 51", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 20,
                capitulos: [
                    {titulo: "Capítulo 52", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 53", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 21,
                capitulos: [
                    {titulo: "Capítulo 54", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 55", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 22,
                capitulos: [
                    {titulo: "Capítulo 56", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 57", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 23,
                capitulos: [
                    {titulo: "Capítulo 58", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 59", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 24,
                capitulos: [
                    {titulo: "Capítulo 60", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 61", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 25,
                capitulos: [
                    {titulo: "Capítulo 62", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 63", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 26,
                capitulos: [
                    {titulo: "Capítulo 64", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 65", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 27,
                capitulos: [
                    {titulo: "Capítulo 66", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 67", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 28,
                capitulos: [
                    {titulo: "Capítulo 68", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 69", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 29,
                capitulos: [
                    {titulo: "Capítulo 70", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 71", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 30,
                capitulos: [
                    {titulo: "Capítulo 72", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 73", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 31,
                capitulos: [
                    {titulo: "Capítulo 74", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 75", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 32,
                capitulos: [
                    {titulo: "Capítulo 76", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 77", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 33,
                capitulos: [
                    {titulo: "Capítulo 78", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 79", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 34,
                capitulos: [
                    {titulo: "Capítulo 80", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 81", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 35,
                capitulos: [
                    {titulo: "Capítulo 82", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 83", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 36,
                capitulos: [
                    {titulo: "Capítulo 84", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 85", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            
        ],
      
        duración: "24 min",
        poster: "./images/TheSimpsons.jfif",
        categoria: 2,
        video: "https://www.youtube.com/embed/aDcFhYtiIEM?si=gF9PYibgIdn8Utuc"
    },
    {
        título: "Fragmentado",
        genero: "Suspenso",
        sinopsis: "Kevin Wendell Crumb es un hombre con trastorno de identidad disociativo, que posee 23 personalidades distintas. Una de sus personalidades, llamada 'La Bestia', empieza a dominar a las otras y lo impulsa a secuestrar a tres adolescentes: Casey, Claire y Marcia. Mientras las chicas intentan escapar, descubren más sobre las diversas personalidades de Kevin, algunas de las cuales intentan ayudarlas y otras que desean mantenerlas cautivas. A medida que 'La Bestia' se manifiesta, Casey debe usar su ingenio y valentía para intentar sobrevivir y enfrentarse a la amenaza que representa Kevin y sus múltiples identidades.",
        duración: "1h 57m",
        poster: "./images/Fragmentado.jpg",
        categoria: 1,
        video: "https://www.youtube.com/embed/KIpGKumxiGg?si=QNOKjRP3RcS5Blxa"
    },
    {
        título: "Fallout",
        genero: "Acción",
        sinopsis: "En un futuro posapocalíptico provocado por la devastación nuclear, los ciudadanos de Los Ángeles deben vivir en búnkeres subterráneos para protegerse de la radiación, los mutantes y los bandidos.",
        temporadas: [
            {
                numero: 1,
                capitulos: [
                    {titulo: "Capítulo 1: El fin", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2: El objetivo", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3:La cabeza", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4: Los necrofagos", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5: El pasado", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6: La trampa", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7: La radio", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8: El comienzo", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            

        ],
        duración: "1h",
        poster: "./images/Fallout.jpg",
        categoria: 2,
        video: "https://www.youtube.com/embed/GExflKHU3VE?si=ubt77dSeov-D2rl4"
    },
    {
        título: "Brooklyn99",
        genero: "Comedia",
        sinopsis: "Los detectives Jake Peralta, Amy Santiago, Rosa Diaz, Charles Boyle y el sargento Terry Jeffords forman una simpática y poco convencional brigada, pero todo cambia tras la llegada del nuevo jefe, el inflexible Raymond Holt.",
        temporadas: [
            {
                numero: 1,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 2,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 23", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            }, {
                numero: 3,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 23", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            },
            {
                numero: 4,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            },
            {
                numero: 5,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            }, {
                numero: 6,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    
                ]
                
            },
            {
                numero: 7,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    
                ]
                
            },
            {
                numero: 8,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    
                ]
                
            },

        ],
        duración: "23 min",
        poster: "./images/Brooklyn99.jpg",
        categoria: 2,
        video: "https://www.youtube.com/embed/v0QTdCHX_-c?si=R3S-e3baRVERR-jH"
    },
    {
        título: "Hora de Aventura",
        genero: "Caricaturas",
        sinopsis: "narra las extravagantes, coloridas y a menudo absurdas y divertidas aventuras de un niño llamado Finn y su amigo canino parlante, Jake , que se unen para divertirse en la mística Tierra de Ooo.",
        temporadas: [
            {
                numero: 1,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 2,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 23", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            }, {
                numero: 3,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 23", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            },
            {
                numero: 4,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            },
            {
                numero: 5,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            }, {
                numero: 6,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    
                ]
                
            },
            {
                numero: 7,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    
                ]
                
            },
            {
                numero: 8,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    
                ]
                
            },
            {
                numero: 9,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    
                ]
                
            },
            {
                numero: 10,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    
                ]
                
            },

        ],
        duración: "15 min",
        poster: "./images/AdventureTime.jpg",
        categoria: 2,
        video: "https://www.youtube.com/embed/kMDaAcfCYow?si=Bj99dPEC_sHQG5bC"
    },
    {
        título: "Fullmetal Alchemist",
        genero: "Anime",
        sinopsis: "dos hermanos que intentaron resucitar a su madre muerta usando una ciencia muy antigua y secreta de la alquimia. Pero el ritual sale mal y el cuerpo de uno de ello se desmaterializa y su mente queda atrapada para siempre en una armadura de metal.",
        temporadas: [
            {
                numero: 1,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 23", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 24", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 25", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 26", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 27", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 28", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 29", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 30", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 31", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 32", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 33", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 34", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 35", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 36", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 37", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 38", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            }],
        duración: "24 min",
        poster: "./images/FullMetalAlchemist.jpg",
        categoria: 2,
        video: "https://www.youtube.com/embed/QJHaXGhBBbc?si=PiEN7ta74sSJnyFA"
    },
    {
        título: "Gossip Girl",
        genero: "Novela",
        sinopsis: " se basa en Gossip Girl, el cual es un blog en Internet muy conocido, en donde se narra día a día chismes, conflictos amorosos, familiares y económicos de un grupo de jóvenes multimillonarios de la elite de Manhattan.",
        temporadas: [
            {
                numero: 1,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 2,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 23", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            }, {
                numero: 3,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 23", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            },
            {
                numero: 4,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            },
            {
                numero: 5,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            }, {
                numero: 6,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    
                ]
                
            }],
        duración: "42 min",
        poster: "./images/GossipGirls.jpg",
        categoria: 2,
        video: "https://www.youtube.com/embed/6eCoR6vmNzQ?si=epGVuvDOUYBjKkqd"
    },
    {
        título: "The Love Witch",
        genero: "Suspenso",
        sinopsis: "Elaine, una joven y hermosa bruja, está obsesionada con encontrar el amor verdadero. Se muda a una pequeña ciudad de California donde utiliza magia y hechizos para atraer a los hombres. Sin embargo, sus encantos tienen consecuencias trágicas y mortales. A medida que sus conjuros causan estragos, Elaine se ve atrapada en un enredo de pasión, locura y muerte, cuestionando la naturaleza del amor y el poder de la seducción. La película es una mezcla estilizada de terror y comedia, con una estética que rinde homenaje a los filmes de los años 60 y 70.",
        duración: "2h",
        poster: "./images/TheLoveWithc.jpg",
        categoria: 1,
        video: "https://www.youtube.com/embed/BHhaIRevB-Y?si=ZH4vHRXuqKGnh-h2"
    },
    {
        título: "Phineas y Ferb",
        genero: "Familiar",
        sinopsis: "Phineas y Ferb son dos hermanastros que quieren disfrutar al máximo de las vacaciones de verano. No dejan de hacer trastadas y de inventar instrumentos imposibles como un monopatín gigante para sufrimiento de su hermana mayor Candace, que no les aguanta.",
        temporadas: [
            {
                numero: 1,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                ]
            },
            {
                numero: 2,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 23", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            }, {
                numero: 3,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 23", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            },
            {
                numero: 4,
                capitulos: [
                    {titulo: "Capítulo 1", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 2", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 3", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 4", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 5", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 6", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 7", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 8", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 9", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 10", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 11", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 12", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 13", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 14", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 15", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 16", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 17", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 18", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 19", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 20", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 21", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},
                    {titulo: "Capítulo 22", video: "https://www.youtube.com/embed/LOBOJQocArs?si=XPtnPMyx8B3Qsbnm"},

                ]
            }],
        duración: "22 min",
        poster: "./images/FineasYFerb.jfif",
        categoria: 2,
        video: "https://www.youtube.com/embed/Nt5AuDn6BwE?si=e0pRsM5KlUk1fMh1"
    }
];

function actualizarCatalogo(catalogo){
    const nodo_pelicualasYseries = document.querySelector('.peliculasYSeries')
    let nodo_linea
    nodo_pelicualasYseries.innerHTML = '';

    for(let i = 0; i < catalogo.length; i++){
        if(i % 5 === 0){
          nodo_linea = document.createElement('div')
          nodo_linea.classList.add('linea')
          nodo_pelicualasYseries.appendChild(nodo_linea)
        }

        let nodo_article = document.createElement('article')

        let nodo_imagen = document.createElement('img')
        nodo_imagen.src = catalogo[i].poster
        nodo_imagen.alt = catalogo[i].título
        nodo_imagen.height = 350;

        let nodo_a = document.createElement('a')

        nodo_a.href = `./detalleSerieOPelicula.html?id=${i}`

        nodo_a.appendChild(nodo_imagen)
        nodo_article.appendChild(nodo_a)
        nodo_linea.appendChild(nodo_article)
    }
}

function filtrarPeliculas(){
    let peliculas = []
    peliculas = PELICULAS_Y_SERIES.filter(item => item.categoria === 1)
    return peliculas
}

function filtrarSeries(){
    let series = []
    series = PELICULAS_Y_SERIES.filter(item => item.categoria === 2)
    return series
}
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const flkty = new Flickity(carousel, {
      // Configuración de Flickity
    });
  
    // Manejar clic en las imágenes del carrusel
    carousel.addEventListener('click', function(event) {
      const target = event.target;
      // Buscar el ancestro que tenga el atributo data-id
      const cell = target.closest('.carousel-cell[data-id]');
      if (cell) {
        const id = parseInt(cell.getAttribute('data-id'), 10);
        // Validar que el id esté dentro del rango de PELICULAS_Y_SERIES
        if (id >= 0 && id < PELICULAS_Y_SERIES.length) {
          // Redirigir a la página de detalle con el id correspondiente
          window.location.href = `./detalleSerieOPelicula.html?id=${id}`;
        } else {
          console.error(`Índice ${id} está fuera de rango.`);
        }
      }
    });
  });