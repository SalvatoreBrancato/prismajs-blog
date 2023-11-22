const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


function create(){
    prisma.post
        .createMany({
            data: [
            
            {
                title: "La nuova Ferrari F1 2023",
                slug: "la-nuova-ferrari-f1-2023",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ferrari_F1-75_2023_front_view.jpg/1200px-Ferrari_F1-75_2023_front_view.jpg",
                content: "La Ferrari ha presentato la sua nuova monoposto per la stagione 2023 di Formula 1. La F1-75 è stata progettata per essere competitiva e vincere gare. Il pilota Charles Leclerc è pronto a lottare per il titolo mondiale. La squadra di Maranello ha grandi ambizioni per questa stagione."
            },
            {
                title: "Il nuovo album di Kendrick Lamar",
                slug: "il-nuovo-album-di-kendrick-lamar",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Kendrick_Lamar_-_Mr._Morale_%26_The_Big_Steppers_album_cover.jpg/1200px-Kendrick_Lamar_-_Mr._Morale_%26_The_Big_Steppers_album_cover.jpg",
                content: "Kendrick Lamar ha pubblicato il suo nuovo album, 'Mr. Morale & The Big            Steppers'. Il disco è un doppio album che esplora temi come la religione, la famiglia,          la società e la politica. Lamar è uno dei rapper più importanti della sua generazione       e questo album è un'altra conferma del suo talento."
            }
        ]
        })
        .then((result)=>{
            console.log('Nuovo post creato: ', result)
        })
}

create()