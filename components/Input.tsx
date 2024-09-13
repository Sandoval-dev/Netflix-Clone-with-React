import React from 'react'


interface InputProps {
    id: string
    onChange: any;
    value: string;
    label: string;
    type?: string;
}

const Input = ({ id, label, onChange, type, value }: InputProps) => {
    return (
        <div className='relative'>
            <input type={type} placeholder='' id={id} value={value}
                className='block bg-neutral-600 origin-[0] peer focus:outline-none focus:right-0 rounded-xl px-5 pt-4 pb-1 w-full text-base text-white' onChange={onChange} />
            <label
                htmlFor={id}
                className='top-3 left-7 text-base scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 z-10 transition text-zinc-400 absolute'>{label}</label>
        </div>
    )
}

export default Input
