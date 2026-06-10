const API = "http://localhost:5000/api/posts";

async function createPost() {

    const content =
    document.getElementById("postContent").value;

    await fetch(API,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            user:"665a123456789",
            content
        })
    });

    loadPosts();
}

async function loadPosts() {

    const res = await fetch(API);

    const posts = await res.json();

    let html = "";

    posts.forEach(post => {

        html += `
        <div class="post">
            <h4>${post.user?.username || "User"}</h4>
            <p>${post.content}</p>

            <button onclick="likePost('${post._id}')">
            ❤️ ${post.likes.length}
            </button>
        </div>
        `;
    });

    document.getElementById("posts").innerHTML =
    html;
}

async function likePost(id){

    await fetch(`${API}/like/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            userId:"665a123456789"
        })
    });

    loadPosts();
}

loadPosts();