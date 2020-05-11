import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// STYLESHEET
import './App.scss';

// COMPONENTS
import Header from './components/Header'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Brands from './components/Brands'
import Form from './components/Form';
// PAGES
// import Home from './pages/Home';
import Items from './pages/Items';

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome"

function App() {
    const [formOpen, toggleForm] = useState(false);
    const [stockShown, updateStockShown ] = useState(/special-buy/.test(window.location.pathname))

    return (
        <>
            <Header stockShown={stockShown} updateStockShown={(e,val) => updateStockShown(val)}/>
            <Nav stockShown={stockShown} updateStockShown={(e,val) => updateStockShown(val)}/>
            <Route exact path='/'>
                <Form formOpen={formOpen}/>
            </Route>
            <Route path='/special-buy'>
                <Items />
            </Route>
            <Brands />
            <Footer />

            {/*  */}

            <FormToggle toggleForm={e => toggleForm(!formOpen)}/>
        </>
    );
}

function FormToggle(props) {
    return (
        <div className="toggle" onClick={e => props.toggleForm(e)}>
            <p className="toggle--text">contact us</p>
            <FAIcon icon={faPaperPlane} className="toggle--icon"/>
        </div>
    )
}

export default App;
