import React from 'react'
import { Route } from 'react-router-dom'
import { publicRoutes } from '../routes'

export default function AppRouter() {
    return (
        <div>
            {publicRoutes.map(({path, Component})=> <Route path = {path} component = {Component} key ={path}  exact/>)}
        </div>
    )
}
