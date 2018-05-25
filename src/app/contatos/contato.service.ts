import { Injectable } from '@angular/core';
import { Contato } from './contato';
import { CONTATOS_ITENS } from './contato-data';
import { findIndex } from "lodash";

@Injectable()
export class ContatoService {
	private cItens = CONTATOS_ITENS;

	getContatosFromData(): Contato[]{
		console.log(this.cItens);
		return this.cItens;
	}

	addContatoService(contato: Contato){
		this.cItens.push(contato);
		console.log(this.cItens);
	}

	updateContatoService(contato: Contato){
		let index = findIndex(this.cItens, (p: Contato) =>{
			return p.id === contato.id;
		});
		this.cItens[index] = contato;
	}

	removeContatoService(contato: Contato){
		this.cItens.splice(this.cItens.indexOf(contato), 1);
		console.log(this.cItens);
	}
	
}