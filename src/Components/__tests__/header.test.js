import { fireEvent, render, screen } from "@testing-library/react";
import Header from '../Header';
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it('Should render header component with login button',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    )
    const logginBtn= screen.getByRole('button');
    expect(logginBtn).toBeInTheDocument();
});

it('Should render header component with sign In text of loggin button',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    )
    const SignInbtn=screen.getByRole('button',{name:'Sign In'})
    expect(SignInbtn).toBeInTheDocument();
    
})
it('Should render Sign Out btn after click event of sign In btn',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );

    const SignInbtn=screen.getByRole('button',{name:'Sign In'});
    fireEvent.click(SignInbtn);
    const signOutBtn=screen.getByRole('button',{name:'Sign Out'});
    expect(signOutBtn).toBeInTheDocument();
})