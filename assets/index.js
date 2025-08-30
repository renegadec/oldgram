const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "./assets/images/avatar-vangogh.jpg",
        post: "./assets/images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "./assets/images/avatar-courbet.jpg",
        post: "./assets/images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "./assets/images/avatar-ducreux.jpg",
        post: "./assets/images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const containerElement = document.getElementById("container-el")

for (let i = 0; i < posts.length; i++) {
    containerElement.innerHTML += `
        <section class="container">
            <div class="post-header" id="post-header-${i}">
                <img class="user-avatar" src="${posts[i].avatar}" alt="">
                <div class="user-details">
                    <p class="name">${posts[i].name}</p>
                    <p class="location">${posts[i].location}</p>
                </div> 
            </div>

            <div class="post-img" id="post-img">
                <img src="${posts[i].post}" alt="">
            </div>

            <div class="post-interaction">
                <div class="post-icons">
                    <img src="./assets/images/icon-heart.png" alt="">
                    <img src="./assets/images/icon-comment.png" alt="">
                    <img src="./assets/images/icon-dm.png" alt="">
                </div>
                <div id="post-interaction-el">
                    <p class="likes">${posts[i].likes} likes</p>
                    <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
            </div>
        </section>
    `
}


// const userLikes = document.getElementById("likes")

// userLikes.addEventListener("clicks", function() {
//     for (let i = 0; i < posts.length; i++){
//         posts[i].likes += 1
//     }
// })


