import { Produto } from './../../../models/produtos.models/produtos.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-produtos-delete',
  templateUrl: './produtos-delete.component.html',
  styleUrls: ['./produtos-delete.component.scss']
})
export class ProdutosDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Produto) { }

  ngOnInit(): void {
  }

}
