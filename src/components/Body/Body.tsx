import { useProject } from "@/hooks"
import { motion } from "framer-motion"
import { Spinner } from "../Spinner"

const Body = () => {
    const projects = useProject()
    return (
        <div className="sm:pb-12 pb-9 flex justify-center">
            <div>
                {projects
                    ? projects?.map(({ id, href, name, desc, tags }, i) =>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.99 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="p-4" key={id}
                        >
                            <a href={href} className='hover:underline sm:no-underline underline font-semibold' target="_blank">
                                {name}
                            </a>
                            <p>{desc}</p>
                            <div className='flex flex-wrap text-sm'>
                                {tags.map((tag, i) =>
                                    <div className='px-1' key={i}>{tag}</div>
                                )}
                            </div>
                        </motion.div>
                    )
                    : <Spinner />
                }
            </div>
        </div>
    )
}

export default Body