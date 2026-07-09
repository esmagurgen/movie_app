import { useCallback, useState } from "react";

const TMDB_BASE_URL="https://api.themoviedb.org/3"
const TMDB_ACCESS_TOKEN=process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN || ""

export function useFetch(endpoint:string,query:Record<string,any> = {} ){
  const[data,setData]=useState<any>(null);
  const[loading,setLoading]=useState<any>(true);
  const[error,setError]=useState<string | null>(null);

  const fetchdata=useCallback(async() =>{
    setLoading(true)
    setError(null)
    try{
        
    }
    catch(error){

    }
},[])
}