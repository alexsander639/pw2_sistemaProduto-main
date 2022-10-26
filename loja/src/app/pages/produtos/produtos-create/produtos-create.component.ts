import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.scss']
})
export class ProdutosCreateComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  create():void {

  }

  cancel():void {
    this.router.navigate(['/produtos']);
  }

}
