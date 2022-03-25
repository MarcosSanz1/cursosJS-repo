const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

// Lo que sucede es después de un segundo, cargará los posts, obtenemos los posts del array y luego lo
// recorremos y lo colocamos en la variable output. Por último enviamos la lista a la página
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// Lo que sucede es que después de 2 segundos, añadira al array el nuevo post. Si salta algún error llamará a 
// reject, el cual lanzará un mensaje de error. Y si no llamará a resolve, que añadirá el post y ejecutará getPosts
// Lo que queremos ejecutar es la devolución de una Promise
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
        
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

// Lanzamos el createPost con title y body. Y después lanzamos el getPosts() para sacar la lista de post, sacamos el error
// por consola
// createPost({ title: 'Post Three', body: 'This is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));

// Async / Await
// Con el await le decimos que llame a la función justo antes de que este. Entonces esperamos a que pueda crear un post y luego
// lanzamos el getPosts
async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three' });
    getPosts();
}

init();

// Async / Await with fetch "búsqueda"
// Esto lo configuramos en una búsqueda de espera, por lo que devuelve una promise
// La API es un poco extraña, porque la primera promise que devuelve será que necesitaremos llamar a res.json.
// Entonces necesitamos otra variable 
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();

// Promise.all
// Creamos constantes 
// Que es Promise? es un objeto que representa la terminación, o fallo de una operación asíncrona. (resolve: termina), (reject: fallo)
// Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
// setTimeout(resolve, 2000, 'Goodbye'));
// // fetch es como una llamada http ".get, .put, .post, etc."
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(
//     (values => console.log(values)
// ));