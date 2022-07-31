import data from "../helpers/data"
import { useEffect,useState } from "react"
import Article from "./Article"

const getLocalStorage = () => {
    let theme:any = 'bg-white'
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme')
    }
    return theme
}

const Content = () => {
    const [theme, setTheme] = useState(getLocalStorage())
    const toggleTheme = () => {
        if (theme === 'bg-white') {
            setTheme('bg-gray-900 text-white')
        } else {    
            setTheme('bg-white')
        }
    }
    useEffect(() => {
        document.documentElement.className = theme
        localStorage.setItem('theme', theme)
    }, [theme])
    return (
        <main>
            <nav className="p-6 shadow-lg">
                <div className="nav-center flex px-4">
                    <h1 className="capitalize text-5xl font-bold">overreacted</h1>
                    <button onClick={toggleTheme} className="ml-auto bg-red-400 px-3 rounded-lg">
                        toggle
                    </button>
                </div>
            </nav>
            <div className="flex justify-center mb-20">
                <section className="articles mt-20">
                {data.map((item) => {
                    return <Article key={item.id} {...item} />
                })}
            </section>
            </div>
        </main>
    )
}

export default Content