import React, { lazy, Suspense } from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Error from './Components/Error';
import Cart from './Components/Cart'
import RestaurantMenu from './Components/RestaurantMenu';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
// const Grocery=lazy(()=>import('./Components/Grocery'));


const App=()=>{

    return (
        <Provider store={appStore}>
        <div>
            <Header/>
            <Outlet/>
        </div>
        </Provider>
    )
}

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            // {
            //     path:'/grocery',
            //     element:<Suspense fallback={<h1> this is a fallBack for grocery</h1>}><Grocery/></Suspense>
            // },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
])


const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>);