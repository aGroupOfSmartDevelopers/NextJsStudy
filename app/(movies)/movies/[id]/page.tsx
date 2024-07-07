import { API_URL } from "../../../(home)/page"

async function getMovie(id:string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id:string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
}

export default async function MoviesDetail({params:{id}}:{
    params:{id :string}
}){
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
    return <h1>{movie.title}</h1>
}