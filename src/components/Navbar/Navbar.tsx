import { motion } from "framer-motion"
const Navbar = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    className="font-bold sticky top-0 w-full text-center sm:py-2 py-1.5 border-b dark:border-b-slate-700 bg-white bg-opacity-80 backdrop-blur dark:bg-slate-800"
  >
    FAKA
  </motion.div>
)

export default Navbar
