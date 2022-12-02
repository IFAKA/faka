import { IProject } from "@/models"
import { motion } from "framer-motion"

const Project = ({ project, i }: { project: IProject; i: number }) => {
  const { id, href, name, desc, tags } = project
  return (
    <motion.a
      className="rounded-xl h-full flex flex-col justify-between px-4 pt-3 pb-4 cursor-pointer border dark:border-none hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700"
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
    >
      <h1 className="font-semibold text-lg mb-2">{name}</h1>
      <p role="paragraph" className="mb-5">
        {desc}
      </p>
      <div className="flex border-t pt-1.5 flex-wrap text-sm">
        {tags?.map((tag, i) => (
          <div className="pr-2 mt-2" key={i} role="tag">
            {tag}
          </div>
        ))}
      </div>
    </motion.a>
  )
}
export default Project
