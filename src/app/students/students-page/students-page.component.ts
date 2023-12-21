import { Component } from '@angular/core';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss',
})
export class StudentsPageComponent {
  cargando = true;
  myFontSize = 23;
  hayError = false;
  students = ['Naruto', 'Sasuke', 'Sakura'];

  nombre = 'Juan';

  status = 'REJECTED';

  today = new Date();

  constructor() {
    setTimeout(() => {
      this.cargando = false;
    }, 3000);
  }

  toggleError() {
    this.hayError = !this.hayError;
  }
}
