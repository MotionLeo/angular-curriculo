import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecalhoComponent } from './home/home.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { SobremimComponent } from './sobremim/sobremim.component';

const routes: Routes = [
    {path: '', component: CabecalhoComponent, pathMatch :'full'},
    {path: 'home', component: CabecalhoComponent},
    {path: 'sobremim', component: SobremimComponent},
    {path: 'experiencia', component: ExperienciaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }