import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { AdicionarLivro } from './components/AdicionarLivro.js';
import { MeusLivros } from './components/MeusLivros.js';
import './css/style.min.css'

export default function App() {
    return (
        <>
            <Router>
                <Header />

                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<MeusLivros />}></Route>
                        <Route exact path="/adicionar-livro" element={<AdicionarLivro />}></Route>
                    </Routes>
                </div>                

                <Footer />
            </Router>
        </>
    );
}