import { contacts } from "@/models"
import { motion } from "framer-motion"

const Footer = () => (
  <div className="sticky bottom-0 w-full border-t h-12 flex justify-center items-center bg-white bg-opacity-70 backdrop-blur dark:bg-slate-800 dark:border-t-slate-700">
    <div className="flex items-center justify-around w-80">
      {contacts.map(({ href, icon }, i) => (
        <motion.a
          key={i}
          className="hover:underline p-3 rounded-lg"
          href={href}
          target={"_blank"}
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.95, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.2,
            delay: i * 0.1 + 0.5,
          }}
        >
          {icon}
        </motion.a>
      ))}
    </div>
  </div>
)

export default Footer
