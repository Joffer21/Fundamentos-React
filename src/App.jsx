import React from "react";
import "./App.css"

import Primeiro from './Components/basico/Primeiro'
import ComParametro from './Components/basico/ComParamentro'
import Fragmento from './Components/basico/Fragmento'
import Aleatorio from './Components/basico/Aleatorio'
import Card from "./Layout/Card";
import Familia from "./Components/basico/Familia";
import FamiliaMembro from "./Components/basico/FamiliaMembro";
import ListaAlunos from "./Components/basico/Repeticao/ListaAlunos";
import TabelaProdutos from "./Components/basico/Repeticao/TabelaProdutos";

export default () => (
    <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#07 - Desafio Repetição" color="#45ADA8">
               <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#99B898">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#E1F5C4">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#A7226E">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#EC2049">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#F7DB4F">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#2F9599">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>

)   