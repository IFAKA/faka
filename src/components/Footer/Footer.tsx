import { contacts } from '@/models'

const Footer = () =>
    <div className='lg:py-3 py-1.5 fixed bottom-0 w-full flex justify-center bg-white dark:bg-slate-800 border-t dark:border-t-slate-700 '>
        <div className='flex justify-around w-80'>
            {contacts.map(({ href, name }) => (
                <a
                    className="hover:underline"
                    href={href}
                    target={name === "cv" ? "_self" : "_blank"}
                    download={name === "cv"}
                >
                    {name}
                </a>
            ))}
        </div>
    </div>

export default Footer