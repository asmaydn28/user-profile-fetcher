function getUserIdFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get("userId");
}

async function fetchPosts(userId) {
    if (!userId) {
        alert("Geçerli bir kullanıcı ID’si giriniz.");
        throw new Error("User ID bulunamadı.");
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    
    displayPosts(posts);
}

function displayPosts(posts) {
    const container = document.getElementById("postsContainer");
    container.innerHTML = "";

    posts.forEach(post => {
        const card = document.createElement("div");
    card.className="card text-bg-primary my-3 col-auto mx-auto"
    card.style.width="26rem";
    card.innerHTML = `
                <div class="card-header"><span class="fw-bolder text-decoration-underline">Title:</span> ${post.title}</div>
                <div class="card-body">
                    <p class="card-text"><span class="fw-bold text-decoration-underline">Body:</span> ${post.body}</p>
                </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let userId = getUserIdFromQuery();

    while (!userId || isNaN(userId) || userId < 1 || userId > 10) {
        userId = prompt("Lütfen 1 ile 10 arasında bir kullanıcı ID’si girin:");
        
        if (userId === null) {
            alert("İşlem iptal edildi.");
            throw new Error("Kullanıcı giriş yapmayı iptal etti.");
        }
    }

    const newUrl = `${window.location.pathname}?userId=${userId}`;
    window.history.replaceState(null, "", newUrl);

    fetchPosts(userId);
});


