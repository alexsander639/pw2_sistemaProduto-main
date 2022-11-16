import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { merge, startWith, Subscription, switchMap, catchError, of, map, Subject, distinctUntilChanged, debounceTime } from 'rxjs';
import { Produto } from '../../../models/produtos.models/produtos.model';
import { ProdutosDeleteComponent } from '../produtos-delete/produtos-delete.component';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoadingResults: boolean = true;
  data: Produto[] = [];
  resultsLength: number = 0;
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = ['id', 'name', 'marca', 'status', 'valor', 'descricao', 'actions'];
  form!: FormGroup;
  refresh: Subject<boolean> = new Subject();

  constructor(private readonly router: Router,
    private readonly produtosService: ProdutosService,
    private readonly fb: FormBuilder,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      search: [],
    });

    const sub = this.form.get('search')!.valueChanges
    .pipe(
      distinctUntilChanged(),
      debounceTime(150))
    .subscribe(() => {
        this.paginator.firstPage();
        this.refresh.next(true);
    });
    this.subscriptions.push(sub);
  }

  ngAfterViewInit(): void {
    const sub = merge(this.refresh, this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        const search = this.form.get('search')?.value;
        return this.produtosService.listAll(this.paginator.pageIndex +1, this.paginator.pageSize, search)
        .pipe(catchError(() => of(null)));
      }),
      map((data) => {
        this.isLoadingResults = false;
        if(data){
          this.resultsLength = data.meta.totalItems;
          return data.items;
        }
        return [];
      })
    ).subscribe((data) => (this.data = data));
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  navigateToProdutosCreate():void{
    this.router.navigate(['/produtos/criar']);
  }

  openDeleteDialog(produto: Produto):void{
    const dialogRef = this.dialog.open(ProdutosDeleteComponent, {data: produto});
    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.produtosService.delete(produto.id as number).subscribe(()=> {
          this.paginator.firstPage();
          this.refresh.next(true);
          this.produtosService.showMessage('Produto excluído com sucesso!');
        });
      }
    });
  }
}
