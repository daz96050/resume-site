import {lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import NavBar from 'AppComponents/Navigation/NavBar';
import {CircularProgress} from '@mui/material';
function App() {
    return (
        <>

        <BrowserRouter basename={"/"}>
            <Suspense fallback={<CircularProgress/>}>
            <NavBar/>
            </Suspense>
        </BrowserRouter>
        </>
    );
}

export default App;
