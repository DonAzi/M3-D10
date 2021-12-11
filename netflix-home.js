// let getGenre = new URLSearchParams(window.location.search).get("getGenre");
// const getID = new URLSearchParams(window.location.search).get("getID");

const getMovies = async () => {
  let fetchData = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIyMDAzOTY4YjNlMDAwMTViN2FjYjEiLCJpYXQiOjE2MzkwNTU0MTgsImV4cCI6MTY0MDI2NTAxOH0.XTaSP1lDIsQ_Ug_tZNsfvN_fuvKMP8Jx1AsQTiyG7VA",
        "Content-Type": "application/json",
      },
    }
  );
  let data = await fetchData.json();
  console.log("why im being ARRAY =>", data);

  let row = document.getElementById("row");
  row.innerHTML = "";
  //
  data.forEach((movie) => {
    const col = `
    <div class="col-sm-6 col-md-4 col-lg-2 mb-1 pr-0">
          <img
            class="img-fluid"
            src="${movie.url}" alt="${movie.category}"
          />
          <div><span>${movie.category}</span></div>
        </div>
        <div class="img-wrap col-sm-6 col-md-4 col-lg-2 mb-1 pr-0 pl-1">
</div>
            `;
    row.innerHTML += col;
  });
};
// ====================================================================// ====================================================================
const addMoive = async () => {
  let movies = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    category: document.getElementById("category").value,
    imageUrl: document.getElementById("url").value,
  };
  let postData = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies",
    {
      method: "POST",
      body: JSON.stringify(movies),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIyMDAzOTY4YjNlMDAwMTViN2FjYjEiLCJpYXQiOjE2MzkwNTU0MTgsImV4cCI6MTY0MDI2NTAxOH0.XTaSP1lDIsQ_Ug_tZNsfvN_fuvKMP8Jx1AsQTiyG7VA",
        "Content-Type": "application/json",
      },
    }
  );
  return postData.json();

  if (postData.ok) {
    alert("Movie is added sucessfully ");
  } else {
    console.log("Error!");
  }
};
let resetBtn = (e) => {
  document.querySelector("#name").value = "";
  document.querySelector("#description ").value = "";
  document.querySelector("#url").value = "";
  document.querySelector("#category").value = "";
};

window.onload = () => {
  getMovies();
  addMoive();
};
// {
//     "name": "Strive School",
//     "description": "Horror movie about coding 10 hours per day",
//     "category": "horror",
//     "imageUrl": "https://bit.ly/3cMc2IH"
// }
