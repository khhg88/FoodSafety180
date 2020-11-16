import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CriteriaComponent} from './criteria/criteria.component';
import { CriteriaCreateComponent } from './criteria-create/criteria-create.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: 'criteria', component: CriteriaComponent },
  { path: 'criteria/create', component: CriteriaCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CriteriaComponent, CriteriaCreateComponent];
