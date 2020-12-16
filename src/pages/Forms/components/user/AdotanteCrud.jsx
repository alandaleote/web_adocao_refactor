import React, { Component, useEffect, useState} from 'react'
import axios from 'axios'
import api from '../../../../services/api'
import Main from '../Main/Main'

const headerProps = {
    icon:'heart',
    title:'Adotantes',
    subtitle: 'Cadastro de Adotantes: Incluir, Listar , Alterar, Excluir'
}

// const baseUrl = `${api}/adotante`
const initialState = {
    user: {nome: '', email: '',telefone:'', cidade:''},
    list: []
}

export default class AdotanteCrud extends Component {

    state = { ...initialState }
    componentDidMount() {
        axios.get(`${api}/adotante/todos`).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({user: initialState.user})
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${api}/adotante/atualizar/${user.id}` : `${api}/adotante/adicionar/`
        axios[method](url,user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({user: initialState.user, list})
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add)list.unshift(user)
        return list
    }

    updateField(event) {
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    load(user) {
        this.setState({user})
    }

    remove(user) {
        axios.delete(`${api}/adotante/deletar/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({list})
        })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" required name="nome" 
                            value={this.state.user.nome}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o nome:" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-control" required name="email" 
                            value={this.state.user.email}
                            onChange={e => this.updateField(e)}
                             placeholder="Digite o email:" required/>
                        </div>
                    </div>

                    
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="tel" className="form-control" required name="telefone" 
                            value={this.state.user.telefone}
                            onChange={e => this.updateField(e)}
                             placeholder="Digite o telefone:" required/>
                        </div>
                    </div>

                    
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Cidade</label>
                            <input type="text" className="form-control" required name="cidade" 
                            value={this.state.user.cidade}
                            onChange={e => this.updateField(e)}
                             placeholder="Digite a cidade:" required/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" 
                        onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" 
                        onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>

                </div>
            </div>
        )
        
    }


    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nome}</td>
                    <td>{user.email}</td>
                    <td>{user.telefone}</td>
                    <td>{user.cidade}</td>
                    <hr></hr>
                    <td>
                        <button className="btn ntn-warning"
                        onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                        onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
        }
    render(){
        return(
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}