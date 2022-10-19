import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './basic/counter/counter.component';
import { RouterModule, Routes } from '@angular/router';
import { CharizardComponent } from './basic/charizard/charizard.component';

const routes: Routes = [
  { 
    path: "basic/counter",
    component: CounterComponent
  },
  {
    path: "basic/charizard",
    component: CharizardComponent
  },
  {
    path: "**",
    redirectTo: "basic/charizard"
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
