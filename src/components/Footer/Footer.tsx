import { contacts } from '@/models'
import { motion } from "framer-motion"

const Footer = () =>
    <motion.div className='fixed bottom-0 py-1.5 w-full flex justify-center bg-white bg-opacity-70 backdrop-blur dark:bg-slate-800 border-t dark:border-t-slate-700'
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
    >
        <div className='flex justify-around w-80 text-sm'>
            {contacts.map(({ href, name }, i) => (
                <a
                    key={i}
                    className="hover:underline"
                    href={href}
                    target={name === "cv" ? "_self" : "_blank"}
                    download={name === "cv"}
                >
                    {name}
                </a>
            ))}
        </div>
    </motion.div>

export default Footer