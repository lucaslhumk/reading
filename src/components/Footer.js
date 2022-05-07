import { Link } from "react-router-dom"

export function Footer() {
    return (
        <footer>
            <hr />

            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-lg-3 mb-3">
                        <Link className="logo" title="Reading.com | Edify Education" to="/"><i className="fa-solid fa-book-open"></i> Reading.com</Link>
                        <p>Reading.com é um produto fictício para ajudar no processo seletivo para o time de Produto & Desenvolvimento da Hivecloud.</p>
                    </div>

                    <div className="col-6 col-lg-auto mb-4">
                        <h6>Reading.com</h6>
                        <ul className="menu-footer">
                            <li><Link title="Meus livros" to="/">Meus livros</Link></li>
                            <li><Link title="Comunidade" to="/">Comunidade</Link></li>
                            <li><Link title="Novidades" to="/">Novidades</Link></li>
                            <li><Link title="Aplicativos" to="/">Aplicativos</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-lg-auto mb-4">
                        <h6>Sobre nós</h6>
                        <ul className="menu-footer">
                            <li><Link title="Blog" to="/">Blog</Link></li>
                            <li><Link title="Nossa missão" to="/">Nossa missão</Link></li>
                            <li><Link title="Contato" to="/">Contato</Link></li>
                            <li><Link title="Carreiras" to="/">Carreiras</Link></li>
                        </ul>
                    </div>

                    <div className="col-12 col-lg-3">
                        <h6>Inscreva-se</h6>
                        <form>
                            <input type="email" placeholder="Seu e-mail" className="mb-3 form-control" />
                            <button className="subscribe" type="submit">Inscrever</button>
                        </form>
                    </div>
                </div>
            </div>

            <hr />

            <p className="text-center">Copyright © 2022 Reading All rights reserved</p>
        </footer>
    );
}