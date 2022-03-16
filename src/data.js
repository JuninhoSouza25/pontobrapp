const DATA = [
    {
        id: 1,
        song: "Nós vamos invadir sua praia!",
        band: "Ultrage a Rigor",
        video: "FuHyfsgVy3w",
        apisong: "art=ultrage%20a%20rigor&mus=nos%20vamos%20invadir%20sua%20praia",
        poster: "https://img.youtube.com/vi/FuHyfsgVy3w/maxresdefault.jpg"
    },
    {
        id: 2,
        song: "Eu que não amo você",
        band: "Humberto Gessinger",
        video: "p8-2hmuAgRU",
        apisong: "art=engenheiros%20do%20hawaii&mus=eu%20que%20nao%20amo%20voce",
        poster: "https://img.youtube.com/vi/p8-2hmuAgRU/maxresdefault.jpg" 
    },
    {
        id: 3,
        song: "Bichos Escrotos",
        band: "Titâs",
        video: "ykb7s9Xgjp0",
        apisong: "art=titas&mus=bichos%20escrotos",
        poster: "https://img.youtube.com/vi/ykb7s9Xgjp0/maxresdefault.jpg"
    },
    {
        id: 4,
        song: "1406",
        band: "Mamonas Assassinas",
        video: "hsD4tz_vNOM",
        apisong: "art=mamonas%20assassinas%20&mus=1406",
        poster: "https://img.youtube.com/vi/hsD4tz_vNOM/maxresdefault.jpg"
    },
    {
        id: 5,
        song: "Ilegal, Imoral ou Engorda",
        band: "RC na Veia",
        video: "4dyvG0tuoA4",
        apisong: "musid=3ade68b6gc5a2fda3",
        poster: "https://img.youtube.com/vi/4dyvG0tuoA4/maxresdefault.jpg"
    },
    {
        id: 6,
        song: "Marvin",
        band: "Nando Reis",
        video: "_yGOf0ECBkk",
        apisong: "art=titas&mus=marvin",
        poster: "https://img.youtube.com/vi/_yGOf0ECBkk/maxresdefault.jpg"
    },
    {
        id: 7,
        song: "Viradão na feira hippie",
        band: "Tianastacia",
        video: "RP1fKlpCQOE",
        apisong: "musid=3ade68b6g7b78fda3",
        poster: "https://img.youtube.com/vi/RP1fKlpCQOE/maxresdefault.jpg"
    },
    {
        id: 8,
        song: "Ideologia",
        band: "Cazuza",
        video: "JB9pn_HyEF0",
        apisong: "art=cazuza&mus=ideologia",
        poster: "https://img.youtube.com/vi/JB9pn_HyEF0/maxresdefault.jpg"
    },
    {
        id: 9,
        song: "Ilê Ayê (Mundo Negro)",
        band: "O Rappa",
        video: "E_DjChWgnJo",
        apisong: "art=o%20rappa&mus=ile%20aye",
        poster: "https://img.youtube.com/vi/E_DjChWgnJo/maxresdefault.jpg"
    },
    {
        id: 10,
        song: "Inutil",
        band: "Ultrage a Rigor",
        video: "vW6kd85TaNk",
        apisong: "art=ultrage%20a%20rigor&mus=inutil",
        poster: "https://img.youtube.com/vi/vW6kd85TaNk/maxresdefault.jpg"
    },
    {
        id: 11,
        song: "A Cera",
        band: "O Surto",
        video: "i0QCHeCoIz4",
        apisong: "art=o%20surto&mus=a%20cera",
        poster: "https://img.youtube.com/vi/i0QCHeCoIz4/maxresdefault.jpg"
    },
    {
        id: 12,
        song: "Mestre Jonas",
        band: "Tianastacia",
        video: "L-aVf0tWwpM",
        apisong: "art=tianastacia&mus=mestre%20jonas",
        poster: "https://img.youtube.com/vi/L-aVf0tWwpM/maxresdefault.jpg"
    },
    {
        id: 13,
        song: "Quinta-Feira",
        band: "Charlie Brown Jr",
        apisong: "art=charlie%20brown%20jr&mus=quinta%20feira",
        video: "slhHxty6wfY",
        poster: "https://img.youtube.com/vi/slhHxty6wfY/maxresdefault.jpg"
    },
    {
        id: 14,
        song: "Top Top",
        band: "Mutantes",
        video: "ai-rk1ngofo",
        apisong: "art=mutantes&mus=top%20top",
        poster: "https://img.youtube.com/vi/ai-rk1ngofo/maxresdefault.jpg"
    },
    {
        id: 15,
        song: "Perfeição",
        band: "Legião Urbana",
        video: "yYOw3ZPLEOE",
        apisong: "art=legiao%20urbana&mus=perfeicao",
        poster: "https://img.youtube.com/vi/yYOw3ZPLEOE/maxresdefault.jpg"
    },
    {
        id: 16,
        song: "Não vou ficar",
        band: "Versão Ponto BR",
        video: "5wdEdNCoIp0",
        apisong: "musid=3ade68b7g749d8ea3",
        poster: "https://img.youtube.com/vi/5wdEdNCoIp0/maxresdefault.jpg"
    },
    {
        id: 17,
        song: "O Calibre",
        band: "Paralamas do Sucesso",
        video: "QdasQD7K8zc",
        apisong: "art=paralamas%20do%20sucesso&mus=o%20calibre",
        poster: "https://img.youtube.com/vi/QdasQD7K8zc/maxresdefault.jpg"
    },
    {
        id: 18,
        song: "Não diga num Blues",
        band: "Oswaldo Montenegro",
        video: "QI5aTOp3iUQ",
        apisong: "art=oswaldo%20montenegro&mus=nao%20%20diga%20num%20blues",
        poster: "https://img.youtube.com/vi/QI5aTOp3iUQ/maxresdefault.jpg"
    },
    {
        id: 19,
        song: "Chover",
        band: "Cordel do Fogo Encantado",
        video: "4xYpDxi4s_g",
        apisong: "art=cordel%20do%20fogo%20encantado&mus=chover",
        poster: "https://img.youtube.com/vi/4xYpDxi4s_g/maxresdefault.jpg"
    },
    {
        id: 20,
        song: "Não deixe o mar te engolir",
        band: "Charlie Brown Jr",
        video: "2RobhjC7cR4",
        apisong: "art=charlie%20brown%20jr&mus=nao%20deixe%20o%20mar%20te%20engolir",
        poster: "https://img.youtube.com/vi/2RobhjC7cR4/maxresdefault.jpg"
    }
];

export default DATA