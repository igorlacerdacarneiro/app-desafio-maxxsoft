import { Component, OnInit } from '@angular/core';
import { ContatoService } from './contato.service';
import { Contato } from './contato';
import { clone} from "lodash";

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
	
	contatos: Contato[];
	contatoForm: boolean = false;
	editContatoForm: boolean = false;
	isNewForm: boolean;
	newContato: any = {};
	editContato:any = {};

	constructor(private _contatoService: ContatoService) { }

	ngOnInit() {
		this.getContatos();
	}

	getContatos(){
		this.contatos = this._contatoService.getContatosFromData();
	}

	showEditContatoForm(contato: Contato){
		if(!contato){
			this.contatoForm = false;
			return
		}
		this.editContatoForm = true;
		this.editContato = clone(contato);
	}

	showAddContatoForm(){
		if(this.contatos.length){
			this.newContato = {};
		}
		this.contatoForm = true;
		this.isNewForm = true;
	}

	saveContato(contato: Contato){
		if(this.isNewForm){
			this._contatoService.addContatoService(contato);
		}
		this.contatoForm = false;
	}

	updateContato(){
		this._contatoService.updateContatoService(this.editContato);
		this.editContatoForm = false;
		this.editContato = {};
	}

	cancelAddContato(){
		this.newContato = {};
		this.contatoForm = false;
	}

	cancelUpdateContato(){
		this.editContato = {};
		this.editContatoForm = false;
	}

	removeContato(contato: Contato){
		this._contatoService.removeContatoService(contato);
	}

}