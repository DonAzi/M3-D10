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
  //   console.log(data);

  const row = document.querySelector("#row");
  row.innerHTML = "";
  //
  data.forEach((movie) => {
    const col = `
    <div class="img-wrap col-sm-6 col-md-4 col-lg-2 mb-1 pr-0">
          <img
            class="image-card img-fluid"
            src="${url}"
          />
        </div>
        <div class="img-wrap col-sm-6 col-md-4 col-lg-2 mb-1 pr-0 pl-1">
          <img
            class="image-card img-fluid"
            src="https://picsum.photos/200/120"
          />
</div>
            `;
    row.innerHTML += col;
  });
};
// ====================================================================// ====================================================================
const addMoive = async () => {
  let movies = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    category: document.querySelector("#category").value,
    imageUrl: document.querySelector("#url").value,
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
