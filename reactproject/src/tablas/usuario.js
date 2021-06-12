import { Fragment } from 'react';
import * as React from 'react';
import 'primeflex/primeflex.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



export class Usuario extends React.Component {
	constructor() {
		super()
		this.state = {
			usuarios: []
		}

		const axios = require('axios').default;

		const promise = axios.get('https://localhost:44392/api/usuarios');

		const promiseResult = promise.then((resolvedResult) => {
			const result = resolvedResult.data;
			
			this.setState({ usuarios: result })
			
		}, (rejectedResult) => {
			console.error(rejectedResult.statusText);
		});
	}


	render() {
		return (
			<Fragment>
				<h3>Usuarios</h3>
				<div>
					<div className="usersTable">
						<DataTable value={this.state.usuarios}>
							<Column field="Email" header="Email"></Column>
							<Column field="Nombre" header="Nombre"></Column>
							<Column field="Apellidos" header="Apellidos"></Column>
							<Column field="Edad" header="Edad"></Column>
						</DataTable>
					</div>
				</div>

					
			</Fragment>
		);
	}

};

