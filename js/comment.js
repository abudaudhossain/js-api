function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayComment(data))
}
let item = 10;
loadComment();
function displayComment(comments) {
    const commentContainer = document.getElementById('comments');
    let i = 0;
    for(const comment of comments){
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <h3 class = "user-name">${comment.name}</h3>
        <p class = "comment-body">${comment.body}</p>
        `;
        commentContainer.appendChild(div);
    }
}
