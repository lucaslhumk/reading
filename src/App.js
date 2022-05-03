import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { AddBook } from './pages/AddBook.js';
import { MyBooks } from './pages/MyBooks.js';
import './css/style.min.css'

export default function App() {
    return (
        <>
            <Router>
                <Header />

                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<MyBooks />}></Route>
                        <Route exact path="/adicionar-livro" element={<AddBook />}></Route>
                    </Routes>
                </div>                

                <Footer />
            </Router>
        </>
    );
}