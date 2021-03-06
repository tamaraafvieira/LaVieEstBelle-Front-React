import React from "react";
import Header from "../../componentegenerico/Header";
import Footer from "../../componentegenerico/Footer";
import "./style.css";

function Clientes () {
    return (
        <div>
            <Header/>
                <div class="clientes">
                <h2>Lista de clientes cadastrados.</h2>
                <br/>    
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10">
                                <h2>Clientes Cadastrados</h2>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>CodigoCliente</th>
                                            <th>Nome</th>
                                            <th>Cpf</th>
                                            <th>E_mail</th>
                                            <th>Rua</th>
                                            <th>Numero</th>
                                            <th>Complemento</th>
                                            <th>Cep</th>
                                        </tr>
                                    </thead>                                    
                                </table>                                
                            
                                <hr />
                                <h2>Cadastrar</h2>
                                <form asp-controller="Cliente" asp-action="Index">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="">Nome completo</label>
                                            <input asp-for="Nome" type="text" class="form-control" id="" placeholder="Nome Completo"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="">Cpf</label>
                                            <input asp-for="Cpf" type="text" class="form-control" id="" placeholder="000.000.000-00"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="">E_mail</label>
                                            <input asp-for="E_mail" type="text" class="form-control" id="" placeholder="e-mail"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="">Rua</label>
                                            <input asp-for="Rua" type="text" class="form-control" id=""/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="">Numero</label>
                                            <input asp-for="Numero" type="int" class="form-control" id=""/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="">Complemento</label>
                                            <input asp-for="Complemento" type="text" class="form-control" id=""/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="">Cep</label>
                                            <input asp-for="Cep" type="text" class="form-control" id=""/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="">Situa????o</label>
                                            <select class="custom-select" asp-for="Situacao">
                                                <option selected>-- Selecione uma op????o</option>
                                                <option>Ativo</option>
                                                <option>Inativo</option>
                                                <option>Bloqueado</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-success">Incluir</button>
                                </form>
                                <br />
                                <hr />
                                <br />
                                <h2>Atualizar Dados</h2>
                                <form asp-controller="Cliente" asp-action="Atualizar">

                                    <div class="form-row">
                                        <div class="form-group col-md-3">
                                            <label for="">C??digo do cliente</label>
                                            <select class="custom-select" asp-for="CodigoCliente">
                                                <option selected>-- Selecione um c??digo</option>                                                
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="">Nome completo</label>
                                            <input asp-for="Nome" type="text" class="form-control" id="" placeholder="Nome Completo"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="">CPF</label>
                                            <input asp-for="Cpf" type="text" class="form-control" id="" placeholder="000.000.000-00"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="">E_mail</label>
                                            <input asp-for="E_mail" type="text" class="form-control" id="" placeholder="e-mail"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="">Rua</label>
                                            <input asp-for="Rua" type="text" class="form-control" id=""/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="">Numero</label>
                                            <input asp-for="Numero" type="int" class="form-control" id=""/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="">Complemento</label>
                                            <input asp-for="Complemento" type="text" class="form-control" id=""/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="">Situa????o</label>
                                            <select class="custom-select" asp-for="Situacao">
                                                <option selected>-- Selecione uma op????o</option>
                                                <option>Ativo</option>
                                                <option>Inativo</option>
                                                <option>Bloqueado</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Atualizar</button>
                                </form>
                            </div>
                        </div>
                    </div>
            <Footer/>
        </div>
    );
}
export default Clientes;