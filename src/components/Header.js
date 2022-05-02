import {Link} from "react-router-dom"

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <Link className="logo" title="Reading.com | Edify Education" to="/"><i className="fa-solid fa-book-open"></i> Reading.com</Link>                            
                    </div>
                    
                    <div className="col">
                        <Link title="Meus livros" to="/">Meus livros</Link>
                    </div>
                    
                    <div className="col-auto">
                        <button className="btn-off profile"><span className="user"><i className="fa-solid fa-user"></i></span></button>
                    </div>
                </div>
            </div>
        </header>
    );
}