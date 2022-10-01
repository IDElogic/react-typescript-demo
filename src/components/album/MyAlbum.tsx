type Album = {
    userId: number;
    id: number;
    title: string;
    photos?: Array<Photo>
}
 
type Photo = {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

  async function getAlbums(){
    const fetchedAlbums = await fetch("https://jsonplaceholder.typicode.com/albums").then(response => {
        return response.json() as Promise<Album[]>
    });
    const albums = fetchedAlbums.slice(0, 5)
    
    const promisesOfAllPhotos = albums.map((album) => 
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=2" + album.id)
        .then(res =>res.json() as Promise<Photo[]>)
        );
    
    const allPhotos = await Promise.all(promisesOfAllPhotos)
    return albums.map((album, i) => ({...album, photos: allPhotos[i]}))
}  
   
    window.onload = async function () {
        const albums = await getAlbums()
        console.log (albums)
    }

    export const MyAlbum = (albumok: Array<Album>)  => {
        return (
            <div>
                <h1>Albumok:</h1>
                ${albumok.map 
                    (album => `
                    <div>
                    <h3>${album.id}</h3>
                    <p>${album.title}</p>
                    <br/>
                    ${album.photos?.map(photo =>`
                        <img 
                        src="${photo.thumbnailUrl}"
                        style="display: inline-block; margin-right: 6px;
                        width:30px; height: 30px"
                        />
                    `).join("")}
                    </div>
                `).join("")}
            </div>  
        )
    }

  

   