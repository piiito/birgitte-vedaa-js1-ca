const API_URL = "https://genius.p.rapidapi.com/artists/16775/songs";
const options = {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": "87d043e3b3msh3eda0ce6453558ep19fe91jsnf22b4d38eb1e"
	}
};
const newHtml = document.querySelector(".loader");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

newHtml.innerHTML = "";

async function getSongs() {
const response = await fetch(API_URL, options)
const results = await response.json();
const songs = results.response.songs;
console.log(songs);


    for(let i = 0; i < songs.length; i++){
        console.log(songs[i]);
        newHtml.innerHTML += `<div><a href="/details.html?id=${songs[i].id}"> 
                            <h2>${songs[i].title} </h2>
                            <img src="${songs[i].header_image_thumbnail_url}"alt="${songs[i].title}"/>
                            <p>${songs[i].artist_names} </p>
                            </a>
                            </div>`;

    }

}

getSongs();





