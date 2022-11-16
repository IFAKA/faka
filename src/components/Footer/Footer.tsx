import { contacts } from "@/models"
import { motion } from "framer-motion"

const Footer = () => (
  <div className="fixed inset-x-0 bottom-0 py-1.5 w-full flex justify-center bg-white bg-opacity-70 backdrop-blur dark:bg-slate-800 border-t dark:border-t-slate-700">
    <motion.div
      className="flex justify-around w-80 text-sm"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {contacts.map(({ href, name }, i) => (
        <a
          key={i}
          className="hover:underline"
          href={href}
          target={name === "cv" ? "_self" : "_blank"}
          download={name === "cv"}
          rel="noreferrer"
        >
          {name}
        </a>
      ))}
    </motion.div>
  </div>
)

export default Footer
