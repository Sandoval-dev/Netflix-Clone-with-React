import fetcher from "@/libs/fetcher";
import useSWR from "swr";


const useFavoriteMovie = () =>{
    const{data, error, isValidating, mutate} =useSWR('/api/favoriteList', fetcher, {
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

export default useFavoriteMovie