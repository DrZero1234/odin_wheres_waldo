const style = {
    navbarStyle : `border border-gray-200 rounded-lg rounded-b-none bg-gray-50 dark:border-gray-600 dark:bg-gray-700`,
    navbarContainer: `flex flex-wrap justify-center items-center mx-auto max-w-screen-xl`,
    navbarTitle: `mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white`
}

export const Navbar = () => {
    return(
    <nav className={style.navbarStyle}>
        <div className={style.navbarContainer}>
            <h1 className={style.navbarTitle}>Where´s Waldo</h1>
        </div>
    </nav>
    )
}