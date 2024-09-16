import useCurrentUser from '@/hooks/useCurrentUser'
import useFavoriteMovie from '@/hooks/useFavorites'
import React, { useCallback, useMemo, useState } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import axios from 'axios'



interface FavoriteButtonProps {
    movieId:string
}
const FavoriteButton = ({movieId}:FavoriteButtonProps) => {

    const {data:muteFavorite} = useFavoriteMovie()
    const {data:user}=useCurrentUser()

    const [isFavorite, setIsFavorite]=useState<boolean>(false)

    useMemo(()=> {
        const list = user?.favoriteIds || []
        setIsFavorite(list.includes(movieId))
    }, [user, movieId])

    const toogleFavorites=useCallback(async() => {
        try {
            if (isFavorite) {
                await axios.delete('/api/favorite', {data: {movieId}})
            }
            else{
                await axios.post('/api/favorite', {movieId})
            }

            setIsFavorite(!isFavorite)
            muteFavorite() 
        } catch (error) {
            console.log("error", error)
        }
    },[movieId, isFavorite, muteFavorite])


    const Icon= isFavorite ? CheckIcon : PlusIcon
  return (
    <div onClick={toogleFavorites} 
    className='cursor-pointer hover:border-neutral-400 border-white rounded-full w-7 h-7 lg:w-11 lg:h-11 flex items-center justify-center border-2'>
      <Icon className='text-white w-4 h-4 lg:w-7 lg:h-7'/>
    </div>
  )
}

export default FavoriteButton
