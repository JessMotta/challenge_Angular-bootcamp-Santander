import { Component, OnInit } from '@angular/core';
import { Professor } from './professor';

const LISTA_PROFESSORES: Professor[]= [
  { nome: 'Magali', email: 'magali@gmail.com', idade: 35, disciplina: 'História' },
  { nome: 'Márcia', email: 'marcia@gmail.com', idade: 20, disciplina: 'Geografia' },
  { nome: 'Daniel', email: 'daniel@gmail.com', idade: 41, disciplina: 'Ciências' },
  { nome: 'Gil', email: 'gil@gmail.com', idade: 50, disciplina: 'Informática' }
]

@Component({
  selector: 'spa-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})

export class ProfessorComponent implements OnInit {
  
  exibeTabela: boolean = false;
  
  constructor() { }

  displayColumns: string[] = ['nome', 'email', 'idade', 'disciplina']
  dataSource = LISTA_PROFESSORES

  ngOnInit(): void {
  }

  exibirTabela(){
    this.exibeTabela = true
  }

  esconderTabela(){
    this.exibeTabela = false
  }

}
