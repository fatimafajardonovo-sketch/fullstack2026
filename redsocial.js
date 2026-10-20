const post = {
    author: "John Doe",
    content: "This is my first post on this social media platform!",
    likes: [ ]
}
post.likes.push ("MAria", "angel", "Carlos");
post.likes.pop();

console.log("Total likes: " + post.likes.length);
console.log("Usuarios que dieron likes: ", post.likes);
console.log("Estructura del post: ", Object.keys(post));
