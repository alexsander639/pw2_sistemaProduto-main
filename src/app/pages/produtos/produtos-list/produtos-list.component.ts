import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  navigateToProdutosCreate():void{
    this.router.navigate(['/produtos/criar']);
  }

}
