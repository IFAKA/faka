const Navbar = ({ open }: { open: () => void }) =>
    <div className='lg:py-3 py-1.5 border-b dark:border-b-slate-700 fixed top-0 w-full bg-white dark:bg-slate-800 z-10'>
        <button onClick={open} className='font-bold'>FAKA</button>
    </div>

export default Navbar