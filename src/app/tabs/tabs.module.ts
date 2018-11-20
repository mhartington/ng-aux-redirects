import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { HomeComponent } from '../home/home.component';
const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        outlet: 'home'
      },
      {
        path: '',
        redirectTo: '/(home:home)',
        pathMatch: 'full'
      }
    ]
  }
];
@NgModule({
  declarations: [TabsComponent, HomeComponent],
  imports: [RouterModule.forChild(routes)]
})
export class TabsModule {}
