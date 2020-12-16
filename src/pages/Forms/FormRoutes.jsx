import React from 'react'
import {Switch, Route, Redirect } from 'react-router'

import Home from './components/home/Home'
import UserCrud from './components/user/AdotanteCrud'
import PetsCrud from './components/user/PetsCrud'
import OngCrud from './components/user/OngCrud'
import AdotanteCrud from './components/user/AdotanteCrud'

export default _props =>
    <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/home/users' component={UserCrud} />
        <Route path='/home/pet' component={PetsCrud} />
        <Route path='/home/ong' component={OngCrud} />
        <Route path='/home/adotante' component={AdotanteCrud} />
        {/* <Route path='/pagPet' component={'https://webadocao.herokuapp.com/'}/> */}
        <Redirect from='*' to='/' />
    </Switch>