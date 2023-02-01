import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import itemsData from '../../assets/items.json';
import itemDgData from '../../assets/item_dg.json';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface Item {
  id: number;
  nome: string;
  tipo: string;
}

export interface ItemDg {
  id_item: number;
  nome_item: string;
  nome_dg: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  myControl = new FormControl<string | Item>('');
  options: Item[] = itemsData.sort((a,b) => a.nome.localeCompare(b.nome));
  filteredOptions: Observable<Item[]>;
  selectedItem: Item;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const nome = typeof value === 'string' ? value : value?.nome;
        return nome ? this._filter(nome as string) : this.options.slice();
      }),
    );
  }

  displayFn(item: Item): string {
    return item && item.nome ? item.nome : '';
  }

  private _filter(nome: string): Item[] {
    const filterValue = nome.toLowerCase();
    return this.options.filter(option => option.nome.toLowerCase().includes(filterValue) || option.tipo.toLowerCase().includes(filterValue));
  }

  pesquisar() {
    this.selectedItem = this.myControl.value as Item;

    if (this.selectedItem && this.selectedItem.id) {
      const dialogRef = this.dialog.open(SearchDialog, {
        width: '560px',
        enterAnimationDuration: '100ms',
        exitAnimationDuration: '100ms',
        data: this.selectedItem
      });

      dialogRef.afterClosed().subscribe(() => this.myControl.setValue(''));
    }
  }
}

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search.component-dialog.html',
  styleUrls: ['./search.component-dialog.css']
})
export class SearchDialog {
  dgList: ItemDg[] = itemDgData.filter((idg) => this.item && idg.id_item == this.item.id);
  displayedColumns = ['nome_dg'];

  constructor(public dialogRef: MatDialogRef<SearchDialog>,
    @Inject(MAT_DIALOG_DATA) public item: Item) { }

  close(): void {
    this.dialogRef.close();
  }
}