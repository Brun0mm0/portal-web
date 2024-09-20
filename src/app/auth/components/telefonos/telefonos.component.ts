import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telefonos',
  templateUrl: './telefonos.component.html',
  styleUrl: './telefonos.component.scss'
})
export class TelefonosComponent {
constructor(private router:Router) {}

navegar(link:string) {
  window.open(link, '_blank')
}

}
