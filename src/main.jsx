import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import routes from './routes/Routes'
import ThemeProvider from './provider/ThemeToggle';
import AuthProvider from './provider/AuthProvider';
createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </AuthProvider>

  </React.StrictMode>,
)
