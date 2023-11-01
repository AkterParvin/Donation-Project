import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import ErrorPage from './Components/Root/ErrorPage.jsx'
import Home from './Components/Home/Home.jsx'
import Statistics from './Components/Pages/Statistics/Statistics.jsx'
import Donation from './Components/Pages/Donation/Donation.jsx'
import DonationDetails from './Components/Home/DonationDetails'
const createRoute = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('/data.json')

      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/donationDetails/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/data.json'),
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createRoute} />
  </React.StrictMode>,
)
