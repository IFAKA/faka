import { motion } from "framer-motion"
const Navbar = () => (
  <div className="sticky top-0 w-full border-b h-12 flex justify-center items-center bg-white bg-opacity-70 backdrop-blur dark:bg-slate-800 dark:border-t-slate-700">
    <motion.div
      className="font-semibold text-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.2,
        delay: 0.15,
      }}
    >
      FAKA
    </motion.div>
  </div>
)

export default Navbar
