import { Component, Input, OnInit } from '@angular/core';

import { Aluno } from '../aluno/aluno';


const LISTA_ALUNOS: Aluno[] = [
  { nome: 'Araci', serie: '1ª série', turma: 'I', professor: 'Magali' },
  { nome: 'Jéssica', serie: '5ª série', turma: 'A', professor: 'Márcia' },
  { nome: 'Danilo', serie: '3ª série', turma: 'D', professor: 'Daniel' },
  { nome: 'Raphael', serie: '4ª série', turma: 'R', professor: 'Gil' }
]


@Component({
  selector: 'spa-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
})

export class AlunoComponent implements OnInit {


 exibeTabela: boolean = false;
  
  constructor() {}

  displayColumns: string[] = ['nome', 'serie', 'turma', 'professor']
  dataSource = LISTA_ALUNOS
  

  ngOnInit(): void {}

  exibirTabela(){
    this.exibeTabela = true
  }

  esconderTabela(){
    this.exibeTabela = false
  }
}
