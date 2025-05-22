import { Routes } from '@angular/router';
import { MedicoComponent } from './components/medico/medico.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
{path:'',redirectTo:'medico',pathMatch:'full'},
{path:'medico',component:MedicoComponent},
{path:'footer',component:FooterComponent},
{path:'contacto',component:ContactoComponent}


];
