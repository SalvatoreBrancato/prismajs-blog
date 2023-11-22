const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Una funzione che consente di creare un Post.
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

//create()

//Una funzione che permette di leggere un Post usando lo slug.
function readSlug(cercaSlug){
    prisma.post
        .findUnique({
            where: {
                slug: cercaSlug
            }
        })
        .then((post)=>{
            console.log(`Post con slug: ${cercaSlug}`, post )
        })
}

//readSlug('la-nuova-ferrari-f1-2023')

//Una funzione che restituisce l’elenco di tutti i Post.
function allPost(){
    prisma.post 
        .findMany()
        .then((posts)=>{
            console.log(posts)
        })
}

//allPost()
// Una funzione che consente di modificare un Post.
function updatePost(idElemento, modifica){
    prisma.post 
        .update({
            where: {
                id: idElemento
            },
            data: {
                published: modifica
            }
        })
        .then((postModificato)=>{
            console.log(postModificato)
        })
}

//updatePost(1, true)
//Una funzione che elimina un Post.
function deletePost(idElemento){
    prisma.post 
        .delete({
            where: {
                id: idElemento
            }
        })
        .then((postDeleted)=>{
            console.log(postDeleted)
        })
}

deletePost(5)