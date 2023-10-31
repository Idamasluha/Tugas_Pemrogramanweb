import logo from "../assets/logo.png"
import React, { Component } from 'react'

function NavbarLandingComponent() {
    return (
        <>
            <nav class="navbar navbar-expand-lg" style={{ background:"#7E511D"}}>
                <div class="container">
                <img src={logo}/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Contact</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                        <button type="button" class="btn btn-light mx-2">LOG IN</button>
                        <button type="button" class="btn btn-light mx-2">Anonim</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarLandingComponent;