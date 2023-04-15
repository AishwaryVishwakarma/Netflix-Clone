import React from 'react'
import './App.scss'
import ProfilesPage from './pages/profiles/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProfilesPage />
  },
  {
    path: '/home',
    element: <HomePage />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
