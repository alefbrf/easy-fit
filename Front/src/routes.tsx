import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function AppRouter() {

    return (
        <main>
            <Router>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </Router>
        </main>
    )
}