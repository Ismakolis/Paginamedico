import { Routes } from '@angular/router';
import { MedicoComponent } from './components/medico/medico.component';

export const routes: Routes = [
{path:'',redirectTo:'medico',pathMatch:'full'},
{path:'medico',component:MedicoComponent}


];
