function loadAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => displatAlbumTitle(data));
}

loadAlbum();

const displatAlbumTitle = albums =>{
    const titleContainer = document.getElementById('title-container');
    for(const album of albums){
       const h3 = document.createElement('h3');
       h3.classList.add('user-name');
       h3.innerText = album.title;
       titleContainer.appendChild(h3);
    }
};