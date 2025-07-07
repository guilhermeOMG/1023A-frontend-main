import React, { useEffect, useState } from "react"
import './Pagina.css'
interface ClientesState {
    id: number,
    nome: string,
    email: string,
    telefone: string
}

function CadastroCliente() {
    const [id, setId] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [clientes, setClientes] = useState<ClientesState[]>([])
    useEffect(() => {
        const buscaDados = async () => {
            try {
                const resultado = await fetch("http://localhost:8000/clientes")
                if (resultado.status === 200) {
                    const dados = await resultado.json()
                    setClientes(dados)
                }
                if (resultado.status === 400) {
                    const erro = await resultado.json()
                    setMensagem(erro.mensagem)
                    //console.log(erro.mensagem)
                }
            }
            catch (erro) {
                setMensagem("Fetch não functiona")
            }
        }
        buscaDados()
    }, [])// [] => significa as dependências do useEffects
    async function TrataCadastro(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //Criar um novo cliente
        const novoCliente: ClientesState = {
            id: parseInt(id),
            nome: nome,
            email: email,
            telefone: telefone
        }
        try {
            const resposta = await fetch("http://localhost:8000/clientes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoCliente)
            })
           
            if (resposta.status === 200) {
                const dados = await resposta.json()
                setClientes([...clientes, dados])
            }
            if (resposta.status === 400) {
                const erro = await resposta.json()
                setMensagem(erro.mensagem)
                //console.log(erro.mensagem)
            }
            
        }
        catch (erro) {
            setMensagem("Fetch não functiona")
        }

    }
    function trataId(event: React.ChangeEvent<HTMLInputElement>) {
        setId(event.target.value)
    }
    function trataNome(event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value)
    }
    function trataEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }
    function trataTelefone(event: React.ChangeEvent<HTMLInputElement>) {
        setTelefone(event.target.value)
    }
    return (
        <>
            <header>
                <div>Logo</div>
                <nav>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {mensagem &&
                    <div className="mensagem">
                        <p>{mensagem}</p>
                    </div>
                }

                <div className="container-listagem">
                    {clientes.map(cliente => {
                        return (
                            <div className="cliente-container">
                                <div className="cliente-nome">
                                    {cliente.nome}
                                </div>
                                <div className="cliente-email">
                                    {cliente.email}
                                </div>
                                <div className="cliente-telefone">
                                    {cliente.telefone}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="container-cadastro">
                    <form onSubmit={TrataCadastro}>
                        <input type="text" name="id" id="id" onChange={trataId} placeholder="Id" />
                        <input type="text" name="nome" id="nome" onChange={trataNome} placeholder="Nome" />
                        <input type="email" name="email" id="email" onChange={trataEmail} placeholder="Email" />
                        <input type="text" name="telefone" id="telefone" onChange={trataTelefone} placeholder="Telefone" />
                        <input type="submit" value="Cadastrar" />
                    </form>

                </div>
            </main>
            <footer></footer>
        </>
    )
}

export default CadastroCliente