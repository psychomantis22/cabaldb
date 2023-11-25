import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { BigmenuComponent } from './bigmenu/bigmenu.component';
import { GemCalcComponent } from './gem-calc/gem-calc.component';
import { PowerCalcComponent } from './power-calc/power-calc.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'gemcalc', component: GemCalcComponent },
  { path: 'powercalc', component: PowerCalcComponent },
  { path: '', component: BigmenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
