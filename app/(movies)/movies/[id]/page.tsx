import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieInfo, { getMovie } from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos"

interface IParams{
    params:{id : string}
}

export async function generateMetadata({params:{id}}:IParams) {
    const movie = await getMovie(id)
    return{
        title:movie.title,
    }
}

export default async function MoviesDetail({params:{id}}:IParams){
    return <div>
        <Suspense fallback={<h1>Lodaing movie info</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Lodaing movie Video</h1>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>
}
