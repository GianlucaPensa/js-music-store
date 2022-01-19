const endpoint = 'https://flynn.boolean.careers/exercises/api/array/music';
window.addEventListener('load', showAlbum);

function showAlbum() {
    axios
        .get(endpoint)
        .then((response) => {
            const album = response.data.response;
            console.log(album);
            for(let i = 0; i < album.length; i++){
                card(i);
                img(album[i], i);
                cardBody(i);
                titolo(album[i], i);
                autore(album[i], i);
                anno(album[i], i);
                genere(album[i], i);
            }
        })
        .catch((errore) => {
            console.log(error);
        });
}

function card (i){
    const divCard = document.createElement('div');
    divCard.className = 'card m-2';
    divCard.id = 'card' + i.toString();
    divCard.style.width = "14rem";
    document.getElementById('galleria').appendChild(divCard);
}

function img (album, i){
    const img = document.createElement('img');
    img.className= 'card-img-top';
    img.setAttribute('src', album.poster);
    const id = 'card' + i.toString();
    document.getElementById(id).appendChild(img);
}

function cardBody (i){
    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';
    divCardBody.id = 'cardBody' + i.toString();
    const id = 'card' + i.toString();
    document.getElementById(id).appendChild(divCardBody);
}

function titolo (album, i){
    const h3 = document.createElement('h3');
    h3.className = 'card-title';
    console.log(album.title);
    h3.innerHTML = album.title;
    const id = 'cardBody' + i.toString();
    document.getElementById(id).appendChild(h3);
}

function autore (album, i){
    const h5 = document.createElement('h5');
    h5.className = 'card-text';
    h5.innerHTML = album.author;
    const id = 'cardBody' + i.toString();
    document.getElementById(id).appendChild(h5);
}

function anno (album, i){
    const h6 = document.createElement('h6');
    h6.className = 'card-text';
    h6.innerHTML = album.year;
    const id = 'cardBody' + i.toString();
    document.getElementById(id).appendChild(h6);
}

function genere (album, i){
    const h6 = document.createElement('h6');
    h6.className = 'card-footer';
    h6.innerHTML = album.genre;
    const id = 'cardBody' + i.toString();
    document.getElementById(id).appendChild(h6);
}