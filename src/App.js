import React from "react";
import Home from "./routes/home/home.component";
import { Routes, Route, Outlet} from 'react-router-dom'
import { Fragment } from "react";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";



export const Shop = () => {
  return (
    <>
     <h1> Shop Sayfası</h1>

    </>
  )
}


const App = () => {

  return (

    <Routes>
      <Route path="/" element = {<Navigation/>}>
        <Route index element = {<Home/>}/>
        <Route path="shop" element = {<Shop/>}/>
        <Route path="sign-in" element = {<SignIn/>}/>
      </Route>
    </Routes>

  ) ;
};

export default App;

