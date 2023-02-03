import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import autocompleteData from '../../assets/autocomplete-data.json';
import itemDgData from '../../assets/item-dg.json';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface AutocompleteItem {
  id: number;
  nome: string;
  tipo: string;
}

export interface ItemDg {
  id_item: number;
  nome_item: string;
  tipo_item: string;
  id_dg: number;
  nome_dg: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  myControl = new FormControl<string | AutocompleteItem>('');
  options: AutocompleteItem[] = autocompleteData.sort((a,b) => a.nome.toLowerCase().replace('(elite)', '').trim().localeCompare(b.nome.toLowerCase().replace('(elite)', '').trim()));
  filteredOptions: Observable<AutocompleteItem[]>;
  selectedItem: AutocompleteItem;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const nome = typeof value === 'string' ? value : value?.nome;
        return nome ? this._filter(nome as string) : this.options.slice();
      }),
    );
  }

  displayFn(item: AutocompleteItem): string {
    return item && item.nome ? item.nome : '';
  }

  private _filter(nome: string): AutocompleteItem[] {
    const filterValue = nome.toLowerCase();
    return this.options.filter(option => option.nome.toLowerCase().includes(filterValue) || option.tipo.toLowerCase().includes(filterValue));
  }

  pesquisar() {
    this.selectedItem = this.myControl.value as AutocompleteItem;

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
  itemDgList: ItemDg[] = this.autocompleteItem.tipo === 'Calabouco' ? itemDgData.filter((idg) => this.autocompleteItem && idg.id_dg == this.autocompleteItem.id) : itemDgData.filter((idg) => this.autocompleteItem && idg.id_item == this.autocompleteItem.id);
  displayedColumns = this.autocompleteItem.tipo === 'Calabouco' ? ['nome_item', 'tipo_item'] : ['nome_dg'];
  title = this.autocompleteItem.tipo === 'Calabouco' ? this.autocompleteItem.nome : this.autocompleteItem.nome + ' - ' + this.autocompleteItem.tipo

  constructor(public dialogRef: MatDialogRef<SearchDialog>,
    @Inject(MAT_DIALOG_DATA) public autocompleteItem: AutocompleteItem) { }

  close(): void {
    this.dialogRef.close();
  }
}