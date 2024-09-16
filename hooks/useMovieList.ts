import fetcher from "@/libs/fetcher";
import useSWR from "swr";


const useMovieList = () =>{
    const{data, error, isValidating, mutate} =useSWR('/api/movies', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    return{
        data,
        error,
        isValidating,
    }
};

export default useMovieList