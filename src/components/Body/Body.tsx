import { useProject } from "@/hooks"
import { motion } from "framer-motion"
import { Spinner } from "../Spinner"

const Body = () => {
  const projects = useProject()
  return (
    <>
      {projects ? (
        projects?.map(({ id, href, name, desc, tags }, i) => (
          <motion.a
            className="rounded-xl"
            href={href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.2,
              delay: Math.sqrt(i + 1) * 0.3,
            }}
            key={id}
          >
            <motion.div
              className="rounded-xl w-full h-full flex flex-col justify-between px-4 py-3 cursor-pointer border dark:border-none hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p role="paragraph">{desc}</p>
              </div>
              <div className="flex border-t pt-2.5 flex-wrap text-sm mt-3">
                {tags?.map((tag, i) => (
                  <div className="pr-2" key={i} role="tag">
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.a>
        ))
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default Body
