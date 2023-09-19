import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriandisesAjoutComponent } from './components/friandises-ajout/friandises-ajout.component';
import { FriandisesListComponent } from './components/friandises-list/friandises-list.component';

const routes: Routes = [
  {path:'friandises',component:FriandisesListComponent},
  {path:'add',component:FriandisesAjoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
