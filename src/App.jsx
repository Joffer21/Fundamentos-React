import React from "react";
import "./App.css"

import Primeiro from './Components/Basico/Primeiro'
import ComParametro from './Components/Basico/ComParamentro'
import Fragmento from './Components/Basico/Fragmento'
import Aleatorio from './Components/Basico/Aleatorio'
import Card from "./Layout/Card";
import Familia from "./Components/Basico/Familia";
import FamiliaMembro from "./Components/Basico/FamiliaMembro";
import ListaAlunos from "./Components/Repeticao/ListaAlunos";
import TabelaProdutos from "./Components/Repeticao/TabelaProdutos";
import ParOuImpar from "./Components/Condicional/ParOuImpar";
import UsuarioInfo from "./Components/Condicional/UsuarioInfo";
import DiretaPai from "./Components/Comunicacao/DiretaPai";
import IndiretaPai from "./Components/Comunicacao/IndiretaPai";
import Input from "./Components/Formularios/Input";
import Contador from "./Components/Contador/Contador";
import Mega from "./Components/Mega/Mega";


export default () => (
    <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#13 - Mega Sena" color="#96ceb4">
                <Mega qtde={8} />
            </Card>

            <Card titulo="#12 - Contador" color="#35a79c">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado" color="#adcbe3">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#f6cd61">
                <IndiretaPai></IndiretaPai>
            </Card>


            <Card titulo="#09 - Comunicação Direta" color="#f6abb6">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional Par ou Ímpar" color="#6497b1">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                {/*<UsuarioInfo usuario={{}}/>*/}
            </Card>

            <Card titulo="#08 - Renderização Condicional Par ou Ímpar" color="#251e3e ">
                <ParOuImpar numero={20}></ParOuImpar>
            </Card>

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