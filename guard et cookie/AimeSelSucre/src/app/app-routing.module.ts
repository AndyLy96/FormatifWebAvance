import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaramelAuSelComponent } from './caramel-au-sel/caramel-au-sel.component';
import { VerreDEauComponent } from './verre-deau/verre-deau.component';
import { BonbonComponent } from './bonbon/bonbon.component';
import { SelComponent } from './sel/sel.component';
import { monGuard2Guard } from './mon-guard2.guard';

const routes: Routes = [
  { path: 'caramelAuSel', component: CaramelAuSelComponent, canActivate: [monGuard2Guard] },
  { path: 'verreDEau', component: VerreDEauComponent, canActivate: [monGuard2Guard] },
  { path: 'bonbon', component: BonbonComponent, canActivate: [monGuard2Guard] },
  { path: 'sel', component: SelComponent, canActivate: [monGuard2Guard] },
  { path: '', redirectTo: 'caramelAuSel', pathMatch: 'full' },
  { path: '**', redirectTo: 'caramelAuSel' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
