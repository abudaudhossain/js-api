function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => displayPhotos(data));
}

loadPhotos();
function displayPhotos(photos) {
    const photoContainer = document.getElementById('photos');
    for (let photo of photos) {
        const div = document.createElement('div');
        div.classList.add('img-card');
        div.innerHTML = `
        <div class="img">
            <img src="${photo.url}" alt="img">
        </div>
        <h3 class="title">${photo.title}</h3>
        `
        photoContainer.appendChild(div);
    }

}