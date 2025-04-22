(async function() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log(users);
        
        const cardsContainer = document.getElementById("cardsContainer");
        users.forEach(user => {
            const card = document.createElement('div');
            card.className = 'card my-3 col-auto mx-auto';
            card.style.width = '27rem';
            card.innerHTML = `
                <div class="card-body" style="padding-bottom: 0;">
                  <h5 class="card-title"><i class="fa-solid fa-user"></i> Temel Bilgiler</h5>
                    <div><strong>İd:</strong> ${user.id}</div>
                    <div><strong>Name:</strong> ${user.name}</div>
                    <div><strong>User Name:</strong> ${user.username}</div>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <h5 class="card-title"><i class="fa-solid fa-map-location-dot"></i> Adres Bilgileri</h5>
                        <div><strong>Street:</strong> ${user.address.street}</div>
                        <div><strong>Suite:</strong> ${user.address.suite}</div>
                        <div><strong>City:</strong> ${user.address.city}</div>
                        <div><strong>Zipcode:</strong> ${user.address.zipcode}</div>
                        <div><h6><strong>Geo;</strong></h6></div>
                        <div><strong>Lat:</strong> ${user.address.geo.lat}</div>
                        <div><strong>Lng:</strong> ${user.address.geo.lng}</div>
                  </li>
                  <li class="list-group-item">
                    <h5><i class="fa-solid fa-building"></i> Şirket Bilgileri</h5>
                        <div><strong>Name:</strong> ${user.company.name}</div>
                        <div><strong>Catch Phrase:</strong> ${user.company.catchPhrase}</div>
                        <div><strong>Bs:</strong> ${user.company.bs}</div>
                  </li>
                  <li class="list-group-item">
                    <h5><i class="fa-solid fa-phone"></i> İletişim Bilgileri</h5>
                        <div><strong>Email:</strong> ${user.email}</div>
                        <div><strong>Phone:</strong> ${user.phone}</div>
                        <div><strong>Website:</strong> ${user.website}</div>
                  </li>
                  <li class="list-group-item">
                    <a href="posts.html?userId=${user.id}" class="btn btn-primary w-100">Gönderileri Görüntüle</a>
                  </li>
                </ul>
            `;
            cardsContainer.appendChild(card);
        });

    } catch(error) {
        console.log("Bir hata oluştu: " + error);
    } finally {
        console.log("İşlem tamamlandı");
    }
})();
