const artworks = [
    {
        id: 1,
        title: "Sunset Landscape",
        available: true,
        type: "Painting"
    },
    {
        id: 2,
        title: "Silent Forest",
        available: false,
        type: "Digital Art"
    },
    {
        id: 3,
        title: "Abstract Flowers",
        available: true,
        type: "Painting"
    }
];


const ART_TYPES = [
    "Painting",
    "Illustration",
    "Digital Art"
];


/* Listeaza titlurile */

function listeazaTitluri(lista) {
    return lista.map((artwork) => artwork.title);
}


/* Numara lucrarile disponibile */

function numaraDisponibile(lista) {
    return lista.filter((artwork) => artwork.available).length;
}


/* Cauta dupa titlu */

function cautaDupaTitlu(lista, text) {
    const textCautat = text.toLowerCase();

    return lista.filter((artwork) =>
        artwork.title.toLowerCase().includes(textCautat)
    );
}


/* Calculeaza urmatorul id */

function nextId(lista) {
    return lista.reduce(
        (max, artwork) => Math.max(max, artwork.id),
        0
    ) + 1;
}


/* Adauga un artwork */

function adaugaArtwork(lista, title, type = "Painting") {
    const titleCurat = title.trim();

    if (titleCurat === "") {
        console.log("Artwork title cannot be empty.");
        return lista;
    }

    if (!ART_TYPES.includes(type)) {
        console.log("Invalid art type.");
        return lista;
    }

    const artworkNou = {
        id: nextId(lista),
        title: titleCurat,
        available: true,
        type: type
    };

    return [...lista, artworkNou];
}


/* Schimba disponibilitatea */

function comutaDisponibilitate(lista, id) {
    return lista.map((artwork) => {
        if (artwork.id === id) {
            return {
                ...artwork,
                available: !artwork.available
            };
        }

        return artwork;
    });
}


/* Sterge un artwork */

function stergeArtwork(lista, id) {
    return lista.filter((artwork) => artwork.id !== id);
}


/* Teste */

console.log("--- Citire ---");

console.log(
    "Titluri:",
    listeazaTitluri(artworks).join(", ")
);

console.log(
    "Disponibile:",
    numaraDisponibile(artworks)
);

console.log(
    "Cautare 'forest':",
    listeazaTitluri(
        cautaDupaTitlu(artworks, "forest")
    ).join(", ")
);


console.log("--- Adaugare ---");

let lista = adaugaArtwork(
    artworks,
    "Golden Horizon",
    "Painting"
);

console.log(
    "Lista noua:",
    lista.length,
    "artworks"
);

console.log(
    "Lista originala:",
    artworks.length,
    "artworks"
);


console.log("--- Modificare si stergere ---");

lista = comutaDisponibilitate(lista, 1);

console.log(
    "Disponibile dupa schimbarea id 1:",
    numaraDisponibile(lista)
);

lista = stergeArtwork(lista, 3);

console.log(
    "Dupa stergerea id 3:",
    listeazaTitluri(lista).join(", ")
);


console.log("--- Validare ---");

adaugaArtwork(lista, " ");

adaugaArtwork(
    lista,
    "Test Artwork",
    "Sculpture"
);