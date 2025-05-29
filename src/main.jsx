import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import ExpertsPage from './components/experts/ExpertPage'
import LandingPage from './components/landingpage/LandingPage'
import BlogPage from './components/blog/blogpage'
import Register from './auth/Register'
import ExpertProfile from './components/experts/Profile'
import Login from './auth/Login'
import Pricing from './components/pricing/Pricing'
import About from './components/about/About'
import UserProfile from './components/profile/Profile'
// import FeaturedExperts from './components/featutredcard/FeaturedCards'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<LandingPage/>}/>
      {/* <Route path="" element={<FeaturedExperts/>}/> */}
      <Route path="/experts" element={<ExpertsPage/>}/>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="/profile/:id" element={<ExpertProfile />} />
      <Route path="/user-profile/:id" element={<UserProfile />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)