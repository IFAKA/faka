import React from 'react'

const EasterEgg = () => {
    return (
        <div className='flex justify-center text-start p-4'>
            <div className='pt-24'>
                <img src='/assets/trex.png' className='h-20 mb-5' />
                <h1 className='mb-4 text-2xl h-7 font-semibold'>No internet</h1>
                <div className='text-stone-500'>
                    <p className='mt-4'>Try:</p>
                    <ul className='list-disc mb-4 pl-10'>
                        <li>Checking the network cables, modem, and router</li>
                        <li>Reconnecting to Wi-Fi</li>
                        <li>
                            <a className='text-blue-900' href='https://youtu.be/dQw4w9WgXcQ' target='_blank' >Click here to check your Network</a>
                        </li>
                    </ul>
                </div>
                <div className='mt-3 text-xs'>ERR_INTERNET_DISCONNECTED</div>
            </div>
        </div>
    )
}

export default EasterEgg