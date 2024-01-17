import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="fixed z-20 navbar bg-base-100">
        <div className="flex-1">
            <a className="text-xl normal-case btn btn-ghost">daisyUI</a>
        </div>
        <div className="flex-none">
            <ul className="px-1 menu menu-horizontal">
                <li><Link href="/santagrizzlycup">Santa Grizzly Cup</Link></li>
                <li><Link href="/aktualnosci">Aktualności</Link></li>
                <li><Link href="/treningi">Treningi</Link></li>
                <li><Link href="/zapisy">Zapisy</Link></li>
                <li><Link href="/grafik">Grafik</Link></li>
                <li><Link href="/obozy">Obozy</Link></li>
                <li tabIndex={0}>
                <span>
                    O nas
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </span>
                    <ul className="p-2 bg-base-100">
                        <li><Link href="/oklubie">O klubie</Link></li>
                        <li><Link href="/trenerzy">Trenerzy</Link></li>
                        <li><Link href="/gdziejestesmy">Gdzie jesteśmy</Link></li>
                        <li><Link href="/dokumenty">Dokumenty do pobrania</Link></li>
                    </ul>
                </li>
                <li><Link href="/kontakt">Kontakt</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar