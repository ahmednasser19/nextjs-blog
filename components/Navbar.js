import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/home" legacyBehavior>
                                    <a className={"nav-link " + `${router.pathename === "/" ? "active" : ''}`} aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about" legacyBehavior>
                                    <a className={"nav-link " + `${router.pathename === "/" ? "active" : ''}`} >About</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/blog" legacyBehavior>
                                    <a className={"nav-link " + `${router.pathename === "/" ? "active" : ''}`}  >Blog</a>
                                </Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar