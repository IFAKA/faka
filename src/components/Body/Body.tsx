import { projects } from '@/models'

const Body = () =>
    <div className='lg:py-12 py-9 w-full h-full flex justify-center items-center px-4'>
        <div className='md:py-0 py-4 grid grid-cols-1 sm:grid-cols-3 md:gap-8 gap-4'>
            {projects.map(({ src, title, img, desc }) => (
                <div className='md:w-64'>
                    <a href={src} className='md:w-64' target="_blank">
                        <img className='hidden sm:block sm:hover:scale-95 hover:cursor-pointer duration-150 ease-in-out' src={img} />
                        <h2 className='sm:no-underline underline font-semibold md:pt-1.5 sm:text-center text-start'>{title}</h2>
                    </a>
                    <p className='whitespace-pre-wrap sm:text-center text-start'>{desc}</p>
                </div>
            ))}
        </div>
    </div>

export default Body