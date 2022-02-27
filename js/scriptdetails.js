const detailContainer = document.querySelector(".details");
const title = document.title;
console.log(title);


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://genius.p.rapidapi.com/songs/" + id;
console.log(url);

const options = {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": "87d043e3b3msh3eda0ce6453558ep19fe91jsnf22b4d38eb1e"
	}
};

async function songDetails(){
        try{
        const fetchResponse = await fetch(url, options);
        const details = await fetchResponse.json();
        console.log(details);

        createHtml(details);
        

    }

    catch(error){
        console.log(error);
        detailContainer.innerHTML = message ("error", error);
    }
    

}

songDetails();

function createHtml(details){
    detailContainer.innerHTML = `<h1>${details.response.song.title}</h1>
                                <img src="${details.response.song.song_art_image_thumbnail_url}"/>
                                <div class="details-artist"> ${details.response.song.artist_names}</div>
                                <time class="details-release"> Release date: ${details.response.song.release_date_for_display}</time>`;
                             
}



