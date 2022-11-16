import { useProject } from "@/hooks"
import { motion } from "framer-motion"
import { Spinner } from "../Spinner"

const Body = () => {
  const projects = useProject()
  return (
    <div className="pb-12 p-4 grid place-items-center min-h-[calc(100%-74px)]">
      <div className="grid gap-4 max-w-xs">
        {projects ? (
          projects?.map(({ id, href, name, desc, tags }, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.2,
                delay: i * 0.1,
              }}
              key={id}
            >
              <a
                href={href}
                className="hover:underline sm:no-underline underline font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                {name}
              </a>
              <p>{desc}</p>
              <div className="flex flex-wrap text-sm">
                {tags?.map((tag, i) => (
                  <div className="px-1" key={i}>
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  )
}

export default Body
