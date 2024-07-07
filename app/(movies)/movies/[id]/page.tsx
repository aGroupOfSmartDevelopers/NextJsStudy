import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieInfo from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos"

export default async function MoviesDetail({params:{id}}:{
    params:{id :string}
}){
    return <div>
        <Suspense fallback={<h1>Lodaing movie info</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Lodaing movie Video</h1>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>
}
