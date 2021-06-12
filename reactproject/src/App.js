import './App.css';
import * as React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Usuario } from './tablas/usuario';
import 'primeflex/primeflex.css';

class InicioView extends React.Component {
    render() {
        return <h3>Esto es el display</h3>;
    }
}


class App extends React.Component {

    render() {

        return (
        <div className="App">
                <div className={'menu'}>
                    <h3>Menu</h3>
                    <ul>
                        <li>
                            <NavLink to={'/inicio'} activeClassName={'menu-active'}>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/usuarios'} activeClassName={'menu-active'}>Usuarios</NavLink>
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className={'display'}>
                    <Switch>
                        <Route path={'/inicio'}>
                            <InicioView/>
                        </Route>
                        <Route path={'/usuarios'}>
                            <Usuario />
                        </Route>
                    </Switch>
                </div>
        </div>
        );
    }
}

export default App;
