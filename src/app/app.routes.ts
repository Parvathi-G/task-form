import { Routes } from '@angular/router';
import { WizardComponent } from './wizard/wizard.component';


export const routes: Routes = [
    { path: '', redirectTo: '/wizard', pathMatch: 'full' },
    { path: 'wizard', component: WizardComponent, children: [
     
    ]},
  ];
;
