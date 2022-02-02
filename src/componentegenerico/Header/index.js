import React from "react";
import "./style.css";

function Header () {
    return (
        <header>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div class="container-fluid">
                <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">LaVieEstBelle</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="http://localhost:3000/Home">Home</a>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link text-dark" href="http://localhost:3000/Destino">Destino</a>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link text-dark" href="http://localhost:3000/Promocao">Promoções</a>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link text-dark" href="http://localhost:3000/Contato">Contato</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="http://localhost:3000/Clientes">Clientes</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
}
export default Header;