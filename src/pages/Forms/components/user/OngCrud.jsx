import React, { Component } from 'react'
import axios from 'axios'
import api from '../../../../services/api'
import Main from '../Main/Main'

const headerProps = {
    icon:'heart',
    title:'Ongs',
    subtitle: 'Cadastro de Ongs: Incluir, Listar , Alterar, Excluir'
}

// const baseUrl = `${api}/adotante`
const initialState = {
    ong: {nome: '', email: '',telefone:'', cidade:''},
    list: []
}

export default class OngCrud extends Component {

    state = { ...initialState }
    componentDidMount() {
        axios.get(`${api}/ong/todos`).then(resp => {
            console.log(this)
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ong: initialState.ong})
    }

    adicionar() {
        const ong = this.state.ong
        axios.post(`${api}/ong/adicionar`, ong)
    }

    save() {
        const ong = this.state.ong
        const method = ong.id ? 'put' : 'post'
        const url = ong.id ? `${api}/ong/atualizar/${ong.id}` : `${api}/ong/adicionar`
        axios[method](url,user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ong: initialState.ong, list})
            })
    }

    getUpdatedList(ong, add = true) {
        const list = this.state.list.filter(u => u.id !== ong.id)
        if(add)list.unshift(ong)
        return list
    }

    updateField(event) {
        const ong = {...this.state.ong}
        ong[event.target.name] = event.target.value
        this.setState({ong})
    }

    load(ong) {
        this.setState({ong})
    }

    remove(ong) {
        axios.delete(`${api}/ong/deletar/${ong.id}`).then(resp => {
            const list = this.getUpdatedList(ong, false)
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
                            value={this.state.ong.nome}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o nome:" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-control" required name="email" 
                            value={this.state.ong.email}
                            onChange={e => this.updateField(e)}
                             placeholder="Digite o email:" required/>
                        </div>
                    </div>

                    
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="tel" className="form-control" required name="telefone" 
                            value={this.state.ong.telefone}
                            onChange={e => this.updateField(e)}
                             placeholder="Digite o telefone:" required/>
                        </div>
                    </div>

                    
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Cidade</label>
                            <input type="text" className="form-control" required name="cidade" 
                            value={this.state.ong.cidade}
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
        return this.state.list.map(ong => {
            return (
                <tr key={ong.id}>
                    <td>{ong.id}</td>
                    <td>{ong.nome}</td>
                    <td>{ong.email}</td>
                    <td>{ong.telefone}</td>
                    <td>{ong.cidade}</td>
                    <hr></hr>
                    <td>
                        <button className="btn ntn-warning"
                        onClick={() => this.load(ong)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                        onClick={() => this.remove(ong)}>
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