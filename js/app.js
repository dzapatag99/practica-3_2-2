function cargarJSON() {
    fetch("./data/movies.json")
        .then(function(res) {
            return res.json();
        })
        .then(function(data){
            let html = document.querySelector("#content-container");
            console.log(html)
            let movies = data.movies;
            for (let i = 0; i < movies.length; i++) {
              html.innerHTML +=`
              <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="img/${movies[i].img}" alt="..." width= 150px>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${movies[i].name}</h5>
              <p class="card-text">${movies[i].description}</p>
              <p class="card-text"><small class="text-muted">${movies[i].pegi}</small></p>
            </div>
          </div>
        </div>
      </div>
              `
            }
        })
        .catch(function(error) {
            console.log(error);
        });
  }

  cargarJSON()