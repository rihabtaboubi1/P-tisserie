import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheeseCakeComponent } from './cheese-cake/cheese-cake.component';
import { PromosComponent } from './promos/promos.component';
import { HomeComponent } from './home/home.component';
import { PiesComponent } from './pies/pies.component';
import { AllComponent } from './all/all.component';

const routes: Routes = [
    
    { path: 'pies', component: PiesComponent },
    { path: 'all', component: AllComponent } ,
    { path: 'cheeseCake', component: CheeseCakeComponent},
    { path: 'promos', component: PromosComponent} 

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
