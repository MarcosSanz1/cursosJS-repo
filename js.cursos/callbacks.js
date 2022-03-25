const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

// Podemos determinar el tiempo de espera con setTimeout
// Lo que sucede es después de un segundo, cargará los posts, obtenemos los posts del array y luego lo
// recorremos y lo colocamos en la variable output. Por último enviamos la lista a la página 
function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// AQUÍ ES DONDE ENTRA LA PROGRAMACIÓN ASINCRONICA Y CALLBACK
// Cuando tarda más tiempo en crear el post que en sacarlo. Necesitamos una llamada a callback.
// Este volverá a lanzar el getPosts para mostrar la lista actualizada. Es decir no tardará 1s en
// sacar los posts, si no los 2 que tarda la de crear.
// Lo que queremos ejecutar es la devolución de la llamada
// Lo que sucede es después de dos segundos, añadira el nuevo post al array
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

getPosts();

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);

// Hay que hacer otro repo, pero tengo más de un archivo el de callbacks y promises