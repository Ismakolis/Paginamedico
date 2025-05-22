import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-medico',
  imports: [FooterComponent,ContactoComponent],
  templateUrl: './medico.component.html',
  styleUrl: './medico.component.css'
})
export class MedicoComponent {

}
