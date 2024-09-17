import { MovieInterface } from '@/types'
import React, { useCallback } from 'react'
import { PlayIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import FavoriteButton from './FavoriteButton'
import { useRouter } from 'next/router'
import useInfoModalStore from '@/hooks/useInfoModalStore'


interface MovieCardProps {
    data: MovieInterface
}

const MovieCard = ({ data }: MovieCardProps) => {

    const router = useRouter()
    const {openModal}=useInfoModalStore()


    const redirectToWatch = useCallback(() =>
        router.push(`/watch/${data.id}`), [router, data.id])
    return (
        <div className='group bg-zinc-800 col-span-1 relative h-52'>
            <img onClick={redirectToWatch} src={data.thumbnailUrl}
                className='h-52 
               *: w-full object-cover
               shadow-xl rounded-lg
               group-hover:opacity-70
               cursor-pointer'/>

            <div className='opacity-0 w-full z-20 group-hover:opacity-100
          absolute top-0 scale-0 group-hover:scale-105 invisible sm:visible'>
                <img onClick={redirectToWatch} src={data.thumbnailUrl} className='h-36 
            w-full object-cover
            shadow-xl rounded-lg
            cursor-pointer' />
                <div className='z-20 bg-zinc-800 p-2 shadow-lg rounded-b-md lg:p-4 w-full absolute'>

                    <div className='flex flex-row items-center gap-4'>
                        <div className='bg-white border-2 cursor-pointer border-white hover:border-2 hover:border-neutral-300 transition flex items-center rounded-full w-7 h-7 justify-center lg:h-11 lg:w-11'>
                            <PlayIcon onClick={redirectToWatch} className='text-black w-4 lg:w-6' />
                        </div>
                        <div>
                            <FavoriteButton movieId={data.id} />
                        </div>
                        <div onClick={()=>openModal(data?.id)} className='ml-auto flex items-center justify-center rounded-full 
                           w-7 h-7 lg:w-11 lg:h-11
                           transition 
                           border-2
                           cursor-pointer'>
                            <ChevronDownIcon className='text-white w-4 lg:w-6' />
                        </div>
                    </div>
                    <p className='text-green-500 text-sm font-semibold mt-2'>
                        New <span className='text-white ml-2'>2024</span>
                    </p>
                    <div className='flex flex-row mt-2 gap-2 items-center'>
                        <p className='text-white text-sm'>{data.duration}</p>
                    </div>
                    <div className='flex flex-row mt-2 gap-2 items-center'>
                        <p className='text-white text-sm'>{data.genre}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieCard