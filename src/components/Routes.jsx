import React ,{Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {appLinks} from "./Links"
import Navbar from "./Navbar";
import Footer from "./Footer";


const Author = React.lazy(() => import("../pages/Author"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const AuthorPost = React.lazy(() => import("../pages/AuthorPost"));
const CategoryPost = React.lazy(() => import("../pages/CategoryPost"));
const CreatePost = React.lazy(() => import("../pages/CreatePost"));
const Delete = React.lazy(() => import("../pages/Delete"));
const Edit = React.lazy(() => import("../pages/Edit"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));
const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/Login"));
const Logout = React.lazy(() => import("../pages/Logout"));
const PostDetail = React.lazy(() => import("../pages/PostDetail"));
const Register = React.lazy(() => import("../pages/Register"));
const Userprofile = React.lazy(() => import("../pages/Userprofile"));

function BaseRouter () {
  return (
    <>
    <Router>
        <Suspense fallback = {<div>Loading</div>}>
        <Navbar/>    
        <Routes>
         <Route exact path={appLinks?.Author} element={<Author />} />
         <Route path={appLinks?.Dashboard} element={<Dashboard />} />
         <Route path={appLinks?.AuthorPost} element={<AuthorPost />} />
         <Route path={appLinks?.CategoryPost} element={<CategoryPost />}/>
         <Route path={appLinks?.CreatePost} element={<CreatePost />} />
         <Route path={appLinks?.Delete} element={<Delete />}  />
         <Route path={appLinks?.Edit} element = {<Edit/>}/>
         <Route path={appLinks?.Errorpage} element={<ErrorPage />} />
         <Route path={appLinks?.Home} element={<Home/>}/>
         <Route path={appLinks?.Login} element={<Login/>}/>
         <Route path={appLinks?.Logout} element={<Logout/>}/>
         <Route path={appLinks?.PostDetail} element={<PostDetail/>}/>
         <Route path={appLinks?.Register} element={<Register/>}/>
         <Route path={appLinks?.Userprofile} element={<Userprofile/>}/>

        </Routes>
        <Footer/>
        </Suspense>
    </Router>
    
    </>
  )
}

export default BaseRouter