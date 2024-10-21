import DetailView from './routes/DetailView';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../routes/Layout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
          <Link style={{ color: "white" }} to="/">
            Back to Home
          </Link>
          </main>
          }
        />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

