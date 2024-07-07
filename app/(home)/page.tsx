"use client"

import { useEffect, useState } from "react";
import Navigation from "../../components/navigation";

export default function Root(){
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async()=>{
        const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
        const json = (await response).json();
        setMovies(await json);
        setIsLoading(false);
    }
    useEffect(()=>{
        getMovies();
    }, []);
    return (
        <div>
            {isLoading ? "Lading..." : JSON.stringify(movies)}
        </div>
    )
}