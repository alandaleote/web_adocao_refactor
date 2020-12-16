import React, { Component} from 'react'
import axios from 'axios'
import api from '../../../../services/api'
import Main from '../Main/Main'


const headerProps = {
    icon:"paw",
    title:'pet',
    subtitle: 'Cadastro de pets: Incluir, Listar , Alterar, Excluir'
}
const baseUrl = `${api}/pet`
const initialState = {
   
    user: {name: '', especie:'',sexo: '', idade: ''},   
    list: []
}
export default class petsCrud extends Component {

    state = { ...initialState }
    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({user: initialState.user})
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
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

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name" 
                            value={this.state.user.name}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o nome:"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Especie</label>
                            <input type="text" className="form-control" name="especie" 
                            value={this.state.user.especie}
                            onChange={e => this.updateField(e)}
                             placeholder="Digite a especie:"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Sexo</label>
                            <input type="text" className="form-control" name="sexo" 
                            value={this.state.user.sexo}
                            onChange={e => this.updateField(e)}
                             placeholder="Digite o sexo:"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Idade</label>
                            <input type="text" className="form-control" name="idade" 
                            value={this.state.user.idade}
                            onChange={e => this.updateField(e)}
                             placeholder="Digite a idade:"/>
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

    load(user) {
        this.setState({user})
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({list})
        })
    }

    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Especie</th>
                        <th>Sexo</th>
                        <th>Idade</th>
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
                    <td>{user.name}</td>
                    <td>{user.especie}</td>
                    <td>{user.sexo}</td>
                    <td>{user.idade}</td>
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
